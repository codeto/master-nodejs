var express = require('express');

var config = require('config');

var mysql = require('mysql');

var session = require('express-session');

var redisStore = require('connect-redis')(session);


var socketio = require('socket.io');

var bodyParser = require("body-parser");

var app = express();

app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: config.get("redis.host"), port: config.get("redis.port"), client: client,ttl :  260}),
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('trust proxy',1);
// app.use(session({
// 	secret:config.get('session.secret_key'),
// 	resave:false,
// 	saveUninitialized:true,
// 	cookie:{secure:true},
// 	expires:3600000
// }));

var redis_db = require('./apps/common/redis_db');

var client = redis_db.getClient();



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

var server = app.listen(port,host,function(){
	console.log('Server is running on port 3000');
});

//init socket
var io = socketio(server);
var socketcontrol = require("./apps/common/sockecont")(io);
