const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
  // setInterval(() => {
  client.publish("/deviceKey", "golsdf", { qos: 0 });
  client.publish("/suhuAir", "30", { qos: 0 });
  client.publish("/suhuLingkungan", "36", { qos: 0 });
  client.publish("/tds", "2000", { qos: 0 });
  // }, 3000);
});
