const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host :'54.145.88.215',
  user : 'root',
  password: 'Mypass@321',
  database: 'uniteddogefinance',
  multipleStatements: true
});

module.exports = mysqlConnection;