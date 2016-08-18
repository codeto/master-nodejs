var express = require("express");
var router = express.Router();

// var session = require("../common/session");

var users_model = require("../models/users");

//Authentication
// router.use(function (req, res, next) {
//     console.log("a");
//     console.log(req.session.user);
//     if(req.session.user){
//         next();
//     }else{
//         // res.render("signin", {data: {error: false}});
//         res.redirect("/signin");
//     }
//     console.log("d");
// });

router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));


router.get("/", function(req, res){
    // res.json({"message": "This is Home Page"});
    console.log(req.get("host"));
    res.render("test", {name: "Cuong Ba"});
});

router.get("/signup", function(req, res){
    res.render("signup", {data: {error: false}});
});

router.post("/signup", function(req, res){
    var params = req.body;

    if (params.email.trim().length == 0){
        var data = {
            error: "Please enter an email"
        };

        res.render("signup", {data: data});
    } else if (params.password.trim().length == 0){
        var data = {
            error: "Password is missing, please enter password"
        };

        res.render("signup", {data: data});
    } else if(params.password.trim().length != 0 && params.password != params.repassword){
        var data = {
            error: "Password is not match"
        };

        res.render("signup", {data: data});
    }else{
        // var hash = hash_password(params.password);

        var user = {
            email: params.email,
            firstname: params.firstname,
            lastname: params.lastname,
            password: params.password
        };

        var result = users_model.addUser(user);

        result.then(function(data){
            res.redirect("signin");
        }).catch(function(err){
            res.render("signup", {data: {error: err}});
        });
    }
});

router.get("/signin", function(req, res){
    res.render("signin", {data: {error: false}});
});

router.post("/signin", function(req, res){
    var params = req.body;
    console.log(params);

    var result = users_model.getUserByEmail(params.email);
    console.log(result);
    result.then(function(users){
        console.log("=========");
        console.log(result);
        if(!users || users.length == 0){
            var data = {
                error: "User not exists"
            };

            res.render("signin", {data: data});
        }else{
            var user = users[0];
            if(user.password != params.password){
                var data = {
                    error: "Password is failue"
                };

                res.render("signin", {data: data});
            }else {
                // req.session.user = user;
                var expire = 1800;
                session.set("user", JSON.stringify(user), expire);

                res.redirect("admin");
            }
        }
    });

});

router.get("/chat", function(req, res){
    res.render("chat");
});

module.exports = router;













