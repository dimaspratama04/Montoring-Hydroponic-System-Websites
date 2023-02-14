const mysql = require("mysql2");
// Initialize database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_project",
});

module.exports = db;
