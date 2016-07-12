var http = require('http');

var fs = require('fs');

http.createServer(function(request, response){
	request.on("end", function(){
		if(request.url = "/") {
			fs.readFile("data_2.txt", "utf-8", function(error, data) {
				response.writeHead(200, {"Content-Type" : "text/plain"});
			});
			data = parseInt(data) + 1;

			fs.writeFile("test.ext", data);
			response.end("this page was refreshed" + data + time);
		} else {
			response.writeHead(404);
			response.end();
		}
	});
}).listen(8080);

// BAI NAY LOI