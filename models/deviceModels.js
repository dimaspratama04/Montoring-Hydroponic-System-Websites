const sequelize = require("sequelize");
const db = require("../utils/database");
const DataType = sequelize;

const Devices = db.define("devices", {
  id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
  deviceKey: { type: DataType.STRING },
  deviceName: { type: DataType.STRING },
  deviceIp: { type: DataType.STRING },
  topic1: { type: DataType.STRING },
  topic2: { type: DataType.STRING },
  topic3: { type: DataType.STRING },
});

module.exports = Devices;
