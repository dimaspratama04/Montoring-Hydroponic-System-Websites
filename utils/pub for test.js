const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
});

setInterval(() => {
  client.publish("APHBM/id", "DEV001", { qos: 0 });
  client.publish("APHBM/suhuair", "49", { qos: 0 });
  client.publish("APHBM/suhulingkungan", "45", { qos: 0 });
  client.publish("APHBM/tds", "900", { qos: 0 });
}, 3000);
