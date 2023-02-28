const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
  // setInterval(() => {
  client.publish("/deviceKey", "y4qiq", { qos: 0 });
  client.publish("suhuair", "20", { qos: 0 });
  client.publish("suhulingkungan", "35", { qos: 0 });
  client.publish("tds", "1700", { qos: 0 });
  // }, 3000);
});
