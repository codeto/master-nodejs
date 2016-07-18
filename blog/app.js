var express = require('express');

var config = require('config');

var app = express();

var controllers = require(__dirname + "/apps/controllers");


var apis = require(__dirname + "/apps/apis");

app.use(controllers);
app.use(apis);

//config for static file
app.use(express.static(__dirname + '/public'));

//config for Views
app.set('views',__dirname + "/apps/views");
app.set('view engine','ejs');



var host = config.get('server.host');
var port = config.get('server.port');

app.listen(port,host,function(){
	console.log('Server is running on port 3000');
})

