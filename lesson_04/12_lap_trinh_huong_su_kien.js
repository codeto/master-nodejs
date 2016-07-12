// Import module su kien
var info = {
	"username" : "sonha",
	"password" : '123456',
	"age" : 27
}
var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection", function(err, data){
	console.log('=== START');
	console.log("Xin chao " + data.username);
	console.log(this);
	eventEmitter.emit('checkInfo', data);
});

eventEmitter.on("checkInfo", function(data){
	console.log('=== START CHECK INFO');
	if(data.username == 'sonha') {
		console.log("Thong tin da chinh xac");
		eventEmitter.emit("serve", data);
	}
});

eventEmitter.on("serve", function(data) {
	console.log("=== THONG TIN CA NHAN");
	console.log("Name : " + data.username);
	console.log("Age : " + data.age);
	console.log("=== END");
})

eventEmitter.emit("connection", true, info);