// Import some module
var http = require("http");

// Create Server
var server = http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);

    // From DB
    var result = {
        staus_code: 200,
        message: "This is API",
        data: "This is data"
    };
    // res.writeHead(200, {"Content-Type": "text/plain"});
    res.writeHead(200, {"Content-Type": "application/json"});
    // res.write("Hello, I am basic server NodeJS");
    res.write(JSON.stringify(result));
    res.end();
});

server.listen(3000, "0.0.0.0", function(){
    console.log("Server is running on port 3000");
});