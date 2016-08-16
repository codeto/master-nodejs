module.exports = function(io){
	var usernames = [];
	io.sockets.on("connection",function(socket){
		console.log("have a new user connected");

		//listen new user connect
		socket.on("add_user",function(username){
			socket.username = username;
			usernames.push(username);

			//notify to myselt
			var data = {
				sender:"SERVER",
				message:"You have to join chat room"
			};

			socket.emit("update_message",data);

			//notify to other users
			var data = {
				sender:"SERVER",
				message:username + "have to join chat room"
			};
			socket.broadcast.emit("update_message",data);
		});	
		//listen event
		socket.on("message_send",function(message){

			//notify to myselt
			var data = {
				sender:"You",
				message:message
			};

			socket.emit("update_message",data);

			//notify to other users
			var data = {
				sender:socket.username,
				message:message
			};
			socket.broadcast.emit("update_message",data);
		});
		//listen disconect event
		socket.on("disconnect",function(){
			var data = {
				sender:"SERVER",
				message:socket.username + " left chat room"
			};
			socket.broadcast.emit("update_message",data);

		});
	});
}