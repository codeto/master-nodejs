var express = require("express");
var config = require("config");
var mysql = require("mysql");
var bodyParser =  require("body-parser");
var app = express();
// app.use(bodyParser.json()); // cai nay bo cung ko sao
app.use(bodyParser.urlencoded({ extended: true }));
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

// app.use(bodyParser.json());

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
});