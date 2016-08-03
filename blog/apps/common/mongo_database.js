var config = require("config");
var mongodb = require("mongodb");
var assert = require('assert');

var q = require("q");

var MongoClient = mongodb.MongoClient;

var mongo_host = config.get("mongo.host");
var mongo_port = config.get("mongo.port");
var mongo_db = config.get("mongo.database");

var url = "mongodb://" + mongo_host + ":" + mongo_port + "/" + mongo_db;

function getConnection(){
    var defer = q.defer();

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        // console.log("Connected correctly to server");

        if(err){
            defer.reject(err);
        }else{
            defer.resolve(db);
        }

      // db.close();
    });

    return defer.promise;
}

module.exports = {
    getConnection: getConnection
}












