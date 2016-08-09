var express = require('express');

var router = express.Router();



var users_model = require("../models/user.js");
var post_model = require('../models/post.js');
//connection.connect();
// localhost:3000/admin/
router.get('/',function(req,res){
	//res.json({'message':'This is Admin page'});
	res.render("backend/pages/admin");
});
router.get('/home',function(req,res){
	res.json({'message':'This is Admin page'});
	//res.render("backend/pages/admin",{data:{error:false}});
});

router.get('/users',function(req,res){
	var users = users_model.GetAllUsers();

	users.then(function(data){
		//console.log(data);
		res.json(data);
	}).catch(function(err){
		console.log(err);
	});
});
router.get('/post',function(req,res){
	var users = users_model.GetAllPost();

	users.then(function(data){
		//console.log(data);
		res.render("backend/pages/post",{data:data});
	}).catch(function(err){
		console.log(err);
	});
});

router.get('/user',function(req,res){
	var users = users_model.GetAllUsers();

	users.then(function(data){
		//console.log(data);
		//res.json(data);
		// console.log(data);
		res.render("backend/pages/user",{data:data});
	}).catch(function(err){
		console.log(err);
	});
});


router.get('/dashboard',function(req,res){
	res.json({'message':'This is Admin page'});
});

router.get("/edit-post/:id",function(req,res){
	var params = req.params;
	var id = params.id;

	var data = users_model.GetPostById(id);
	
	data.then(function(posts){
		var post = posts[0];

		var data = {
			error:false,
			post:post
		};
		res.render("backend/pages/edit",{data:data});
	}).catch(function(err){
		var data = {
			error:err
		};
		res.render("backend/pages/edit",{data:data});
	});
});

router.put('/post/edit',function(req,res){

	var params = req.body;

	var now = Date.now();

	var posts = {
		id:params.txtId,
		title:params.txtTitle,
		author:params.txtAuthor,
		Content:params.txtContent,
		category:params.txtCategories,
		Update:now
	};

	var data = post_model.UpdatePost(posts);
	data.then(function(data){
		res.json({'kq':1});
	}).catch(function(err){
		res.json({'kq':false,'Err':err});
	});

});

module.exports = router;