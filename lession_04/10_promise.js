// chua co promise
// function show2(){
//     console.log("data 2");
// }

// function show1(){
//     console.log("data 1");

//     setTimeout(show2);
// }

// setTimeout(show1);


// Co promise
var q = require("q");

// function show(err, data){
//     var deffer = q.defer();

//     if(err){
//         deffer.reject(err);
//     }else{
//         deffer.resolve(data);
//     }

//     return deffer.promise;
// }

function show(err, data){
    return q.Promise(function(resolve, reject, notify){
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    });
}

show(false, "Hello 1")
.then(function(data){
    console.log(data);
    return "this is data 2";

    // Day la request tu client
})
.then(function(data2){
    // request lay du lieu tu DB
    console.log(data2);
    return "data from dB";
})
.then(function(data){
    // tra du lieu ve cho client
    console.log(data);
})
.catch(function(err){
    console.log(err);
});


