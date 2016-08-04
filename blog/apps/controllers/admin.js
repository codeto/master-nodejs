var express = require("express");
var router = express.Router();

// var mysql = require("mysql");
var config = require("config");
// Configure for MySQL
// var connection = mysql.createConnection({
//   host     : config.get("mysql.host"),
//   port      : config.get("mysql.port"),
//   user     : config.get("mysql.user"),
//   password : config.get("mysql.password"),
//   database : config.get("mysql.database")
// });

// connection.connect();
var users_model = require("../models/users");

// locahost:3000/admin/
router.get("/", function(req, res){
    res.json({"message": "this is Admin Page"});
     // res.render("admin/show");
});

router.get("/users", function(req, res){
	// res.render("list_user");
    var users = users_model.getAllUsers();

    users.then(function(data){
        console.log(data);
	    // res.json(data);
        res.render("admin/list_user",{data: data});
    }).catch(function(err){
        console.log("Error in get User");
    });
});

router.get("/deleteUser/:id", function(req, res){
    var ObjectId = require('mongodb').ObjectID;
    var user = {
        _id : ObjectId(req.params.id)
    };
    console.log(user);
    console.log(typeof(user));
    users_model.deleteUser(user);
    res.writeHead(301,
        {Location: 'http://localhost:3000/admin/users'}
    );
    res.end();
});

router.put("/updateUser/:id", function(req, res){
    var ObjectId = require('mongodb').ObjectID;
    var user = {
        _id : ObjectId(req.params.id)
    };
    console.log(user);
    console.log(typeof(user));
    users_model.deleteUser(user);
    res.writeHead(301,
        {Location: 'http://localhost:3000/admin/users'}
    );
    res.end();
});


module.exports = router;