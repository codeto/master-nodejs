var fs = require("fs");

// write file

fs.writeFile("data_2.txt", "Toi la Cuong Ba", function(err){
    if(err){
        console.log("Error");
    }else{
        //Read file
        var content = fs.readFileSync("data_2.txt");
        console.log(content.toString());
    }
});

// Show file information

fs.stat("data_2.txt", function(err, stats){
    if(err){
        console.log("Error");
    }else{
        console.log(stats);
    }
});


fs.mkdir("new_folder", function(err){
    if(err){
        console.log("Error");
    }
    else{
        console.log("Success");
    }
})