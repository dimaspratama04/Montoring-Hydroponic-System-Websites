// Modules
const mqtt = require("mqtt");
const db = require("../../utils/databaseConfig");

const postSchedule = (req, res) => {
  let { deviceKey, topicSchedule, on, off } = req.body;

  const queryCheckDeviceKey = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;
  db.query(queryCheckDeviceKey, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      let sendSchedule = [on, off];
      const client = mqtt.connect("mqtt://broker.emqx.io:1883");
      client.on("connect", () => {
        client.publish(`${topicSchedule}`, JSON.stringify(sendSchedule));
        res.send("SUCCES !");
      });
    } else {
      res.send("DEVICE KEY IS NOT VALID !");
    }
  });
};

module.exports = postSchedule;
