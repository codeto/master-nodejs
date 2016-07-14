var http = require('http');
//request object: url, method
var fs = require('fs');

var path = require('path');


var model = require('./model.js');
//respond write head, write
var server = http.createServer(function(req,res){
	console.log('In comming request: ',req.method,'-',req.url);
//create root

	if (req.method == "GET" && req.url == '/'){
		// res.writeHead(200,{'Content-Type':'text/html'});
		// res.write('<h1>Welcome to homepage</h1>');
		// res.end();
		server_static_file('views/index.html',res);
	}
	if (req.method == 'GET' && req.url == '/api/first'){
		res.writeHead(200,{'Content-Type':'Application/json'});

		var body = {
			'status':200,
			'data':'This is the first API',
			'error':false
		}
		res.write(JSON.stringify(body));
		res.end();
	}
	var  words = req.url.split('.');
	if (words && words.length > 1){
		var extenstion = words[1].toLowerCase();

		if (extenstion == 'css' || extenstion == 'js'){
			server_static_file('.'+req.url,res);
		}
	}
	/////============api
	if(req.method == 'GET' && req.url == '/api/users'){
		var users = model.getAllUser();
		res.writeHead(200,{'content_type':'Application/json'});
		res.write(JSON.stringify(users));
		res.end();
	}

});

function get_content_type(file){
	var ext = path.extname(file);
	ext = ext.toLowerCase();

	switch(ext){
		case '.html':return 'text/html';
		case '.css':return 'text/css';
		case '.js':return 'text/javascript';
		default:return 'text/plain';
	}
}

function server_static_file(filepatch,res){
	var rs = fs.createReadStream(filepatch);

	//check content type
	var content_type = get_content_type(filepatch);

	// check if read if is ERROR
	rs.on('error',function(err){
		res.writeHead(404,{'content-type':'text/html'}).
		res.write('<h1>error</h1>');
		res.end();
	});

	rs.on('readable',function(){
		var d = rs.read();
		if (d){
			res.writeHead(200,{'content-type':content_type});
			res.write(d);
		}
	});

	rs.on('end',function(){
		res.end();
	});


}

var host = 'localhost';

var port = '3000';

server.listen(port,host,function(){
	console.log('server is running on ',host, ':',port);
});


