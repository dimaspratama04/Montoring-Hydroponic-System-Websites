const sequelize = require("sequelize");

const db = new sequelize("db_project", "root", "", {
  host: "192.168.1.2",
  dialect: "mysql",
});



module.exports = db;
