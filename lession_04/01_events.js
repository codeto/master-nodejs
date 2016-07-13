var events = require('events');


var emitter = new events.EventEmitter();

//received request from client

emitter.on('connection',function(query){
	console.log('Have a new connection');
	//create new event, request data from db
	//ko dong dau color thi la object
	emitter.emit('get_data_from_db',query);
});


emitter.on('get_data_from_db',function(data){
	console.log('-----------------');
	console.log('Data received: ');
	console.log(data);
	result = {
		'Id':1,
		'Type':'Bus',
		'Color':'Red'
	};
	emitter.emit('send_to_client',result);
});

emitter.on('send_to_client',function(result){
	console.log('Your data had been send: ');
	console.log(result);
})


//run program
emitter.emit('connection',{'color':'red'});

