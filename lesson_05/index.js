var http = require("http");
var fs = require("fs");
var path = require("path");
var model = require("./model");
var	mysql = require("mysql");
	var url = require("url");

var connection = mysql.createConnection({
	user : "root",
	password : "",
	database : "nodejs"
});
//request 
//response : tra ve ket qua cho nguoi dung, dinh nghia kieu du lieu se tra ve
var server = http.createServer(function(req, res) {
	console.log("===Incoming Request" ,  req.method, '- ', req.url);
	var words = req.url.split(".");
	console.log(words);

	if(words && words.length == 2) {   // Link ngan
		console.log("===words.length = 2");
		var extension = words[1].toLowerCase();
	} else if(words && words.length == 3) {  // Link dai
		console.log("===words.length = 3");
		var extension = words[2].toLowerCase();
	} else {
		console.log("Sai dinh dang cmnr",words, words.length);
	}

	if(extension == "css" || extension == 'js') {
			serve_static_file('.' + req.url, res);
	}

	//Route, luu y phai check truong hop url giong nhau
	if(req.method == "GET" && req.url == "/") {
		serve_static_file('views/index.html', res);
	}

	if(req.method == "GET" && req.url == "/api/first") {
		res.writeHead(200, {"Content-Type" : "application/json"});
		var body = {
		"status" : 200,
		"data" : "This is body",
		"error" : false
		}
		res.write(JSON.stringify(body));
		res.end();
	}

	if(req.method == "GET" && req.url == "/api1/users") {
		console.log("===GET API USER");
		var users = model.getAllUsers();
		res.writeHead(200, {"Content-Type" : "application/json"});
		res.write(JSON.stringify(users));
		res.end();
	}

	if(req.method == "GET" && req.url == "/api/user_from_db") {
		console.log("===GET USER FROM DATABASE");
		var queryString = "SELECT * FROM member";
		connection.query(queryString, function(error, rows, fields) {
			console.log("===DEBUG HERE");
			res.writeHead(200, {"Content-Type" : "application/json"});
			res.end(JSON.stringify(rows));
		});
	}

	if(req.method == "GET" && req.url == "/addUser") {
		console.log("===FORM ADD USER");
		res.writeHead(200, {"Content-Type" : "text/html"});
		serve_static_file('views/addUser.html', res);
	}

	//API Get Specify user by ID 
	var path = url.parse(req.url, true);// True tra ve mot doi tuong json, false la string
	var pathname = path.pathname;
	if(req.method == "GET" && pathname == '/api/user') {
		var params = path.query;
		var id = params.id;
		var user = model.getUserById(id);
		console.log("params : ", params);
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(user));
	}


	if(req.method == "POST") {
		console.log("===FORM POST USER");
	}

	//POST
	//body gui len co id : 5, name : Ha Anh Son
	if(req.method == "POST" && pathname == '/api/user/new') {
		req.on("data", function(chunk) {

			console.log(chunk);
			var user = JSON.parse(chunk.toString());
			console.log(user);
			console.log(typeof(user));
			model.addUser(user);
		});

		// Send result to client
		req.on("end", function(){
			res.writeHead(200, {"Content-Type": "application/json"});
			var users = model.getAllUsers();
			res.end(JSON.stringify(users));
		});
	}

});

function get_content_type(filepath) {
	var ext = path.extname(filepath);
	ext = ext.toLowerCase();
	console.log("EXTENSION TYPE IS " + ext);

	switch(ext) {
		case '.html':
			return "text/html";
		case '.css' :
			return "text/css";
		case '.js' :
			return "text/javascript";
		default : 
			return "text/plain";		
	}
}

function serve_static_file(filepath, res) {
	console.log(filepath);
	console.log("serve_static_file FUNCTION");
	var rs = fs.createReadStream(filepath);
	//get content type
	var content_type = get_content_type(filepath);
	// Check in read file is error
	rs.on("error", function(err){
		console.log("error");
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("File not found");
		res.end();
	});

	// If read file is success
	rs.on("readable", function() {
		console.log("readable", content_type);
		var data = rs.read();
		if(data) {
			res.writeHead(200, {"Content-Type": content_type});
			res.write(data);
		}
	});
	//su kien ket thuc doc file
	rs.on("end", function(err) {
		res.end();
	});
}

var host = "localhost";
var port = 3000;

server.listen(port, host, function() {
	console.log("Server is running on", host, ":", port)
});