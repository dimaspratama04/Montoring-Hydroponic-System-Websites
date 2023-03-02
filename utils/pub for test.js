const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
  setInterval(() => {
    client.publish("/deviceKey", "gw2fq", { qos: 0 });
    client.publish("/suhuAir", "24", { qos: 0 });
    client.publish("/suhuLingkungan", "35", { qos: 0 });
    client.publish("/tds", "1900", { qos: 0 });
  }, 2000);
});
