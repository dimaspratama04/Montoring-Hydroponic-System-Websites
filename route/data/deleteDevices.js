const db = require("../../utils/databaseConfig");

const deleteDevices = (req, res) => {
  let deviceKey = req.body.deviceKey;
  console.log(deviceKey);
  const queryDeleteDevices = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;

  db.query(queryDeleteDevices, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
};

module.exports = deleteDevices;
