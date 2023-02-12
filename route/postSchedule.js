// Initialize mqtt
const mqtt = require("mqtt");

const postSchedule = (req, res) => {
  const dataSchedule = {
    message: "OK",
    schedule: req.body,
  };
  const client = mqtt.connect("mqtt://broker.emqx.io:1883");
  client.on("connect", () => {
    client.publish("APHBM/schedule", JSON.stringify(req.body));
  });
};

module.exports = postSchedule;
