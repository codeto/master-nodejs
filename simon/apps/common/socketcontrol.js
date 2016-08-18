module.exports = function(io){
    var usernames = [];
    var socketOfUsers = {};

    io.sockets.on("connection", function(socket){
        console.log("Have a new user connected");

        // Listen new user connect
        socket.on("add_user", function(username){
            // Save
            socket.username = username;
            var flag = false;
            for(var i = 0; i < usernames.length; i++){
                if(username == usernames[i]){
                    flag = true;
                    break;
                }
            }
            if(!flag){
                usernames.push(username);
                socketOfUsers[username] = socket.id;
            }

            // Notify to myself
            var data = {
                sender: "SERVER",
                message: "You have join to chat room"
            };

            socket.emit("update_message", data);

            // Notify to other users
            var data = {
                sender: "SERVER",
                message: username + " have join to chat room"
            };

            socket.broadcast.emit("update_message", data);
            io.sockets.emit("update_users", usernames);
        });

        // Listen send_message event
        socket.on("send_message", function(message){
            // Notify to myself
            var data = {
                sender: "You",
                message: message
            };

            socket.emit("update_message", data);

            // Notify to other users
            var data = {
                sender: socket.username,
                message: message
            };
            if(socket.friend){
                socket.friend.emit("update_message", data);
            }
        });

        // Listen choose_user event
        socket.on("choose_user", function(username){
            // Get friend's socket
            var id_socket_friend = socketOfUsers[username];
            console.log(id_socket_friend);
            var socket_friend = io.sockets.connected[id_socket_friend];

            // Set friend for my friend is myself
            socket_friend.friend = socket;
            // Set friend for myself
            socket.friend = socket_friend;
        });

        // Listen disconnect event
        socket.on("disconnect", function(){
            // Notify to other users
            var data = {
                sender: "SERVER",
                message: socket.username + " left chat room"
            };

            //Delete in friend
            delete socket.friend.friend;
            delete socket.friend;

            // Remove in usernames array
            for(var i = 0; i < usernames.length; i++){
                if(username == usernames[i]){
                    usernames.splice(i, 1);
                    break;
                }
            }

            socket.broadcast.emit("update_users", usernames);
            socket.broadcast.emit("update_message", data);
        });

    });
}















