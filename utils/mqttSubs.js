// Modules
const mqtt = require("mqtt");
const db = require("./databaseConfig");
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
db.connect();

client.on("connect", function () {
  console.log("MQTT SUCCES CONNECT !");
});

const queryGetTopic = `SELECT topic1,topic2,topic3 FROM devices`;
db.query(queryGetTopic, (err, results) => {
  if (err) {
    console.error(err);
    return;
  } else {
    results.map((topicFromDatabase) => {
      client.subscribe("/deviceKey");
      client.subscribe(topicFromDatabase.topic1);
      client.subscribe(topicFromDatabase.topic2);
      client.subscribe(topicFromDatabase.topic3);
      topicHandle(topicFromDatabase);
    });
  }
});

let datas = [[], [], [], []];
function topicHandle(topicFromDatabase) {
  client.on("message", (topic, message) => {
    let msg = message.toString();
    if (topic === "/deviceKey") {
      datas[0].push(msg);
    } else if (topic === topicFromDatabase.topic1) {
      datas[1].push(msg);
    } else if (topic === topicFromDatabase.topic2) {
      datas[2].push(msg);
    } else if (topic === topicFromDatabase.topic3) {
      datas[3].push(msg);
    }
    insertDatas(datas);
  });
}

function insertDatas(datas) {
  let deviceKey = datas[0].slice(-1)[0];
  let suhuAir = datas[1].slice(-1)[0];
  let suhuLingkungan = datas[2].slice(-1)[0];
  let tds = datas[3].slice(-1)[0];

  const queryInsertData = `INSERT INTO datas (deviceKey, topic1_VALUE, topic2_VALUE, topic3_VALUE) VALUES (?, ?, ?, ?)`;
  db.query(queryInsertData, [deviceKey, suhuAir, suhuLingkungan, tds], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
