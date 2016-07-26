var express = require("express");
var router = express.Router();

var user_model = require("../models/users");

router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));


router.get("/", function(req, res){
    // res.json({"message": "This is Home Page"});
    res.render("test", {name: "Cuong Ba"});
});

router.get("/signup", function(req, res){
    // res.json({"message": "This is Home Page"});
    res.render("signup_new");
});

router.post("/signup", function(req, res){
    // res.json({"message": "This is Home Page"});
    var params = req.body;
    console.log(req);

    var user = {
    	email : params.email,
    	firstName : params.firstName,
    	lastName : params.lastName,
    	password : params.password,
    	email : params.email
    };

    user_model.addUser(user);
    res.writeHead(301,
        {Location: 'http://localhost:3000/admin/users'}
    );
    res.end();
    // res.end(JSON.stringify(user));
});

router.get("/delete", function(req, res){
    // var ObjectId = require('mongodb').ObjectID;
    var user = {
        "_id" : new mongo.ObjectID("5796c5c5dec690dbaeec4632")
    };
    // var user = {
    //     "_id" : "5796c5c5dec690dbaeec4632"
    // };
    user_model.deleteUser(user);
    res.writeHead(301,
        {Location: 'http://localhost:3000/admin/users'}
    );
    res.end();
});

module.exports = router;