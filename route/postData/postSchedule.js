// Initialize mqtt
const mqtt = require("mqtt");

const postSchedule = (req, res) => {
  let deviceName = req.body.deviceName;
  let deviceKey = req.body.devieKey;
  let topicSchedule = req.body.topicSchedule;
  let on = req.body.on;
  let off = req.body.off;

  let sendSchedule = [on, off];
  const client = mqtt.connect("mqtt://broker.emqx.io:1883");
  client.on("connect", () => {
    client.publish(`${topicSchedule}`, JSON.stringify(sendSchedule));
  });
};

module.exports = postSchedule;
