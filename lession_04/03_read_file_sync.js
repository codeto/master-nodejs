var fs = require("fs");

console.log("Start read file");
var content = fs.readFileSync("data.txt");
console.log("Buffer: ", content);
console.log("Noi dung file la: ", content.toString());

console.log("Chuong trinh da ket thuc");