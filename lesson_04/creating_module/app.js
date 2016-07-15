var flight = require('./index');

flight.setOrigin('Kensington');
flight.setDestination('London');
flight.setNumber(356);

console.log(flight.getInfo());

var anotherFlight = require('./index');

console.log(anotherFlight.getInfo());