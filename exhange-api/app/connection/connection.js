var mysql = require('mysql2/promise');

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "CurrencyExchange",
});

module.exports = con;