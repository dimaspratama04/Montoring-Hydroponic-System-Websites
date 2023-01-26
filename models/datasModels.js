const sequelize = require("sequelize");
const db = require("../utils/database");
const DataType = sequelize;

const Datas = db.define("datas", {
  devid: {
    type: DataType.INTEGER,
  },
  suhuAir: {
    type: DataType.INTEGER,
  },
  suhuLingkungan: {
    type: DataType.INTEGER,
  },
  tds: {
    type: DataType.INTEGER,
  },
  createdAt: {
    type: DataType.DATE,
  },
  updatedAt: {
    type: DataType.DATE,
  },
});

module.exports = Datas;
