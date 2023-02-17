const db = require("../../utils/databaseConfig");

const getAllDevices = (req, res) => {
  try {
    const deviceKey = req.query.key;
    // Dashboard
    if (req.query.state === "dashboard") {
      const queryGetDevicesDashboard = `SELECT * FROM devices INNER JOIN datas ON devices.deviceKey = datas.deviceKey WHERE devices.deviceKey = '${deviceKey}'`;
      db.query(queryGetDevicesDashboard, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.json(results);
        } else {
          res.json({ statusText: "ERROR", message: "Devices not found !" });
        }
      });

      // Device info
    } else if (req.query.state === "info") {
      const queryGetDevices = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;
      db.query(queryGetDevices, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.json(results);
        } else {
          res.json({ statusText: "ERROR", message: "Devices not found !" });
        }
      });
    }
  } catch (e) {
    res.json({ statusText: "ERROR", message: "Something wrong !" });
  }
};

module.exports = getAllDevices;
