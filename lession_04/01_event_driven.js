var events = require("events");


var emmitter = new events.EventEmitter();

// receice request from client
emmitter.on("connection", function(query){
    console.log("Have new a connection");
    // create new event to request data from DB
    emmitter.emit("get_data_from_db", query);
});


emmitter.on("get_data_from_db", function(data){
    console.log("===============");
    // SQL: select * from cars where color = 'red'
    console.log("Data received is: ");
    console.log(data);
    var result = {
        "id": 1,
        "type": "bus",
        "color": "red"
    };

    // Create a new event to send data to client
    emmitter.emit("send_to_client", result);
});

emmitter.on("send_to_client", function(result){
    console.log("===============");
    console.log("da gui thanh cong data den client");
    console.log(result);
});


// Run program, This is client
emmitter.emit("connection", {"color": "red"});


