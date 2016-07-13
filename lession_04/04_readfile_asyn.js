var fs = require('fs');

console.log('Start read file');

fs.readFile('data.txt',function(err,content){
	if (err){
		console.log('Xy ly loi')
	} else {
		console.log('File content is: ',content.toString());
	}

})

console.log('end');