const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
});

client.publish("/suhuair", "20", { qos: 0 });
client.publish("/suhulingkungan", "35", { qos: 0 });
client.publish("/tds", "800", { qos: 0 });
