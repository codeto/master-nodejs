// function objectA {
// 	this.name = 'Son';
// 	this.age = 27;

// 	this.show = function show() {
// 		return console.log(this.name + ' is ' + this.age + ' year old');
// 	}
// }

// var a = new objectA();;
// // console.log(a.name);
// console.log(a.show()0;
//Prototype ra dio de ho tro huong doi tuong cho javascript
function Shape() {
	
}


Shape.prototype.x = 0;
Shape.prototype.y = 0;
Shape.prototype.show = function(){
	return 'Hello';
}

function Square() {

}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;

var s1 = new Square();
console.log(s1.show());

console.log(__filename);