var http = require('http');

mysql = require('mysql');

var connection = mysql.createConnection({
	user : "root",
	password : "",
	database : "nodejs"
});

http.createServer(function(request, response) {
	console.log(request.method);
	var queryString = "SELECT * FROM member";
	connection.query(queryString, function(error, rows, fields) {
		response.writeHead(200, {"Content-Type" : "application/json"});
		response.end(JSON.stringify(rows));
	});
		
}).listen(3000);

console.log("Start");