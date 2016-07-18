var express = require("express");
var config = require("config");

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

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port, host, function(){
    console.log("Server is running on port ", port);
});