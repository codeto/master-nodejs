var http = require("http");
var fs = require("fs");
var path = require("path");
//request 

//response : tra ve ket qua cho nguoi dung, dinh nghia kieu du lieu se tra ve
var server = http.createServer(function(req, res) {
	console.log("Incoming Request" ,  req.method, '- ', req.url);

	//Route, check truong hop url giong nhau
	if(req.method == "GET" && req.url == "/") {
		serve_static_file('views/index.html', res);
	}
	if(req.method == "GET" && req.url == "/api/user") {
		res.writeHead(200, {"Content-Type" : "application/json"});
		var user = {
			"id": 1,
			"name" : "Simon Ha",
			"age" : 28
		}
		res.write(JSON.stringify(user));
		res.end();
	}

	var words = req.url.split(".");
	if(words && words.length > 1) {
		var extension = words[1].toLowerCase();
		if(extension == "css") {
			serve_static_file('.' + req.url, res);
		}
	}
});

function get_content_type(file) {
	var ext = path.extname(file);
	ext = ext.toLowerCase();

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