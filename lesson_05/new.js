var http = require("http");

//request 


//response : tra ve ket qua cho nguoi dung, dinh nghia kieu du lieu se tra ve
var server = http.createServer(function(req, res) {
	console.log("Incoming Request" ,  req.method, '- ', req.url);

	//Route, check truong hop url giong nhau
	if(req.method == "GET" && req.url == "/") {
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write("<h1>This is home page</h1>");
		res.end();// tranh loi quay quay
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

var host = "localhost";
var port = 3000;

server.listen(port, host, function() {
	console.log("Server is running on", host, ":", port)
});