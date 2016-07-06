var a = ["a", "b", "c"];


console.log(typeof a);
console.log(Array.isArray(a));

for(var i = 0; i< a.length; i++) {
	console.log(a[i]);
}

function myfunction() {

}

a.forEach(myfunction);

a.forEach(function(ele, index, array){
console.log('Phan tu thu' + index + " la " + ele);
});

//Stack 

a.push("d");
console.log(a);
value = a.pop();
// a.pop("d");
console.log(value);
console.log(a);

//	Queue

a.unshift('d');//d,a,b,c
a.shift();//a,b,c

delete(a[1]);
console.log(a);
a.splice(2,1);
console.log(a);