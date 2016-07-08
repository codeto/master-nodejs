var storage = require ('node-persist');

storage.initSync({
	dir:'students',
	ttl:false
});

function getAllStuDents(){
	var students = storage.getItemSync('students');
	if (typeof students === 'undefined'){
		return [];
	} else return students;
}

function getDetailStudents(s_id){
	var students = getAllStuDents();

	return students[s_id];
}
function addNewStudent(name,birthday,email){

	var students = getAllStuDents();
	
	var new_student = {};
	new_student.id = students.length + 1;
	new_student.name = name;
	new_student.birthday = birthday;
	new_student.email = email;

	students.push(new_student);

	storage.setItemSync("students",students);
}
function deleteStuden(s_id){
	var students = getAllStuDents();

	for (var i = 0;i < students.length ;i ++){
		if (students[i].id === s_id){
			storage.removeItemSync(students[i]);
			return 'Done';	
		} 
	}
}
function editstudent(s_id,name,birthday,email){
	var students = getAllStuDents();

	students[s_id].id = s_id;
	students[s_id].name = name;
	students[s_id].birthday = birthday;
	students[s_id].email = email;

	storage.setItemSync('students',students);
	return 'Done';


}

addNewStudent('Duc Linh','17/08/1989','haanhduclinh@gmail.com');
addNewStudent('Duc Linh','17/08/1989','haanhduclinh@gmail.com');
addNewStudent('Duc Linh','17/08/1989','haanhduclinh@gmail.com');
addNewStudent('Duc Linh','17/08/1989','haanhduclinh@gmail.com');
addNewStudent('Duc Linh','17/08/1989','haanhduclinh@gmail.com');

var result = getAllStuDents();
console.log(result);