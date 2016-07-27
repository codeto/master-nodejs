// Giam su phuc tap khi dung callback function

// Chua co promise

// setTimeout(function() {
// 	console.log('Data 1');

// 	setTimeout(function() {
// 		console.log("data 2");
// 	}, 2000)
// }, 2000);

// // Cach 2


// function show1() {
// 	console.log('Data 1');

// 	setTimeout(function() {
// 		console.log("data 2");
// 	}, 2000);
// }

// setTimeout(show1);

// Co promise 

q = require("q");

function show_new(err, data) {
	return q.Promise(function(resolve, reject, notify) {
		if(err) {
			reject(err);
		} else {
			resolve(data);
		}
	});
}


// function simon(err, data) {
// 	var defer = q.defer();
// 	if(err) {
// 		reject(err);
// 	} else {
// 		resolve(data);
// 	}
// 	return defer.promise;
// }
// function show(err, data) {
// 	var defer = q.defer();
// 	if(err) {
// 		//Khong dung console log de tra loi nua
// 		console.log(err);

// 		defer.reject(err);
// 	} else {
// 		defer.resolve(data);
// 	}

// 	return defer.promise;
// }

console.log('aaa');

//. then : cach de lay data
simon(false, "Toi la son")
.then(function(data) {
	console.log(data);
	return 'Day la data data';
})
.then(function(data2) {
	console.log(data2);
	return 'Day la data 2';
})
.then(function(data3) {
	console.log(data3);
	return 'Day la data from DB';
}).then(function(data4){
	console.log(data4);
})
.catch(function(err) {
	console.log(err);
});