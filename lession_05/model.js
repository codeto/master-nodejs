var users = [{
	'id':1,
	'name':'Duc Linh'
},{
	'id':2,
	'name':'Cuong Ba'
},
{
	'id':3,
	'name':'son ha'
}];

function getAllUser(){
	return users;
}
function getUserId(Id){
	for (var i = 0;i < users.length;i++){
		if (users[i]['id'] == Id) return users[i];
		else return null;
	}
}
function addUser(user){
	if(user){
		users.push(user);
	}
	return users;
}

module.exports = {
	'getAllUser':getAllUser,
	'addUser':addUser,
	'getUserId':getUserId,
	'getAllUser':getAllUser
}

//exports 