// Modules
const mqtt = require("mqtt");
const db = require("../../utils/databaseConfig");

const postSchedule = (req, res) => {
  let { deviceKey, deviceName, topicSchedule, on, off } = req.body;

  const queryCheckDeviceKey = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}' AND  deviceName = '${deviceName}'`;
  db.query(queryCheckDeviceKey, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      let sendSchedule = [on, off];
      const client = mqtt.connect("mqtt://broker.emqx.io:1883");
      client.on("connect", (err) => {
        client.publish(`${topicSchedule}`, JSON.stringify(sendSchedule));
        res.send("SUCCES : Success send schedule to devices !");

        // Insert to log db
        sendSchedule.map((log) => {
          db.query("INSERT INTO logschedule(`deviceKey`,`deviceName`,`log`) VALUE ( ?,?,? )", [deviceKey, deviceName, log], (err, results) => {
            if (err) throw err;
            console.log(results);
          });
        });
      });
    } else {
      res.send("DEVICE KEY OR DEVICE NAME IS NOT VALID !");
    }
  });
};

module.exports = postSchedule;
