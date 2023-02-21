const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");

  client.publish("/deviceKey", "36ig6", { qos: 0 });
  client.publish("suhuair", "19", { qos: 0 });
  client.publish("suhulingkungan", "15", { qos: 0 });
  client.publish("tds", "500", { qos: 0 });
});

// setInterval(() => {

// }, 3000);
