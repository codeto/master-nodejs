var fs = require('fs');
var stt = 1;

var q = require('q');

// fs.readdir('word',function(err,list){
// 	if (err){
// 		console.log(err);
// 	} else {
// 		var list_folder = list;
// 		console.log(list);
// 		for (var i = 0; i < list.length;i ++){
// 			console.log(list[i]);
// 			fs.readFile('word/'+list[i],function(err2,data){
// 				if (err2){
// 					console.log(err2);
// 				} else {
// 					//xu ly file
// 					fs.writeFile('kq/'+stt+'.txt',data,function(err3){
// 						if (err3){
// 							console.log('co loi o buoc ghi file: ',err3);
// 						} else {
// 							var stt = stt + 1;
// 						}
// 					});
// 				}
// 			})
// 		}
// 	}
// });

function start_dl(err,data){
	return q.Promise(function(resolve,reject,notify){
		if (err){
			reject(err);
		}else{
			resolve(data);
		}
	});
}


start_dl(false,{'act':"True"}).then(function(){
	fs.readdir('word',function(err1,list){
		if (err1) console.log('Err at read dir');
		else {
			return list;
			console.log(list);
		}
	});
}).then(function(list){
	for (var i =0;i < list.length;i++){
		return list[i];
	}
}).then(function(element){
	fs.readFile('word/'+element,function(err2,data){
		if (err2) console.log(err2);
		else return data;
	});
}).then(function(content){
	fs.writeFile('kq/'+stt+'.txt',content,function(err3){
		if (err3){
			console.log(err3);
			var stt = stt + 1;
		} else{
			console.log('ghi thanh cong file so: ');
			console.log(stt);
		}
	});
})