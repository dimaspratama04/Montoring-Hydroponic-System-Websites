const db = require("../utils/databaseConfig");
const deviceRegister = (req, res) => {
  let deviceKey = (Math.random() + 1).toString(36).substring(7);
  let deviceName = req.body.deviceName;
  let deviceIp = req.body.deviceIp;
  [topic1, topic2, topic3] = req.body.topicMQTT;

  // Insert To database
  const query = `INSERT INTO devices (deviceKey,deviceName,deviceIp,topic1,topic2,topic3) VALUES ( ?, ?, ?, ? ,?, ?)`;
  db.query(query, [deviceKey, deviceName, deviceIp, topic1, topic2, topic3], (err, results) => {
    if (err) {
      res.redirect("/admin/deviceRegister");
      console.log(err);
    } else {
      res.redirect("/admin/deviceRegister");
    }
  });
};

module.exports = deviceRegister;
