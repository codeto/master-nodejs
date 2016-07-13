//chua co promise
// function show2(){
// 	console.log('2');
// }



// function show1(){
// 	console.log('data 1');

// 	setTimeout(show2);
// }

// setTimeout(show1)

//co promise

var q = require('q');

// function show(err,data){
// 	var defer = q.defer();

// 	if (err){
// 		defer.reject(err);
// 	} else {
// 		defer.resolve(data);
// 	}
// 	return defer.promise;
// }

function show(err,data){
	return q.Promise(function(resolve,reject,notify){
		if(err){
			reject(err);
		}else{
			resolve(data);
		}
	})
}

show(false,'hello 1').then(function(data){
	console.log(data);
	return "this is data 2"
}).then(function(data2){ console.log(data2)}).catch(function(err){
	console.log(err);
});