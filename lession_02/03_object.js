// contructor
var obj = {
    name: "Linh"
};

var obj1 = new Object();
obj1.name = "Linh";

console.log(typeof obj1);

obj1.age = 27;
delete obj1.age;
console.log(obj1);

var obj_json = {
    "name": "Linh",
    "age": 27
};

var json_str = JSON.stringify(obj_json);

var json_obj = JSON.parse(json_str);