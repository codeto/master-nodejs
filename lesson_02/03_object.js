var obj = {
	name : 'Son Ha Anh'
};

var obj_type_2 = new Object();

obj_type_2.name = 'Toi la son';
console.log(obj);
console.log(obj_type_2);
console.log(typeof obj);

obj_type_2.age = 27;
console.log(obj_type_2);

delete obj_type_2.age;
console.log(obj_type_2);

var obj_json = {
	"name" : 'Linh'
}

var json = JSON.stringify(obj_json);

console.log(json);

var json_par = JSON.parse();