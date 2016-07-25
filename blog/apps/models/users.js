var q = require("q");
<<<<<<< HEAD
exports.getAllUsers = function(connection) {
		var defer = q.defer();

		connection.query('SELECT * FROM tbl_user', function(err, rows, fields) {
		if (err) {
			defer.reject(err);
		} 
		defer.resolve(rows);
		// console.log('The solution is: ', rows[0].solution);
		});
		return defer.promise;
}
=======
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

























>>>>>>> 9599d917df492da9c7282e82abe5bfa60b773e3b
