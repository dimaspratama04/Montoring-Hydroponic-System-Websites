const db = require("../../utils/databaseConfig");

const getDeviceKeys = (req, res) => {
  const queryGetDevicesDashboard = `SELECT deviceKey FROM devices LIMIT 10`;
  db.query(queryGetDevicesDashboard, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = getDeviceKeys;