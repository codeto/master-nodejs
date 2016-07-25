<<<<<<< HEAD
// File khoi tao du an, tat ca config deu nam o day

// thu muc config phai dat ngang hang voi thu muc app
//Khoi tao express
var express = require("express");
//module giup lay toan bo json config ra
var config = require("config");

var mysql = require("mysql");

// Tuong duong voi http o buoi truoc
var app = express();

//Configurate for Router
var controllers = require(__dirname + "/apps/controllers");
var apis = require(__dirname + "/apps/apis");
app.use(controllers);
app.use(apis);

//Configurate for static file
app.use(express.static(__dirname + "/public"));
// app.use('/public', express.static(path.join(__dirname + '/public')));

// COnfigurate for View
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

var connection = mysql.createConnection({
  host     : config.get("mysql.host"),
  user     : config.get("mysql.user"),
  password : config.get("mysql.password"),
  database : config.get("mysql.database")
});

connection.connect();

//NODE_DEV=dev node app.js
var host = config.get("server.host");
var port = config.get("server.port");
// app.get("/", function(req, res){
// 	res.json({"message": "Hello express framework"});// tra ve dang json
// });

app.listen(3000, function(){
	console.log("Server is running on port", 3000);
=======
var express = require("express");
var config = require("config");
var mysql = require("mysql");

var app = express();

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

// // Configure for MySQL
// var connection = mysql.createConnection({
//   host     : config.get("mysql.host"),
//   port      : config.get("mysql.port"),
//   user     : config.get("mysql.user"),
//   password : config.get("mysql.password"),
//   database : config.get("mysql.database")
// });

// connection.connect();

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port, host, function(){
    console.log("Server is running on port ", port);
>>>>>>> 9599d917df492da9c7282e82abe5bfa60b773e3b
});