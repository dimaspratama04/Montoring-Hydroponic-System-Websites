const db = require("../../utils/databaseConfig");

const getAllDevices = (req, res) => {
  try {
    const queryGetDevices = `SELECT * FROM devices`;
    db.query(queryGetDevices, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (e) {
    res.json({ statusText: "ERROR", message: "Devices not found !" });
  }
};

module.exports = getAllDevices;
