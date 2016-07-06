function Shape(){

}

Shape.prototype.x = 0;
Shape.prototype.y = 0;
Shape.prototype.show = function(){
    return "Hello";
}

function Square(){

}

Square.prototype = new Shape();
// Extend all from Shape
Square.prototype.__proto__ = Shape.prototype;

var s1 = new Square();
console.log(s1.show());

console.log(__filename);
