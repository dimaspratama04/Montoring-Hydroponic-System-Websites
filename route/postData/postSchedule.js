// Modules
const mqtt = require("mqtt");
const db = require("../../utils/databaseConfig");

const postSchedule = (req, res) => {
  let deviceKey = req.body.deviceKey;
  let topicSchedule = req.body.topicSchedule;
  let on = req.body.on;
  let off = req.body.off;

  const queryCheckDeviceKey = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;
  db.query(queryCheckDeviceKey, (err, results) => {
    if (results.length > 0) {
      let sendSchedule = [on, off];
      const client = mqtt.connect("mqtt://broker.emqx.io:1883");
      client.on("connect", () => {
        client.publish(`${topicSchedule}`, sendSchedule);
        res.send("SUCCES !");
      });
    } else {
      res.send("DEVICE KEY IS NOT VALID !");
    }
  });
};

module.exports = postSchedule;
