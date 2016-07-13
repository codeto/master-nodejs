var http = require("http");
var fs = require("fs");
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
});

function serve_static_file(filepath, res) {
	var rs = fs.createReadStream(filepath);
	// Check in read file is error
	res.on("error", function(err){
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("File not found");
		res.end();
	});

	// If read file is success
	res.on("readable", function(err) {
		var d = rs.read();
		if(d) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(d);
		}
	});
	//su kien ket thuc doc file
	res.on("end", function(err) {
		res.end();
	});
}

var host = "localhost";
var port = 3000;

server.listen(port, host, function() {
	console.log("Server is running on", host, ":", port)
});