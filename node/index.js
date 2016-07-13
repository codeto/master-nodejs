var express = require('express');

var app = express();

app.disable('x-powerd-by');

app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({	extended:true}));
app.use(bodyParser.json());

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
 

app.engine('handlebars',handlebars.engine);
app.set('view engine',handlebars);


var mongodb = require('mongodb');

app.get('/',function(req,res){
	//res.render('index',{title: 'Homepage'});
	res.sendFile(__dirname + '/public/html/index.html');
})


app.get('/about',function(req,res){
	res.sendFile(__dirname + '/public/html/about.html');
})


app.get('/admin',function(req,res){
	res.sendFile(__dirname + '/public/html/login.html');
})
app.post('/admin',function(req,res){

	// var MongoClient = mongodb.MongoClient;

	// var url = 'mongodb://localhost:27017/sampsite';

	// MongoClient.connect(url, function(err,db){
	// 	if (err){

	// 		console.log('Unable connect to server');
	// 	} else {
	// 		console ("connect");

	// 		var collection = db.collection('students');

	// 		collection.find({}).toArray(function(err,result){
	// 			if (err){
	// 				res.send(err);
	// 			} else if (result.length){
	// 				res.render('studentlist',{"studentlist":result});
	// 			} else {
	// 				res.send('no documents found');
	// 			}

	// 			db.close();
	// 		});
	// 	}

	// })

	account = {
		user:'haanhduclinh',
		pass:'123'
	};
	var username = req.body.txtUserName;
	var password = req.body.txtPassword;
	if (account.user === username && account.pass === password){
		res.send('succes login');
	} else {
		res.send('Something error');
	} 
})

app.listen(3000);
