var express = require("express");
var router = express.Router();

var posts_model = require("../models/posts");

// locahost:3000/blog/
router.get("/", function(req, res){
    // res.json({"message": "this is Blog Page"});
    var data = posts_model.getALlPosts();
    data.then(function(posts){
        var result = {
            posts: posts,
            error: false
        };

        res.render("blog/index", {data: result});
    }).catch(function(err){
        res.render("blog/index", {data: {error: true}});
    });

});

router.get("/post/:id", function(req, res){
    var _id = req.params.id;

    var data = posts_model.getPostById(_id);
    data.then(function(posts){
        var post = posts[0];
        var result = {
            post: post,
            error: false
        };

        res.render("blog/post", {data: result});
    }).catch(function(err){
        res.render("blog/post", {data: {error: true}});
    });
});

router.get("/about", function(req, res){
    res.render("blog/about");
});

module.exports = router;