# implement utility functions

import docker # container to run code
import os # file system
import shutil # high-lvl file operation
import uuid # generate a unique ID for each request

# for debugging docker related problems
from docker.errors import APIError
from docker.errors import ContainerError
from docker.errors import ImageNotFound

# get current dir
CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))


# docker image name
IMAGE_NAME = 'executor'

client = docker.from_env()

# store code in tmp folder
TEMP_BUILD_DIR = "%s/tmp/" % CURRENT_DIR
CONTAINER_NAME = "%s:latest" % IMAGE_NAME

# source file names
SOURCE_NAMES = {
    'java': 'Solution.java',
    'python': 'example.py',
    'c++': 'example.cpp'
}

# commands to build code
BUILD_COMMANDS = {
    'java': 'javac',
    'python': 'python3',
    'c++': 'g++'
}

# binary file names generated by building
BINARY_NAMES = {
    'java': 'Solution',
    'python': 'example.py',
    'c++': './a.out'
}

# commands to execute binary files
EXECUTE_COMMANDS = {
    'java': 'java',
    'python': 'python3',
    'c++': ''
}


# implement utility functions

def make_dir(dir):
    try:
        os.makedirs(dir)
    except OSError as e:
        print ("[OSError - mkdir]: {0}".format(e))
        print("[Fail] cannot create a directory")

# load docker image to client object
def load_image():
    try:
        client.images.get(IMAGE_NAME)
        print('[Ok] Local image load successfully')

    except ImageNotFound:
        print('[Ok] Local image not found, pull from dockerhub')
        client.image.pull(IMAGE_NAME)
    except APIError:
        print('[Fail] Failed to load image, exit')
        return

# build and run code, return running result to Node server
def build_and_run(code, lang):
    result = {'build': None, 'run': None, 'error': None}

    # create unique file name for each request
    unique_dir_name = uuid.uuid4()
    # host: server running this python server
    # guest: docker image to build and run code
    # these two dirs are bound together in docker's volumns setting
    shared_host_dir = "%s%s" % (TEMP_BUILD_DIR, unique_dir_name)
    shared_guest_dir = "/test/%s" % (unique_dir_name)

    # make shared dir on host
    make_dir(shared_host_dir)
    # write into source file on the host
    # CUR_DIR/tmp/uuid4/SRC_FILE_FOR_LANG
    # (e.g.) cur_dir/tmp/1ac32sxz/Example.java
    with open("%s/%s" % (shared_host_dir, SOURCE_NAMES[lang]), 'w') as source_file:
        source_file.write(code)

    # build code on docker/guest
    try:
        client.containers.run(
                image = IMAGE_NAME,
                command = "%s %s" % (BUILD_COMMANDS[lang], SOURCE_NAMES[lang]),
                volumes = {shared_host_dir: {'bind': shared_guest_dir, 'mode': 'rw'}},
                working_dir = shared_guest_dir
        )
        print ("[Ok] source file built successfully")
        print ("[DIR]", shared_host_dir)
        result['build'] = 'Ok'

    except ContainerError as e:
        print ("[Fail] failed to build source file, exit")
        result['build'] = str(e.stderr, 'utf-8')
        # clean up temp dir and files
        shutil.rmtree(shared_host_dir)
        return result

    print ("[SHARED_HOST_DIR]", shared_host_dir);
    print ("[SHARED_GUEST_DIR]", shared_guest_dir);
    # run code on docker/guest
    try:
        log = client.containers.run(
                image = IMAGE_NAME,
                command = "%s %s" % (EXECUTE_COMMANDS[lang], BINARY_NAMES[lang]),
                volumes = {shared_host_dir: {'bind': shared_guest_dir, 'mode': 'rw'}},
                working_dir = shared_guest_dir
        )
        log = str(log, 'utf-8')
        print ("[Ok] binary file run successfully")
        result['run'] = log
    except APIError as e:
        print ("[APIError - run binary file]: {0}".format(e))

    except ContainerError as e:
        print ("[Fail] failed to run binary file, exit")
        result['run'] = str(e.stderr, 'utf-8')
        shutil.rmtree(shared_host_dir)
        return result

    # shutil.rmtree(shared_host_dir)
    return result
