var config = require('config');

var mongodb = require('mongodb');

var assert = require('assert');

var q = require("q");

var MongoClient = mongodb.MongoClient;

var mongo_host = config.get("mongodb.host");
var mongo_port = config.get("mongodb.port");
var mongo_db = config.get("mongodb.database");

var url = "mongodb://" + mongo_host + ":"+ mongo_port + "/" + mongo_db;

function getConnection(){
	var defer = q.defer();

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected correctly to server");
	 if (err){
	 	defer.reject(err);
	 }else{
	 	defer.resolve(db);
	 }
	  // db.close();
	});
	return defer.promise;
}

module.exports = {
	getConnection:getConnection
}