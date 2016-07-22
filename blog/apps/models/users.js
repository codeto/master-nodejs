var q = require("q");
var db = require("../common/databases");

var conn = db.getConnection();

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

exports.getAllUsers = function(){
    var defer = q.defer();

    conn.query('SELECT * FROM users', function(err, rows, fields) {
        if (err) {
            defer.reject(err);
        }

        defer.resolve(rows);
    });

    return defer.promise;
}

























