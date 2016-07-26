var q = require('q');

//var db = require("../common/database");

var mongo_db = require("../common/mongodb");

//var conn = db.getConnection();

var mongo_conn = mongo_db.getConnection();

// exports.GetAllUser = function(){
// 	var defer = q.defer();
// 		conn.query('SELECT * from tbl_user', function(err,rows,fields){
// 			if (err){
// 				defer.reject(err);
// 			}
// 			defer.resolve(rows);
// 		});
// 		return defer.promise;
// 	}
exports.GetAllUsers = function(){
	var defer = q.defer();

	mongo_conn.then(function(db){

		var users = db.collection('users');

		var query = {};
		  // Find some documents 
		  users.find({}).toArray(function(err, docs) {
		    // assert.equal(err, null);
		    // assert.equal(2, docs.length);
		  	if(err){
		  		defer.reject(err);
		  	}else{
		  		defer.resolve(docs);
		  	}
		  });

	})
	
return defer.promise;
}

exports.addUser = function(user){

	var defer = q.defer();

	mongo_conn.then(function(db){


		var users = db.collection('users');

		users.insert(user,function(err,result){
			if(err){
				defer.reject(err);
			}else{
				defer.resolve(result);
			}
		})
		
	});

	return defer.promise;
}
exports.deleteUser = function(user){

	var defer = q.defer();

	mongo_conn.then(function(db){


		var users = db.collection('users');

		users.remove(user,function(err,result){
			if(err){
				defer.reject(err);
			}else{
				defer.resolve(result);
			}
		})
		
	});

	return defer.promise;
}