const db = require("../../utils/databaseConfig");

const handleDelete = (req, res) => {
  const id = req.query.id;
  try {
    if (req.query.state === "device") {
      const queryDeleteDevices = `DELETE FROM devices WHERE id = '${id}'`;
      db.query(queryDeleteDevices, (err, results) => {
        if (err) throw err;
        res.status(200).json({ message: "OK" });
      });
    } else {
      const queryDeleteAccounts = `DELETE FROM accounts WHERE id = '${id}'`;
      db.query(queryDeleteAccounts, (err, results) => {
        if (err) throw err;
        res.status(200).json({ message: "OK" });
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = handleDelete;
