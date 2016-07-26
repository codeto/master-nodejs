var express = require('express');

var router = express.Router();



var users_model = require("../models/user.js");

//connection.connect();
// localhost:3000/admin/
router.get('/',function(req,res){
	//res.json({'message':'This is Admin page'});
	res.render("pages/admin",{"name":"Duc Linh"});
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

router.get('/user',function(req,res){
	var users = users_model.GetAllUsers();

	users.then(function(data){
		//console.log(data);
		//res.json(data);
		// console.log(data);
		res.render("pages/user",{data:data});
	}).catch(function(err){
		console.log(err);
	});
});


router.get('/dashboard',function(req,res){
	res.json({'message':'This is Admin page'});
});

module.exports = router;