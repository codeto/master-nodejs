mysql = require('mysql');

var connection = mysql.createConnection(
	{
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'nodejs'
	}
);


connection.connect();

var queryString = "SELECT * FROM member";

connection.query(queryString, function(err, rows, fields) {
	if(err) {
		throw err;
	} else {
		for(var i in rows) {
			console.log("Day la dong so : ", rows[i].name);
		}
	}
});

connection.end();