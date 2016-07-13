var fs = require('fs');

//write file


fs.writeFile('data2.txt','Im am ha anh duc linh',function(err){
	if (err) console.log('Can not create file');
	else{
		var content = fs.readFileSync('data2.txt');
		console.log(content.toString());
	}
});

//show file infor

fs.stat('data2.txt',function(err,stat){
	if (err) console.log('There is error');
	else {
		console.log(stat);
	}
});
//chay o dau thi sinh ra o do
fs.mkdir('new_folder',function(err){
	if (err) console.log('There was a err');
	else console.log('Succes');
});