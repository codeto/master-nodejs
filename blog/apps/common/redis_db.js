var redis = require("redis");

var config = require("config");

var option = {
	host:config.get("redis.host"),
	port:config.get("redis.port"),
	password:config.get("redis.pass")
};

//var client = redis.createClient()

var client = null;

function getClient(){
	if (client == null){
		client = redis.createClient(option);
	}

	return client;
}

module.exports = {
	getClient:getClient
}