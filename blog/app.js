// File khoi tao du an, tat ca config deu nam o day
//Khoi tao express
var express = require("express");
//module giup lay toan bo json config ra
var config = require("config");

// Tuong duong voi http o buoi truoc
var app = express();

//Configurate for Router
var controllers = require(__dirname + "/apps/controllers");
var apis = require(__dirname + "/apps/apis");
app.use(controllers);
app.use(apis);

//Configurate for static file
app.use(express.static(__dirname + "/public"));

// COnfigurate for View
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

//NODE_DEV=dev node app.js
var host = config.get("server.host");
var port = config.get("server.port");
// app.get("/", function(req, res){
// 	res.json({"message": "Hello express framework"});// tra ve dang json
// });

app.listen(3000, function(){
	console.log("Server is running on port", 3000);
});