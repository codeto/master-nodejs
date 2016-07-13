var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydatabase';
MongoClient.connect(url,function(err,db){
	if (err) return console.log('err');
	var collection = db.collection('students');
	collection.insert({name:'duclinh',email:'haanhduclinh@yahoo.com',birthday:'17-08-1989'},function(err,result){
		collection.find({name:'duclinh'}).toArray(function(err,docs){
			console.log(docs[0]);
			db.close();
		});
	});
});