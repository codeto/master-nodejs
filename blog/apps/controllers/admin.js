var express = require('express');

var router = express.Router();

//var session = require("../common/session");
var session = require('express-session');

var users_model = require("../models/user.js");

var post_model = require('../models/post.js');
//connection.connect();
// localhost:3000/admin/
router.get('/',function(req,res){

	if(req.session.user){
		res.render("backend/pages/admin");
	}else{
		res.redirect('/login');
	}

	
});
router.get('/home',function(req,res){
	res.json({'message':'This is Admin page'});
	//res.render("backend/pages/admin",{data:{error:false}});
});

router.get('/users',function(req,res){
	if(req.session.user){
			// this owner
				var users = users_model.GetAllUsers();
				users.then(function(data){
					//console.log(data);
					res.json(data);
				}).catch(function(err){
					console.log(err);
				});

			//end this is owner
		}else{
			res.redirect('/login');
		}
	
});
router.get('/post',function(req,res){
if(req.session.user){
			// this owner
				var users = users_model.GetAllPost();

				users.then(function(data){
					//console.log(data);
					res.render("backend/pages/post",{data:data});
				}).catch(function(err){
					console.log(err);
				});

			//end this is owner
		}else{
			res.redirect('/login');
		}

});

router.get('/user',function(req,res){
	if(req.session.user){
			// this owner
				var users = users_model.GetAllUsers();

				users.then(function(data){
					//console.log(data);
					//res.json(data);
					// console.log(data);
					res.render("backend/pages/user",{data:data});
				}).catch(function(err){
					console.log(err);
				});

			//end this is owner
		}else{
			res.redirect('/login');
		}
});


router.get('/dashboard',function(req,res){
	res.json({'message':'This is Admin page'});
});

router.get("/edit-post/:id",function(req,res){
	if(req.session.user){
		// this owner
			var params = req.params;
			var id = params.id;

			var data = users_model.GetPostById(id);
			
			data.then(function(posts){
				var post = posts[0];

				var data = {
					error:false,
					post:post,
					title:"Edit post"
				};
				res.render("backend/pages/edit",{data:data});
			}).catch(function(err){
				var data = {
					error:err
				};
				res.render("backend/pages/edit",{data:data});
			});

		//end this is owner
	}else{
		res.redirect('/login');
	}

	
});

router.get('/post/new',function(req,res){
	if(req.session.user){
			// this owner
					
				var data = {
					error:false,
					title:"Add new post"
				};

				res.render("backend/pages/edit",{data:data});

			//end this is owner
		}else{
			res.redirect('/login');
		}

});
router.post('/post/new',function(req,res){
	
	var params = req.body;

	var now = new Date();

	var count_post = post_model.CountElement();

	// count_post.then(function(table_count){

	// 	var id = table_count.length + 1;

		var post = {
			title:params.txtTitle,
			author:params.txtAuthor,
			Content:params.txtContent,
			category:params.txtCategories,
			Update:now
		};

		var data = post_model.AddOnePost(post);

		data.then(function(return_data){

			var template_data = {
				error:false,
				post:post,
				title:'Update success.'
			};
			res.render("backend/pages/edit",{data:template_data});
		}).catch(function(err){
			var template_data = {
				error:false,
				post:post,
				title:'Update Fail trong check element.'
			};
			res.render("backend/pages/edit",{data:template_data});
		});

});
router.put('/post/edit',function(req,res){

	var params = req.body;

	var now = new Date();

	var posts = {
		"id": params.txtId.trim(),
		"title":params.txtTitle,
		"author":params.txtAuthor,
		"Content":params.txtContent,
		"category":params.txtCategories,
		"Update":now
	};

	console.log(posts);

	var data = post_model.UpdatePost(posts);
	data.then(function(data){
		res.json({'kq':1});
	}).catch(function(err){
		res.json({'kq':false,'Err':err});
	});

});

module.exports = router;