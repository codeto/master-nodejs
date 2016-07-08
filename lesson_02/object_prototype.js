function Person() {
	this.name = '';
	this.age = '';
	this.address = '';

	// this.showInfo = function() {
	// 	console.log('ten ban la ' + this.name);
	// 	console.log('tuoi ban la ' + this.age);
	// 	console.log('dia chia ban la ' + this.address);
	// }
}


Person.prototype.birthday = '6/1/1989';
// console.log(Person.birthday);

var sonha = new Person();

sonha.name = 'Ha Anh Son';
sonha.age = 27;
sonha.address = 'Ha Noi';
sonha.birthday = '6/11/1989';
console.log(sonha.birthday);
// sonha.showInfo();