const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
  setInterval(() => {
    client.publish("/deviceKey", "wjx3d", { qos: 0 });
    client.publish("/suhuAir", "19", { qos: 0 });
    client.publish("/suhuLingkungan", "30", { qos: 0 });
    client.publish("/tds", "1000", { qos: 0 });
  }, 2000);
});
