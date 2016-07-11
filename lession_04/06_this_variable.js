var fs = require("fs");

function FileObject(){
    this.file_name = "";

    this.read_file = function(){
        console.log("Mo file: ", this.file_name);

        var me = this;
        fs.open(this.file_name, "r", function(err, file){

            if(err){
                console.log("Khong the mo file: ", me.file_name); // file_name = undefined
                console.log(err);
            }

            console.log("Mo file thanh cong", me.file_name);
        });
    }
}


var f = new FileObject();

//Set file name
f.file_name = "data_1.txt";

f.read_file();