function Person(name, password) {
	this.name = name;
	this.password = password;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.getPassword = function() {
	return this.password;
}

Person.prototype.getLevel = function() {
	return this.level;
}
Person.prototype.level = 'Admin';


function User(name) {
	this.name = name;
}

User.prototype = new Person();

var person = new Person('Son', '12345');
var user = new User('Son Ha Anh', '9999');

console.log(user.getName());
console.log(user.getLevel());
console.log(user.getPassword());
console.log(person.getName());