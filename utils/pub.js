import mqtt from "mqtt";

const client = mqtt.connect("mqtt://broker.emqx.io:1883");

client.on("connect", () => {
  console.log("ok");
});

client.publish("/suhuair", "27");
client.publish("/suhulingkungan", "25");
client.publish("/tds", "500");
