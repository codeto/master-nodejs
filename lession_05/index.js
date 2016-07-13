var http = require("http");
var fs = require("fs");
var path = require("path");

var model = require("./model");

var server = http.createServer(function(req, res){
    console.log("Incoming request: ", req.method, " - ", req.url);

    // Create route
    if(req.method == "GET" && req.url == "/"){
        // res.writeHead(200, {"Content-Type": "text/html"});
        // res.write("<h1> This is Home page </h1>");
        // res.end();
        serve_static_file("views/index.html", res);
    }

    if(req.method == "GET" && req.url == "/api/first"){
        res.writeHead(200, {"Content-Type": "application/json"});

        var body = {
            "status": 200,
            "data": "This is the first API",
            "error": false
        };

        res.write(JSON.stringify(body));
        res.end();
    }

    var words = req.url.split(".");
    console.log(words);
    if (words && words.length > 1){
        var extension = words[1].toLowerCase();

        if(extension == "css" || extension == "js"){
            serve_static_file("." + req.url, res);
        }
    }


    // ====== API ========
    if(req.method == "GET" && req.url == "/api/users"){
        var users = model.getAllUsers();
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(users));
        res.end();
    }
});


function get_content_type(file){
    var ext = path.extname(file);
    ext = ext.toLowerCase();

    switch(ext){
        case ".html": return "text/html";
        case ".css" : return "text/css";
        case ".js" : return "text/javascript";
        default: return "text/plain";
    }
}

function serve_static_file(filepath, res){
    var rs = fs.createReadStream(filepath);

    // Get content type
    var content_type = get_content_type(filepath);

    // Check if read file is ERROR
    rs.on("error", function(err){
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("file not Found");
        res.end();
    });

    // If read file is success
    rs.on("readable", function(){
        var d = rs.read();
        if (d){
            res.writeHead(200, {"Content-Type": content_type});
            res.write(d);
        }
    });

    rs.on("end", function(){
        res.end();
    });
}



var host = "localhost";
var port = 3000;
server.listen(port, host, function(){
    console.log("Server is running on ", host, ":", port);
});