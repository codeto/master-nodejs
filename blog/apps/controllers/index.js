var express = require("express");
var router = express.Router();

var users_model = require("../models/users");


router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));


router.get("/", function(req, res){
    // res.json({"message": "This is Home Page"});
    console.log(req.get("host"));
    res.render("test", {name: "Cuong Ba"});
});

router.get("/signup", function(req, res){
    res.render("signup");
});

router.post("/signup", function(req, res){
    var params = req.body;
    console.log(req);
    console.log(params);

    var user = {
        email: params.email,
        firstname: params.firstname,
        lastname: params.lastname,
        password: params.password
    };

    users_model.addUser(user);

});

module.exports = router;