const sequelize = require("sequelize");
const db = require("../utils/database");
const DataType = sequelize;

const Datas = db.define("datas", {
  deviceKey: {
    type: DataType.INTEGER,
  },
  topic1_VALUE: {
    type: DataType.INTEGER,
  },
  topic2_VALUE: {
    type: DataType.INTEGER,
  },
  topic3_VALUE: {
    type: DataType.INTEGER,
  },
  createdAt: {
    type: DataType.DATE,
  },
  updatedAt: {
    type: DataType.TIME,
  },
});

module.exports = Datas;
