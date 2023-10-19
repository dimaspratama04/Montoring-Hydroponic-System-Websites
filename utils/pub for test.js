const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  setInterval(() => {
    client.publish("/deviceKey", "6ivha", { qos: 0 });
    client.publish("/suhuAir", "15", { qos: 0 });
    client.publish("/suhuLingkungan", "10", { qos: 0 });
    client.publish("/tds", "1500", { qos: 0 });
    console.log('ok');
  }, 2000);
});
