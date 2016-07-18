var users = [
    {
        "id": 1,
        "name": "Son Ha"
    },
    {
        "id": 2,
        "name": "Cuong Ba"
    }
];

function getAllUsers(){
    return users;
}

function getUserById (id){
    for (var i = 0; i < users.length; i++){
        if (users[i].id == id){
            return users[i];
        }
    }

    return null;
}

function addUser(user){
    if(user){
        users.push(user);
    }

    return users;
}


module.exports = {
    "getAllUsers": getAllUsers,
    "getUserById": getUserById,
    "addUser": addUser
};

//exports.getAllUsers = getAllUsers;
