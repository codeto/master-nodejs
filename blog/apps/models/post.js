var q = require('q');

var mongo_db = require("../common/mongodb");


var mongo_conn = mongo_db.getConnection();


exports.UpdatePost = function(params){

	var query = {"_id": require("mongodb").ObjectID(params.id) };

	var defer = q.defer();

	delete params.id;

	mongo_conn.then(function(db){

		var post = db.collection('post');

		post.updateOne(query,{$set:params},function(err,docs){
console.log(query);
			if(err){
				defer.reject(err);
			}else{
				defer.resolve(docs);
			}

		});

	});

	return defer.promise;
};
exports.CountElement = function(){


	var defer = q.defer();

	mongo_conn.then(function(db){

		var post = db.collection('post');

		post.find({}).toArray(function(err,docs){

			if(err) defer.reject(err);
			else defer.resolve(docs);
		});

	});

	return defer.promise;

}
exports.AddOnePost = function(article){

	var defer = q.defer();

	mongo_conn.then(function(db){

		var post = db.collection('post');

		post.insert(article,function(err,docs){

			if(err) defer.reject(err);
			else defer.resolve(docs);
		});

	});

	return defer.promise;
}
exports.deletePost = function(posts){

	var defer = q.defer();

	mongo_conn.then(function(db){

		var post = db.collection('post');

		post.deleteOne(posts,function(err,result){
			if(err){
				defer.reject(err);
			}else{
				defer.resolve(result);
			}
		})
		
	});

	return defer.promise;
}