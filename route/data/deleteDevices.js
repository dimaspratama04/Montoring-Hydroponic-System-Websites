const db = require("../../utils/databaseConfig");

const deleteDevices = (req, res) => {
  const queryDeleteDevices = `DELETE FROM devices WHERE id = '${req.query.id}'`;

  db.query(queryDeleteDevices, (err, results) => {
    if (err) throw err;
  });
};

module.exports = deleteDevices;
