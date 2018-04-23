# router for code execution server
import json
from flask import Flask
app = Flask(__name__)
from flask import jsonify
from flask import request

import executor_utils as eu

@app.route('/build_and_run', methods=['POST'])
def build_and_run():
    
    # get data from node server and check its validity
    data = request.get_json()

    if 'code' not in data or 'lang' not in data:
        return 'Invalid input from Node server'

    code = data['code']
    lang = data['lang']
    print("Executor receives request to execute: [%s]: %s" % (lang, code))

    result = eu.build_and_run(code, lang)
    return jsonify(result) # send data to network --> serialization


if __name__ == '__main__':
    # load docker image
    eu.load_image()
    # enable debug mode for development
    app.run(debug=True)
