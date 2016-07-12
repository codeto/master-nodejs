var buf = new Buffer("Hello, this is a buffer");

console.log(buf.toString());

var my_name = new Buffer(' Toi la Ha Anh Son');

console.log(my_name);
console.log(my_name.toString());
var json_name = JSON.stringify(my_name);

console.log(json_name);
console.log(json_name.toString());

var buffer3 = Buffer.concat([buf, my_name]);
console.log(buffer3.toString());