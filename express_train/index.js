var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));// Muon lay anh o thu muc nao thi khai bao o day
// app.use(express.static('public/images')); Neu doi thanh nhu nay thi url se la : http://localhost:3000/01.jpg 
// Neu dat

// Basic routing
app.get('/', function(req, res){
	res.send("This is first application");
});

app.get('/demo', function(req, res) {
	res.send("This is demo page");
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

app.get('/formGet.html', function (req, res) {
   res.sendFile( __dirname + "/" + "formGet.html" );
})

app.get('/formPost.html', function (req, res) {
   res.sendFile( __dirname + "/" + "formPost.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
       name:req.query.name,
       age:req.query.age,
       address:req.query.address
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
    response = {
       name:req.query.name,
       age:req.query.age,
       address:req.query.address
   };
   console.log(response);
   res.end(JSON.stringify(response));
})



app.listen(3000, function() {
	var host = this.address().address;
	var port = this.address().port;
	console.log("Server is running ", host,"at", port);
});