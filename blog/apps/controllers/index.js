var express = require('express');
var mongodb = require("mongodb");

var router = express.Router();

var session = require("../common/session");

var users_model = require('../models/user');
var posts_model = require('../models/post');


//authentical
// app.use(function(req,res,next){
// 	if(req.session.user){
// 		next();
// 	}else{
// 		res.redirect('/login');
// 	}
// });

var md5 = require('md5');

router.use('/admin',require(__dirname + "/admin.js"));


router.use('/blog',require(__dirname + "/blog.js"));

router.get('/signup',function(req,res){
	res.render("frontend/pages/signup",{data:{error:false}});
})
router.get('/login',function(req,res){
	res.render("backend/pages/login",{data:{error:false}});
})

router.post('/login',function(req,res){

	var params = req.body;

	var result = users_model.GetUserByEmail(params.txtusername);

	result.then(function(users){

		if (!users || users.length == 0){
			var data = {
				error:"User is not exits"
			}
			res.render("backend/pages/login",{data:data});
		} else {
			var user = users[0];
			if (user.password != md5(params.txtpassword)){
				var data = {
					error:"Your password is wrong!"
				}
				res.render("backend/pages/login",{data:data});
			}else {
				//req.session.user = user;
				session.set("user",'1',1800);

				res.redirect('/admin/');
			}

		}
	});
});


//var mongodb = require('mongodb');

router.post('/signup',function(req,res){

	var params = req.body;

	if (params.email.trim().length < 10){
		var data = {
			error:"Please enter correct the email"
		};
		res.render("frontend/pages/signup",{data:data});
	}

	if (params.password.trim().length != 0 && params.password != params.repassword){

		var data = {
			error:"Password is not match"
		}
		res.render("frontend/pages/signup",{data:data});
	}

	var check_email = users_model.GetUserByEmail(params.email);
	check_email.then(function(email){
		if (email.length > 0){
			var data = {
			error:"The email is exits."
			};
			res.render("frontend/pages/signup",{data:data});
		}else{

			//write data

			var hash_pass = md5(params.password);

			var update_time = new Date();
			var user = {
				email:params.email,
				firstname:params.firstname,
				lastname:params.lastname,
				sex:params.sex,
				password:hash_pass,
				update_at:update_time
			};
			//console.log(user);

			var result = users_model.addUser(user);
			result.then(function(data){
				//res.render("backend/pages/admin",{data:{error:false}});
				res.redirect('/login');
			}).catch(function(err){
				res.render("frontend/pages/signup",{data:{error:err}});
			});
			//end write data

		}
	}).catch(function(err){
		res.render("frontend/pages/signup",{data:{error:err}});
	});

});
router.post('/act-api',function(req,res){
	var params = req.body;

	var act = params.act;

	var id = params.id;

	if (act == 'Remove'){
		var user = {
			"_id":mongodb.ObjectId(id)
		}
		//console.log(user);

		stt = users_model.deleteUser(user);
		res.json({'kq':1});
		// console.log(stt);
	} else if (act == 'Add'){
		var user = {
			email:params.txtemail,
			firstname:params.txtfname,
			lastname:params.txtlname,
			sex:params.txtgender,
			password:params.pass
		}
		users_model.addUser(user);
		res.json({'kq':1});
	}
});
router.delete('/act-api',function(req,res){
	var params = req.body;


	var post = {
		_id:mongodb.ObjectId(params.id)
	};

	//console.log(post);

	posts_model.deletePost(post);
	res.json({'kq':1});

});
router.get('/delete',function(req,res){

	var user = {
		"_id":mongodb.ObjectId("579720fc3b95372f405a6756")
	};
	//console.log(user);

	users_model.deleteUser(user);
	res.send('Xoa Thanh Cong!');
});

router.get('/',function(req,res){
	res.render("frontend/pages/index");
});
router.post('/post',function(req,res){
	var post = users_model.GetAllPost();
	post.then(function(data){
		res.json(data);
	}).catch(function(err){
		res.json({err:err});
	});
});

router.get("/post/:id",function(req,res){

	var id = params.id;

	var data = users_model.GetPostById(id);
	
	data.then(function(posts){
		var post = posts[0];

		var data = {
			error:false,
			post:post,
			title:"Edit post"
		};
		res.render("frontend/pages/edit",{data:data});
	}).catch(function(err){
		var data = {
			error:err
		};
		res.render("backend/pages/edit",{data:data});
	});

});

router.get("/chat",function(req,res){
		res.render("frontend/pages/chat");
});
module.exports = router;