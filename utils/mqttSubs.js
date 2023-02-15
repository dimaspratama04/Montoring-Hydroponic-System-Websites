const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.emqx.io:1883");
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
