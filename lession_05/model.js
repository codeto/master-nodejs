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
	for (var i = i;i < users.length;i++){
		if (users[i]['id'] == Id) return users[i]['id'];
		else return null;
	}
}
function addUser(user){
	if(user){
		users.push(user);
	}
}

module.exports = {
	'getAllUser':getAllUser,
	'addUser':addUser,
	'getAllUser':getAllUser
}

//exports 