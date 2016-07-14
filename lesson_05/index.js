var http = require("http");
var fs = require("fs");
var path = require("path");
var model = require("./model");
//request 

//response : tra ve ket qua cho nguoi dung, dinh nghia kieu du lieu se tra ve
var server = http.createServer(function(req, res) {
	console.log("Incoming Request" ,  req.method, '- ', req.url);

	//Route, check truong hop url giong nhau
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

	var words = req.url.split(".");
	console.log(words);
	if(words && words.length == 2) {
		console.log("Debug 2");
		var extension = words[1].toLowerCase();
		if(extension == "css" || extension == 'js') {
			serve_static_file('.' + req.url, res);
		}
	}

	if(words && words.length == 3) {
		console.log("Debug 3");
		var extension = words[2].toLowerCase();
		if(extension == "css" || extension == 'js') {
			serve_static_file('.' + req.url, res);
		}
	}

	if(req.method == "GET" && req.url == "/api/users") {
		console.log("GET API USER");
		var users = model.getAllUsers();
		res.writeHead(200, {"Content-Type" : "application/json"});
		res.write(JSON.stringify(users));
		res.end();
	}
});

function get_content_type(file) {
	var ext = path.extname(file);
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
		var d = rs.read();
		if(d) {
			res.writeHead(200, {"Content-Type": content_type});
			res.write(d);
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