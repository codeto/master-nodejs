var express = require("express");
var config = require("config");

var bodyParser = require("body-parser");
var session = require("express-session");

var socketio = require("socket.io");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.get("session.secret_key"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  expires: 3600000
}));

// Configure for Router
var controllers = require(__dirname + "/apps/controllers");
var apis = require(__dirname + "/apps/apis");

app.use(controllers);
app.use(apis);

// Configure for Static file
app.use(express.static(__dirname + "/public"));

// Configure for Views
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");


var host = config.get("server.host");
var port = config.get("server.port");

var server = app.listen(port, host, function(){
    console.log("Server is running on port ", port);
});

// Init socket
var io = socketio(server);

var socketcontrol = require("./apps/common/socketcontrol")(io);



