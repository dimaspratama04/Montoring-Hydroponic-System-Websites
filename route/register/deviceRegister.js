const db = require("../../utils/databaseConfig");

const deviceRegister = (req, res) => {
  let deviceKey = (Math.random() + 1).toString(36).substring(7);
  let { deviceName, deviceIp } = req.body;

  const queryCheckDeviceName = `SELECT * FROM devices WHERE deviceName = '${deviceName}' OR deviceIp = '${deviceIp}'`;
  db.query(queryCheckDeviceName, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.status(302).json({ statusText: "ERR", message: "Device Already Exist !" });
    } else {
      const queryInsert = `INSERT INTO devices (deviceKey,deviceName,deviceIp) VALUES ( ?, ?, ?)`;
      db.query(queryInsert, [deviceKey, deviceName, deviceIp], (err, results) => {
        if (err) throw err;
        res.status(200).json({ statusText: "OK", message: "Device Succes Registred !" });
      });
    }
  });
};

module.exports = deviceRegister;
