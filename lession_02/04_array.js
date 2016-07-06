var a = ["a", "b", "c"];

// Check
console.log(typeof a); //=> object
console.log(Array.isArray(a)); //=> array

// For
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}
function b(){

}
a.forEach(b){
    //typeof b is function
}

a.forEach(function(ele, index, array){
    console.log(" Phan tu thu " + index " la : " + ele);
});

// Stack
a.push("d");
console.log(a); // => a,b,c,d
var value = a.pop(); // => d
console.log(value);
console.log(a); // => a,b,c

// Queue
a.unshift("d"); // d,a,b,c
a.shift(); // => a,b,c

// Delete
delete a[1];
console.log(a); // => a, "", c

a.splice(2, 1);