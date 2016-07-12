var fs = require("fs");

//Ghi file 

fs.writeFile("data_2.txt", 'Toi la Son dep trai', function(err, data) {
	if(err) {
		console.log(err);
	} else {
		var content = fs.readFileSync('data_2.txt');
		console.log(content.toString());
	}
});

// show thong tin cua file 

// dung fs.stat

fs.stat('data_2.txt', function(err, start) {
	if(err) {
		console.log(err);
	} else {
		console.log(start);
	}
});

// Tao thu muc o ben ngoai

fs.mkdir("../sonha", function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
//tao thu muc o ben trong
fs.mkdir("sonha1", function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
});