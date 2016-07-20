var q = require("q");
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
