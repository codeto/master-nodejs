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



module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser
}



// exports.getAllUsers = function(){
//     var defer = q.defer();

//     conn.query('SELECT * FROM users', function(err, rows, fields) {
//         if (err) {
//             defer.reject(err);
//         }

//         defer.resolve(rows);
//     });

//     return defer.promise;
// }




