const sequelize = require("sequelize");
const db = require("../utils/database");
const DataType = sequelize;

const Datas = db.define("datas", {
  suhuAir: {
    type: DataType.STRING,
  },
  suhuLingkungan: {
    type: DataType.STRING,
  },
  tds: {
    type: DataType.STRING,
  },
  createdAt: {
    type: DataType.DATE,
  },
  updatedAt: {
    type: DataType.DATE,
  },
});

module.exports = Datas;
