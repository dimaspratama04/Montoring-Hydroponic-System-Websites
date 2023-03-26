// Modules
const mqtt = require("mqtt");
const db = require("../../utils/databaseConfig");

const postSchedule = (req, res) => {
  let { deviceKey, deviceName, topicSchedule, on, off } = req.body;

  const queryCheckDeviceKey = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}' AND  deviceName = '${deviceName}'`;
  db.query(queryCheckDeviceKey, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      let schedule = [on, off];
      const client = mqtt.connect("mqtt://broker.emqx.io:1883");
      client.on("connect", () => {
        client.publish(`${topicSchedule}`, JSON.stringify(schedule));
        res.status(200).json({ statusText: "OK", message: "Schedule succese set !" });

        // Insert to log db
        db.query("INSERT INTO logschedule(`deviceKey`,`deviceName`,`on`, `off`) VALUE ( ?,?,?,? )", [deviceKey, deviceName, on, off], (err, results) => {
          if (err) throw err;
          console.log(results);
        });
      });
    } else {
      res.status(400).json({ message: "DEVICE NOT FOUND !" });
    }
  });
};

module.exports = postSchedule;
