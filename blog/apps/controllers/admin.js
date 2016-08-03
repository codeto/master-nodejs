var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("config");


var users_model = require("../models/users");

// locahost:3000/admin/
router.get("/", function(req, res){
    // res.json({"message": "this is Admin Page"});
    res.render("admin/home", {data: {error: false}});
});

router.get("/users", function(req, res){
    var users = users_model.getAllUsers();

    users.then(function(data){
        console.log(data);
        res.json(data);

    }).catch(function(err){
        console.log("Error");
    });
});

module.exports = router;