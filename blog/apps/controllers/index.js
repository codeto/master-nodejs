var express = require('express');

var router = express.Router();

var users_model = require('../models/user');

router.use('/admin',require(__dirname + "/admin.js"));


router.use('/blog',require(__dirname + "/blog.js"));

router.get('/signup',function(req,res){
	res.render("frontend/pages/signup");
})

var ObjectId = require('mongodb').ObjectID;

router.post('/signup',function(req,res){
	var params = req.body;

	var user = {
		email:params.email,
		firstname:params.firstname,
		lastname:params.lastname,
		sex:params.sex,
		password:params.password
	};
	//console.log(user);

	users_model.addUser(user);
	res.send({'act':1});
});


router.get('/delete',function(req,res){

	var user = {
		"_id":ObjectId("579720fc3b95372f405a6756")
	};
	//console.log(user);

	users_model.deleteUser(user);
	res.send('Xoa Thanh Cong!');
});

router.get('/',function(req,res){
	res.send('This is homepage');
})
module.exports = router;