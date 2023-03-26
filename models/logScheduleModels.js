const sequelize = require("sequelize");
const db = require("../utils/database");
const DataType = sequelize;

const Schedule = db.define("logschedule", {
  deviceKey: {
    type: DataType.STRING,
  },
  deviceName: {
    type: DataType.STRING,
  },
  on: {
    type: DataType.STRING,
  },
  off: {
    type: DataType.STRING,
  },
  createdAt: {
    type: DataType.DATE,
  },
  updatedAt: {
    type: DataType.TIME,
  },
});

module.exports = Schedule;
