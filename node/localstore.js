var storage = require ('node-persist');

storage.initSync({dir:'stutents'});

function getAllStutents(){
	var students = stogare.getItemSync('students');
	if (typeof students === 'undefined'){
		return Null;
	} else return stutents;
}

function getDetailStudents(){

}
function addNewStudent(){

}
function deleteStuden(){

}
function editstudent(){

}
