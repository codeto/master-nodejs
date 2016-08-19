module.exports = function(io){
	var usernames = [];
	var users = {};
	var abc = {};
	var socketOfUsers = {};

	var room_arr_1 = [];
	var room_arr_2 = [];
	var room_arr_3 = [];
	var room_arr_4 = [];

function check_element(arr,element){
	var index = arr.indexOf(element);
	if (index > -1) return true;
	else return false;
}
	io.sockets.on("connection",function(socket){
		console.log("have a new user connected");
		//listen new user connect
		socket.on("add_user",function(username){
			socket.username = username;

			var check = check_element(usernames,username);
			if (!check){
				usernames.push(username);
			}
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

			//notify other people
			var data = {
				sender:"SERVER",
				message:username + " have to join chat room",
				username:usernames
			};
			socket.broadcast.emit("update_message",data);
		});	
		//listen event
		socket.on("message_send",function(message){

			//notify to other users
			var data = {
				sender:socket.username,
				message:message
			};
			if(socket.friend){

				//notify to myselt
				var m = {
					sender:"You",
					message:message
				};

				socket.emit("update_chat",m);
				//notify friend
				socket.friend.emit("update_chat",data);

			}else if(socket.room){
				console.log('this is socket rom');
				//notify to myselt
				var m = {
					sender:"You",
					message:message
				};

				socket.emit("update_chat",m);

				socket.broadcast.to(socket.room).emit("update_chat",data);

			} else {
				//notify to myselt
				console.log('this is send to all people');
				var m = {
					sender:"You",
					message:message
				};

				socket.emit("update_chat",m);
				//notify all
				socket.broadcast.emit("update_chat",data);
			}
			// socket.broadcast.emit("update_chat",data);
			
		});

		//listen private id
		socket.on('join', function(room) {
			//remove username in hall begin

			var index = usernames.indexOf(socket.username);
			if (index > -1 ) {
			    usernames.splice(index,1);
			}
			//remove username in hall end
			//notice all friend in hall

			socket.broadcast.emit("room_user",usernames);

			if (socket.room){
				if (socket.room != room){
					//console.log('we leave old room is '+socket.currently_room);
					socket.leave(socket.room);
					//leave room event begin
					switch (socket.room){
						case 'Chat room 1':
						
							var index = room_arr_1.indexOf(socket.username);
							if (index > -1) {
							    room_arr_1.splice(index, 1);
							}
							var re_data = room_arr_1;
							break;
						case 'Chat room 2':
						
							var index = room_arr_2.indexOf(socket.username);
							if (index > -1) {
							    room_arr_2.splice(index, 1);
							}
							var re_data = room_arr_2;
							break;
						case 'Chat room 3':
						
							var index = room_arr_3.indexOf(socket.username);
							if (index > -1) {
							    room_arr_3.splice(index, 1);
							}
							var re_data = room_arr_3;
							break;
						case 'Chat room 4':
						
							var index = room_arr_4.indexOf(socket.username);
							if (index > -1) {
							    room_arr_4.splice(index, 1);
							}
							var re_data = room_arr_4;
							break;
						default:
							var index = usernames.indexOf(socket.username);
							if (index > -1) {
							    usernames.splice(index, 1);
							}
							var re_data = usernames;
							break;
					}
					 //notify to all people in new room
	        		socket.broadcast.to(socket.room).emit("room_user",re_data);

	        		var m = {
						sender:"SERVER",
						message:socket.username + " has left this room"
					};
	        		socket.broadcast.to(socket.room).emit("update_chat",m);
					//leave chat room event end
				}
			}
			//socket.join(room); // We are using room of socket io

			socket.room = room;

	        // Lookup the socket of the user you want to private message, and send them your message
	        if (room == 'Chat room 1'){
	        	var index = room_arr_1.indexOf(socket.username);
				if (index < 0) {
				    room_arr_1.push(socket.username);
				}
	        	var re_data = room_arr_1;
	        }else if (room == 'Chat room 2'){
	        	var index = room_arr_2.indexOf(socket.username);
				if (index < 0) {
				    room_arr_2.push(socket.username);
				}
	        	var re_data = room_arr_2;
	        }else if (room == 'Chat room 3'){
	        	var index = room_arr_3.indexOf(socket.username);
				if (index < 0) {
				    room_arr_3.push(socket.username);
				}
	        	var re_data = room_arr_3;
	        }else if (room == 'Chat room 4'){
	        	var index = room_arr_4.indexOf(socket.username);
				if (index < 0) {
				    room_arr_4.push(socket.username);
				}
	        	var re_data = room_arr_4;
	        }

	        var data_1 =
	            { 
	                message : 'Connect to '+room, 
	                //sender : abc[socket.id].username 
	                sender : "SERVER"
	            };
	            //console.log(data_1);

	        socket.emit("join",data_1);
	        //notify my self
	        socket.emit("room_user",re_data);
	        //notify to all people in new room
	        socket.broadcast.to(socket.room).emit("room_user",re_data);
	        //console.log(socket.room);
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
		socket.on("disconnect",function(){
			var data = {
				sender:"SERVER",
				username:usernames,
				message:socket.username + " left chat room"
			};
			var index = usernames.indexOf(socket.username);
			if (index > -1){
				usernames.splice(index,1);
			}
			// delete socket.friend.friend;
			// delete socket.friend;
			socket.broadcast.emit("update_message",data);
		});

	});
}