//Imperative  Type 
var numbers = [1,2,3,4,5];

var doubled = [];
var nhanba = [];

for(var i = 0; i < numbers.length; i++) {
	var new_number = numbers[i]* 2;
	doubled.push(new_number);
}

for(var i = 0; i < numbers.length; i++) {
	var sonha = numbers[i] * 3; 
	nhanba.push(sonha);
}

console.log(doubled);
console.log(nhanba);

//Decralative Type
//Type 1 
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(n) {
	return n *2;
});

console.log(doubled);

//Type 2
function MyDoudled(item) {
	console.log(item);
	return item * 2;
}

var new_doubled = numbers.map(MyDoudled);
console.log(new_doubled);

var name = 'sonha';