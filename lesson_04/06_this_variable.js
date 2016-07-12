var fs = require("fs");

function fileObject(){
	this.file_name = "";
	this.read_file = function() {
		console.log("Mo file", this.file_name);

		//bo me la khac ngay
		var me = this;
		fs.open(this.file_name, 'r', function(err, file) {
			if(err) {
				// console.log("Can not open file", this.file_name);
				console.log("Can not open file", me.file_name);
				console.log(err);
			} else {
				// console.log("Mo file thanh cong", this.file_name);
				console.log("Mo file thanh cong", me.file_name);
			}
		});
	}
}


// Can than khi dung this trong function 
var f = new fileObject();

f.file_name = "data.txt";

f.read_file();