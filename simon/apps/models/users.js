var q = require("q");
// var db = require("../common/databases");
// var conn = db.getConnection();
var mongo_db = require("../common/mongo_database");

var mongo_conn = mongo_db.getConnection();

function getAllUsers(){
    var defer = q.defer();

    mongo_conn.then(function(db){
        // Get the documents collection
        var users = db.collection('users');

        var query = {};
        // Find some documents
        users.find(query).toArray(function(err, docs) {
            // assert.equal(err, null);
            // assert.equal(2, docs.length);

            if(err){
                defer.reject(err);
            }else{
                defer.resolve(docs);
            }
        });

    });

    return defer.promise;
}

function addUser(user){
    var defer = q.defer();

    mongo_conn.then(function(db){
        // Get the documents collection
        var users = db.collection('users');

        // Insert new user from controller
        users.insertOne(user, function(err, result) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });

    });

    return defer.promise;
}

function getUserByEmail (email){
    // Khoi tao
    var defer = q.defer();

    mongo_conn.then(function(db){
        //Select Collection
        var users = db.collection("users");

        //Query
        users.find({email: email}).toArray(function(err, docs){
            if(err){
                // Day du lieu
                defer.reject(err);
            }else{
                // Day ket qua
                defer.resolve(docs);
            }
        });
    });

    // Tra lai ket qua
    return defer.promise;
}



module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    getUserByEmail: getUserByEmail
}




