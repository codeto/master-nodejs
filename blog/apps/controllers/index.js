var express = require('express');

var router = express.Router();

var users_model = require('../models/user');

router.use('/admin',require(__dirname + "/admin.js"));


router.use('/blog',require(__dirname + "/blog.js"));

router.get('/signup',function(req,res){
	res.render("pages/signup");
})

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
	res.send('Ghi du lieu thanh cong');
});
module.exports = router;