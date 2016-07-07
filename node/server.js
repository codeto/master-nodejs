var http = require ('http');
var fs = require ('fs');

var server = http.createServer(function(reques,response){
	var url = reques.url;
	if (url == '/admin'){
		response.writeHead(200,{"content-type":"text/html"});
		fs.createReadStream('./admin.js').pipe(response);
		response.write('You are in control panel');
		response.end();

	} else {
		response.writeHead(200,{'content-type':'text/html'});
		response.write('<title>DL Node</title>');
		response.end();

	}
});

server.listen(3000,function(){
	console.log('Server is running on port 3000');
})
