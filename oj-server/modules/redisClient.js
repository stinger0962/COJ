// Wrapper of Redis to make it a singleton class
var redis = require('redis');
var client = redis.createClient();

// set wrapper
function set(key, value, callback) {
	client.set(key, value, function(err, res) {
		if (err) {
			console.log(err);
			return;
		}

		callback(res);
	});
}

// get wrapper
function get(key, callback) {
	client.get(key, function(err, res) {
		if (err) {
			console.log(err);
			return;
		}

		callback(res);
	});
}

function expire(key, timeInSeconds) {
	client.expire(key, timeInSeconds);
}

function quit() {
	client.quit();
}

module.exports = {
	get: get,
	set: set,
	expire: expire,
	quit: quit,
	redisPrint: redis.print
}
