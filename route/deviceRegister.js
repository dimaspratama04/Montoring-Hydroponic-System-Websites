const db = require("../utils/databaseConfig");

const deviceRegister = (req, res) => {
  let deviceKey = (Math.random() + 1).toString(36).substring(7);
  let deviceName = req.body.deviceName;
  let deviceIp = req.body.deviceIp;
  [topic1, topic2, topic3] = req.body.topicMQTT;

  const queryTopicName = `SELECT topic1,topic2,topic3 FROM devices WHERE topic1 = '${topic1}' OR topic2 = '${topic2}' OR topic3 = '${topic3}'`;

  // Check topic name
  db.query(queryTopicName, (err, results) => {
    // If topic has already declared
    if (results.length > 0) {
      res.send("Some topic or topic already declared, please use another topic !");

      // Else topic not already declared
    } else {
      const queryInsert = `INSERT INTO devices (deviceKey,deviceName,deviceIp,topic1,topic2,topic3) VALUES ( ?, ?, ?, ? ,?, ?)`;
      db.query(queryInsert, [deviceKey, deviceName, deviceIp, topic1, topic2, topic3], (err, results) => {
        if (err) {
          res.send("Error");
          res.redirect("/admin/deviceRegister");
        } else {
          res.redirect("/admin/deviceRegister");
        }
      });
    }
  });
};

module.exports = deviceRegister;
