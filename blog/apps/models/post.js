var q = require('q');

var mongo_db = require("../common/mongodb");


var ObjectId = require('mongodb').ObjectId;

var mongo_conn = mongo_db.getConnection();


exports.UpdatePost = function(post){

	var query = {"_id":post.id};

	var defer = q.defer();

	delete post.id;

	mongo_conn.then(function(db){

		// console.log(post);

		// console.log(query);

		// console.log(objId);

		var this_post = db.collection('post');

		this_post.updateOne(query,{$set:post},function(err,docs){

			if(err){
				defer.reject(err);
			}else{
				defer.resolve(docs);
			}

		});

	});

	return defer.promise;
}