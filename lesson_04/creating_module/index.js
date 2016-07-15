var number, origin, destination;
exports.setNumber = function(num) {
	number = num;
}
exports.setOrigin = function(or) {
	origin = or;
}
exports.setDestination = function(des) {
	destination = des;
}

exports.getInfo = function(){
	return {
		number      : number,
		origin      : origin,
		destination : destination
	};
}