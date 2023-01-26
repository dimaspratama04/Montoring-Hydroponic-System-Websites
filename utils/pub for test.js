const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
});

client.publish("APHBM/id", "1", { qos: 0 });
client.publish("APHBM/suhuair", "20", { qos: 0 });
client.publish("APHBM/suhulingkungan", "45", { qos: 0 });
client.publish("APHBM/tds", "900", { qos: 0 });
