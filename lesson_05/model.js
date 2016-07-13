var users = [
	{
		"id" : 1,
		"name" : "Simon Ha",
	},
	{
		"id" : 2,
		"name" : "Kevil Ba",
	}
];

function getAllUsers() {
	return users;
}

function getUserById(id) {
	for(var i = 0; i < users.length; i++) {
		if(users[i].id == id) {
			return users[i];
		}
	}
	return null;
}

function addUser(user) {
	if(user) {
		users.push("user");
	}
}
module.exports = {
	"getAllUsers" : getAllUsers,
	"getUserById" : getUserById,
	"addUser" : addUser
};