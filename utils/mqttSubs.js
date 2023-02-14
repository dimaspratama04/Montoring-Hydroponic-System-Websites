// Initialize MQTT
const mqtt = require("mqtt");
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = "mqtt://broker.emqx.io:1883";
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});

// Initialize database
const db = require("./databaseConfig");
db.connect();

client.on("connect", function () {
  console.log("MQTT SUCCES CONNECT !");
});

db.query("SELECT topic1,topic2,topic3 FROM devices", (err, results) => {
  if (err) {
    console.error(err);
    return;
  } else {
    results.map((topicFromDatabase) => {
      client.subscribe(topicFromDatabase.topic1);
      client.subscribe(topicFromDatabase.topic2);
      client.subscribe(topicFromDatabase.topic3);
    });
  }
});

client.on("message", (topic, message) => {
  console.log(`message from ${topic} and value is ${message}`);
});
