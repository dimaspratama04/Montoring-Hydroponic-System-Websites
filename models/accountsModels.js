const sequelize = require("sequelize");
const db = require("../utils/database");
const DataType = sequelize;

const Accounts = db.define("accounts", {
  username: {
    type: DataType.STRING,
  },
  password: {
    type: DataType.STRING,
  },
  email: {
    type: DataType.INTEGER,
  },
  createdAt: {
    type: DataType.DATE,
  },
  updatedAt: {
    type: DataType.TIME,
  },
});

module.exports = Accounts;
