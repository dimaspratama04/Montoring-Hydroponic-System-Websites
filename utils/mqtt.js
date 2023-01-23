// Module
const mqtt = require("mqtt");
const mysql = require("mysql");

// Mqtt config
const host = "broker.emqx.io";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

// Mqtt topic
const topic1 = "/suhuair";
const topic2 = "/suhulingkungan";
const topic3 = "/tds";

// MySQL config
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_project",
});

// MQTT initialize
const connectUrl = `mqtt://${host}:${port}`;
const mqttclient = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});

// On Connect (Subscribe)
mqttclient.on("connect", () => {
  console.log("Succes Connected to MQTT");

  // Subscribe suhu air
  mqttclient.subscribe([topic1], () => {
    console.log(`Subscribe to topic '${topic1}'`);
  });

  // Subscribe suhu lingkungan
  mqttclient.subscribe([topic2], () => {
    console.log(`Subscribe to topic '${topic2}'`);
  });

  // Subscribe tds
  mqttclient.subscribe([topic3], () => {
    console.log(`Subscribe to topic '${topic3}'`);
  });
});

// Array from template send data to database
let datas = [[], [], []];

// Message (Value) from MQTT
mqttclient.on("message", (topic, message) => {
  let msg = message.toString();
  if (topic === "/suhuair") {
    datas[0].push(msg);
  } else if (topic === "/suhulingkungan") {
    datas[1].push(msg);
  } else {
    datas[2].push(msg);
  }

  // Value from insert data to database
  let suhuAir = datas[0].slice(-1)[0];
  let suhuLingkungan = datas[1].slice(-1)[0];
  let tds = datas[2].slice(-1)[0];

  // Initialize function insert  data to database
  insertData(suhuAir, suhuLingkungan, tds);
});

function insertData(suhuAir, suhuLingkungan, tds) {
  let sendData = `INSERT INTO datas (suhuAir, suhuLingkungan, tds) VALUES ('${suhuAir}', '${suhuLingkungan}', '${tds}')`;
  con.query(sendData, (err, result) => {
    if (err) throw err;
    console.log(`Data succes inserted !`);
  });
}
