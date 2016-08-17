module.exports = function(io){
	var usernames = [];
	var users = {};
	var abc = {};
	var socketOfUsers = {};
	io.sockets.on("connection",function(socket){
		console.log("have a new user connected");
		//listen new user connect
		socket.on("add_user",function(username){
			socket.username = username;
			usernames.push(username);
			socketOfUsers[username] = socket.id;
		 // 	users[username] = socket.id;    // Store a reference to your socket ID
			// abc[socket.id] = { username : username, socket : socket }; 


			//notify to myselt
			var data = {
				sender:"SERVER",
				message:"You have to join chat room",
				username:usernames
			};

			socket.emit("update_message",data);

			//notify to other users
			// var data = {
			// 	sender:"SERVER",
			// 	message:username + " have to join chat room",
			// 	id:socket.id,
			// 	username:username
			// };
			// socket.broadcast.emit("update_chat",data);
			var data = {
				sender:"SERVER",
				message:username + " have to join chat room",
				username:usernames
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

			socket.emit("update_chat",data);

			//notify to other users
			var data = {
				sender:socket.username,
				message:message
			};
			if(socket.friend){
				socket.friend.emit("update_chat",data);
			}else{
				socket.broadcast.emit("update_chat",data);
			}
			// socket.broadcast.emit("update_chat",data);
			
		});
		//listen private id
		socket.on('join', function(data) {
			socket.join(data.email); // We are using room of socket io
	        // Lookup the socket of the user you want to private message, and send them your message
	        var data =
	            { 
	                message : 'Connect to '+data.email, 
	                //sender : abc[socket.id].username 
	                sender : "SERVER"
	            };
	        socket.emit("join",data);

	    });

	    socket.on('private_message',function(data){
	    	console.log(data);
	    	  var sen_data = { 
	                message : 'test private message', 
	                sender : socket.username
	            };
	        socket.in(data.email).emit('new_msg', sen_data);
	    });
	    //private message send
	    socket.on("choose_user",function(username){
	    	//get friend socket
	    	var id_socket_friend = socketOfUsers[username];

	    	var socket_friend = io.sockets.connected[id_socket_friend];
	    	
	    	//set minh de chat lai voi thang ban
	    	socket_friend.friend = socket;
	    	//set id cho thang ban cua minh
	    	socket.friend = socket_friend;
	    });
		//listen disconect event
		socket.on("disconnect",function(){
			var data = {
				sender:"SERVER",
				username:usernames,
				message:socket.username + " left chat room"
			};

			// delete socket.friend.friend;
			// delete socket.friend;

			var index = usernames.indexOf(socket.username);
			if (index > -1) {
			    usernames.splice(index, 1);
			}
			socket.broadcast.emit("update_message",data);

		});

	});
}