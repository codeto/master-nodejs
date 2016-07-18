var http = require('http');

var server = http.createServer(function(req,res){
	console.log(req.method);
	res.writeHead(200,{'content-type':'text/plain'});
	res.write('Hello world');
	res.end();
});

server.listen('3000','localhost',function(){
	console.log('server is running:','localhost',' 3000');
})