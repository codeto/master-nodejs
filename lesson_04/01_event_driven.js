 var events = require("events");

 var emiter = new events.EventEmitter();

 //receive request from client

//dang ki mot su kien va lang nghe
 emiter.on("connection", function(query){
 	console.log('Tao ket noi moi tu client');

// day data dang json vao 
 	emiter.emit("get_data_from_db", query);
 });

 emiter.on('get_data_from_db', function(data) {
 	console.log("======================");
 	console.log("Data returned is :");
 	console.log(data);

 	var result = {
 		"id" : 1,
 		"type" : "bus",
 		"color" : "red"
 	}
//Creata a new event to send data to client
 	emiter.emit("send_to_client", result);
 });

 emiter.on('send_to_client', function(result) {
 	console.log("======================");
 	console.log('Da gui thanh cong data den client');
 	console.log(result);
 });

 emiter.emit('connection', {"color" : "red"});