module.exports = function(io){
    var usernames = [];

    io.sockets.on("connection", function(socket){
        console.log("Have a new user connected");

        // Listen new user connect
        socket.on("add_user", function(username){
            // Save
            socket.username = username;
            usernames.push(username);

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

            socket.broadcast.emit("update_message", data);
        });

        // Listen disconnect event
        socket.on("disconnect", function(){
            // Notify to other users
            var data = {
                sender: "SERVER",
                message: socket.username + " left chat room"
            };

            socket.broadcast.emit("update_message", data);
        });
    });
}















