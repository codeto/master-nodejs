var fs = require("fs");

console.log("Bat dau doc file");

fs.readFile("data1.txt", function(err, content){
    if(err){
        console.log(" Co loi roi");
        console.log(err);
        console.log("Xu ly loi");
    }else{
        console.log("Noi dung file la: ", content.toString());
    }

});

console.log("Chuong trinh da ket thuc");