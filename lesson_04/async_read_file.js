
// Vi du : Lap trinh bat dong bo
var fs = require("fs");// fs mac dinh co san, khong phai cai

console.log('Start read a file');

var content = fs.readFile("data.txt", function(err, content) {

	if(err) {
		console.log(err);
		console.log('Xu ly loi o day');
	} else {
		console.log("Noi dung file dang Buffer ", content);
		console.log("Noi dung file la ", content.toString());
	}
});

console.log("Chuong trinh da ket thuc");

