const mysql = require("mysql2");
var host = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';

// Initialize database
  const db = mysql.createConnection({
    host,
    port: 3306,
    user: "root",
    password: "",
    database: "db_project",
  });


  db.connect((err) => {
    console.log('ip : ' + host)
    if (err) {
      console.error("Error connecting to the database:", err);
    } else {
      console.log("Connected to the database");
    }
  });

  



module.exports = db
