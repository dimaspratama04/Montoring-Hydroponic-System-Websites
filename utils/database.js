const sequelize = require("sequelize");

const db = new sequelize("db_project", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
