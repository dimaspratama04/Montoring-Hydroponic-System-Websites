const sequelize = require("sequelize");
var host = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';

const db = new sequelize("db_project", "root", "", {
  host,
  dialect: "mysql",
});



module.exports = db;
