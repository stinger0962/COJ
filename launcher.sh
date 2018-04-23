#! /bin/bash

# close apps that occupy necessary ports
fuser -k 3000/tcp
fuser -k 5000/tcp

# start services one by one
service redis_6379 start

# we need to fix a conf bug to bypass this line
redis-server &

cd ./oj-server
nodemon server.js &

# back to parent dir
cd ../executor
pip3 install --user -r requirements.txt
python3 executor_server.py &

# waiting for user input to terminate app
echo "=========================="
read -p "Press [Enter] to terminate the application" PRESSKEY

# terminate each process
fuser -k 3000/tcp
fuser -k 5000/tcp
service redis_6379 stop
