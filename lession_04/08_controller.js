var model = require("./07_model.js");

var mysql = require("mysql");

var id = model.getById(1);
console.log(id);