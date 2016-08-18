var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("config");

var session = require("../common/session");

var users_model = require("../models/users");
var posts_model = require("../models/posts");

// locahost:3000/admin/
router.get("/", function(req, res){
    var user = session.get("user");
    user.then(function(result){
        if(result){
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
        }else{
            res.redirect("/signin");
        }
    }).catch(function(err){
        res.redirect("/signin");
    });


});

router.get("/users", function(req, res){
    var user = session.get("user");
    user.then(function(result){
        if(result){
            // res.json({"message": "this is Admin Page"});
            var users = users_model.getAllUsers();

            users.then(function(data){
                console.log(data);
                res.json(data);

            }).catch(function(err){
                console.log("Error");
            });
        }else{
            res.redirect("/signin");
        }
    }).catch(function(err){
        res.redirect("/signin");
    });

});


router.get("/post/new", function(req, res){
    var user = session.get("user");
    user.then(function(result){
        if(result){
            res.render("admin/post/new", {data: {error: false }});
        }else{
            res.redirect("/signin");
        }
    }).catch(function(err){
        res.redirect("/signin");
    });

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
    var user = session.get("user");
    user.then(function(result){
        if(result){

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
        }else{
            res.redirect("/signin");
        }
    }).catch(function(err){
        res.redirect("/signin");
    });

});

router.put("/post/edit", function(req, res){
    console.log(req.body);
    var params = req.body;

    var data = posts_model.updatePost(params);

    data.then(function(result){
        res.json({status_code: 200});
    }).catch(function(err){
        var data = {
            error: "Could not update Post data"
        };

        res.render("admin/post/edit", {data: data});
    });
});


router.delete("/post/delete", function(req, res){
    var params = req.body;
    var _id = params._id.trim();

    var data = posts_model.deleleById(_id);

    data.then(function(result){
        res.json({status_code: 200});
    }).catch(function(err){
        var data = {
            error: "Could not delete Post"
        };

        res.render("admin/home", {data: data});
    })
});


router.get("/user", function(req, res){
    var user = session.get("user");
    user.then(function(result){
        if(result){
            var data = users_model.getAllUsers();

            data.then(function(users){
                var result = {
                    users: users,
                    error: false
                };

                res.render("admin/user", {data: result});
            }).catch(function(err){
                var result = {
                    error: "Could not get User information"
                };

                res.render("admin/user", {data: result});
            });
        }else{
            res.redirect("/signin");
        }
    }).catch(function(err){
        res.redirect("/signin");
    });
})

module.exports = router;














