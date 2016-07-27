var q = require("q");
// var db = require("../common/databases");
// var conn = db.getConnection();
var mongo_db = require("../common/mongo_database");
var mongo_conn = mongo_db.getConnection();

// mudule.exports = function Users(connection){
//     this.conn = connection;

//     this.getAllUsers = function(){
//         var defer = q.defer();
//         this.conn.query('SELECT * FROM users', function(err, rows, fields) {
//             if (err) {
//                 defer.reject(err);
//             }

//             defer.resolve(rows);
//         });

//         return defer.promise;
//     }
// }

// module.exports = Users();

// exports.getAllUsers = function(){
//     var defer = q.defer();

//     conn.query('SELECT * FROM tbl_user', function(err, rows, fields) {
//         if (err) {
//             defer.reject(err);
//         }

//         defer.resolve(rows);
//     });

//     return defer.promise;
// }

function getAllUsers() {
	var defer = q.defer();

	mongo_conn.then(function(db){
		var users = db.collection('users');
		query = {};
		users.find(query).toArray(function(err, docs) {
		    // assert.equal(err, null);
		    // assert.equal(2, docs.length);
		    // console.log("Found the following records");
		    // console.dir(docs);
		    // callback(docs);
		    if(err) {
		    	defer.reject(err);
		    } else {
		    	defer.resolve(docs);
		    }
  		});
	});

	return defer.promise;
}

function addUser(user) {
	var defer = q.defer();
	mongo_conn.then(function(db){
		  var users = db.collection('users');
		  // console.log('vao day ko');
  // Insert some documents 
		  users.insertOne(user, function(err, result) {
		    // assert.equal(err, null);
		    // assert.equal(3, result.result.n);
		    // assert.equal(3, result.ops.length);
		    // console.log("Inserted 3 documents into the document collection");
		    // callback(result);
		    	if(err) {
		    		defer.reject(err);
		    	} else {
		    		defer.resolve(result);
		    	}
		  });
	});
	return defer.promise;
}	

function deleteUser(user) {
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

module.exports = {
	getAllUsers: getAllUsers,
	addUser: addUser,
	deleteUser: deleteUser,
};