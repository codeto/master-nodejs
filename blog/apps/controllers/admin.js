var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("config");


var users_model = require("../models/users");
var posts_model = require("../models/posts");

// locahost:3000/admin/
router.get("/", function(req, res){
    // res.json({"message": "this is Admin Page"});
    var data = posts_model.getALlPosts();

    data.then(function(posts){
        var data = {
            error: false,
            posts: posts
        };

        res.render("admin/home", {data: data});
    }).catch(function(err){
        var data = {
            error: "Error, could not get posts data"
        };

        res.render("admin/home", {data: data});
    });


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


router.get("/post/new", function(req, res){
    console.log("enter");
    res.render("admin/post/new", {data: {error: false }});
});

router.post("/post/new", function(req, res){
    var params = req.body;

    var now = new Date();
    params.created_at = now;
    params.updated_at = now;

    var data = posts_model.addPost(params);
    data.then(function(result){
        res.redirect("/admin");
    }).catch(function(err){
        res.render("admin/post/new", {data: {error: "Could not insert post data" }})
    });
});

router.get("/post/edit/:id", function(req, res){
    var params = req.params;
    var id = params.id;

    var data = posts_model.getPostById(id);

    data.then(function(posts){
        var post = posts[0];

        var data = {
            error: false,
            post: post
        };

        res.render("admin/post/edit", {data: data});
    }).catch(function(err){
        var data = {
            error: "Could not get Post data"
        };

        res.render("admin/post/edit", {data: data});
    });
});

router.put("/post/edit", function(req, res){
    console.log(req.body);
    var params = req.body;

    var data = posts_model.updatePost(params);

    data.then(function(result){
        res.redirect("/admin");
    }).catch(function(err){
        var data = {
            error: "Could not update Post data"
        };

        res.render("admin/post/edit", {data: data});
    });
});



module.exports = router;














