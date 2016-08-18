var mysql = require("mysql");
var config = require("config");

// Configure for MySQL
var connection = mysql.createConnection({
  host     : config.get("mysql.host"),
  port      : config.get("mysql.port"),
  user     : config.get("mysql.user"),
  password : config.get("mysql.password"),
  database : config.get("mysql.database")
});

function getConnection(){
    if (!connection){
        connection.connect();
    }

    return connection;
}

function closeConnection(){
    if(connection){
        connection.end();
    }
}

module.exports = {
    getConnection: getConnection,
    closeConnection: closeConnection
}