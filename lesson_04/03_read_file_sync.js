
// Vi du : Lap trinh dong bo, giong PHP 
var fs = require("fs");// fs mac dinh co san, khong phai cai

console.log('Start read a file');

var content = fs.readFileSync("data.txt");// o day khong truyen vao callback function
console.log("Noi dung file la ", content);
console.log("Noi dung file la ", content.toString());
console.log("Chuong trinh da ket thuc");


var sonha = require("fs");
var noidung = fs.readFileSync("sonha.txt");
console.log("noi dung la ", noidung.toString());