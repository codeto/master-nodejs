var fs = require('fs');

function FileObject(){
	this.file_name = '';

	var me = this;

	this.read_file = function(){
		console.log('Open file: ',this.file_name);
		fs.open(this.file_name,'r',function(err,file){
			if (err){
				console.log('There is error. Can not open file: ',me.file_name);
				console.log(err);
			} else {
				console.log('open succes file: ',me.file_name);
			}
		});
	}
}

var f = new FileObject();
f.file_name = 'data1.txt';
f.read_file();