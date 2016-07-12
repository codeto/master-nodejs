// @Simon
// Demo Here : https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/
function setLocation(city) {
	var country = 'Viet nam';

	function printLocation() {
		console.log("You are in " + city + ", " + country);
	}

	printLocation();
}

setLocation("Ha Noi");


// Example 2 
function CityLocation() {
	var city = "Paris";

	return {
		get : function() {
			console.log(city);
		}, 
		set : function(newCity) {
			city = newCity;
		}
	}
}

var myLocation = CityLocation();

myLocation.get();
myLocation.set("Ha Noi City");
myLocation.get();

//Ezample 3
function fullName(firstName, lastName, callback) {
	console.log("My name is " + firstName + " " + lastName);

	callback(lastName);
}

var greeting = function(ln) {
	console.log("Welcome Mr " + ln);
}


fullName("Son", "Ha Anh" , greeting);

//Example 4 
function publish(item, author, callback) {
	console.log(item);

	var date = new Date();

	callback(author, date);
}

function messages(author, time) {
	var sendTime = time.toLocaleTimeString();
	console.log("Send from " + author + " at " + sendTime);
}

function articles(author, date) {
	var pubDate = date.toDateString();
	console.log("Written by" + author);
	console.log("Published " + pubDate);
}

publish("How are you", "Simon", messages);
publish("Make Money Online Guide", "Simon Ha", articles);

// Example 5
function printFruits(fruits){
  for (var i = 0; i < fruits.length; i++) {
    setTimeout( function(){
      console.log( fruits[i] );
    }, i * 1000 );
  }
}

printFruits(["Lemon", "Orange", "Mango", "Banana"]);

// Example 6

function printFruits(fruits){
  for (var i = 0; i < fruits.length; i++) {
    (function(current){
      setTimeout( function(){
        console.log( fruits[current] );
      }, current * 1000 );
    })(i);
  }
}

function sonha(param) {
	for (var i = 0; i <param.length; i++) {
		
	}
}

printFruits(["Lemon", "Orange", "Mango", "Banana"]);