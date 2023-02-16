const db = require("../../utils/databaseConfig");

const getAllDevices = (req, res) => {
  try {
    const deviceKey = req.query.key;
    const queryGetDevices = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;
    db.query(queryGetDevices, (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json({ statusText: "ERROR", message: "Devices not found !" });
      }
    });
  } catch (e) {
    res.json({ statusText: "ERROR", message: "Something wrong !" });
  }
};

module.exports = getAllDevices;
