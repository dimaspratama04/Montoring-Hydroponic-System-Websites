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

client.on("connect", function () {
  client.subscribe("/deviceKey");
  client.subscribe("/suhuAir");
  client.subscribe("/suhuLingkungan");
  client.subscribe("/tds");

  console.log("MQTT SUCCES CONNECT !");
});

let datas = [[0], [0], [0], [0]];
client.on("message", (topic, message) => {
  let msg = message.toString();

  switch (topic) {
    case "/deviceKey":
      datas[0].push(msg);
      break;

    case "/suhuAir":
      if (msg === undefined || msg === null) {
        datas[1].push(0);
      } else if (msg < 0 || msg > 100) {
        datas[1].push(0);
      } else {
        datas[1].push(msg);
      }
      break;

    case "/suhuLingkungan":
      if (msg === undefined || msg === null) {
        datas[2].push(0);
      } else if (msg < 0 || msg > 100) {
        datas[2].push(0);
      } else {
        datas[2].push(msg);
      }
      break;

    case "/tds":
      if (msg === undefined || msg === null) {
        datas[3].push(0);
      } else if (msg < 0 || msg > 2000) {
        datas[3].push(0);
      } else {
        datas[3].push(msg);
      }
      break;

    default:
      break;
  }
  insertDatas(datas);
});

function insertDatas(datas) {
  let deviceKey = datas[0].slice(-1);
  let suhuAir = datas[1].slice(-1)[0];
  let suhuLingkungan = datas[2].slice(-1)[0];
  let tds = datas[3].slice(-1)[0];

  const queryInsertData = `INSERT INTO datas (deviceKey, topic1_VALUE, topic2_VALUE, topic3_VALUE) VALUES (?, ?, ?, ?)`;
  db.query(queryInsertData, [deviceKey, suhuAir, suhuLingkungan, tds], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
