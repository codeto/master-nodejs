var express = require("express");
var router = express.Router();
var config = require("config");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : config.get("mysql.host"),
  user     : config.get("mysql.user"),
  password : config.get("mysql.password"),
  database : config.get("mysql.database")
});

connection.connect();

var users_model = require("../models/users"); // co the viet users.js van duoc
//localhost:3000/admin/
router.get("/", function(req, res) {
	console.log(req.url);
	res.json({"message" : "This is Admin Default Page"});
});

//localhost:3000/admin/dashboard
router.get("/dashboard/", function(req, res) {
	console.log(req.url);
	res.json({"message" : "This is Dashboard Page"});
});

//localhost:3000/admin/dashboard
router.get("/users/", function(req, res) {
	var users = users_model.getAllUsers(connection);

	users.then(function(data) {
		console.log(data);
		res.json(data);
		// res.json({"message": "hello"})
	}).catch(function(err){
		console.log("Error");
	});
});

module.exports = router;