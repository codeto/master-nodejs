var redis_db = require('./redis_db');

var client = redis_db.getClient();

var q = require('q');

var config = require('config');

function set(key,value,expire){
	client.set(key,value);
	if (expire){
		client.expire(key,expire);
	}else{
		var default_expire = config.get("redis.expire");
		client.expire(key,default_expire);
	}
	
}

function get(key){
	var defer = q.defer();

	client.get(key,function(err,reply){
		if(err) defer.reject(err);
		defer.resolve(reply);
	});
	return defer.promise;
}

function delete_key(key){
	client.set(key,null);
}

module.exports = {
	set:set,
	get:get,
	delete:delete_key
}