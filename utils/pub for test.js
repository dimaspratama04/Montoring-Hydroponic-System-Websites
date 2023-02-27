const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
  setInterval(() => {
    client.publish("/deviceKey", "36ig6", { qos: 0 });
    client.publish("suhuair", "19", { qos: 0 });
    client.publish("suhulingkungan", "20", { qos: 0 });
    client.publish("tds", "1500", { qos: 0 });
  }, 3000);
});
