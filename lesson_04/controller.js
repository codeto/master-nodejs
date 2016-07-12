var model = require("./model.js");

var mysql = require("mysql");

var id = model.getUserByID(12);

console.log(id);