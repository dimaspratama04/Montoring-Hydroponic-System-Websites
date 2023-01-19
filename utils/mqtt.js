// Module
import mqtt from "mqtt";
import mongoose from "mongoose";

// Mqtt config
const host = "broker.emqx.io";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

// Mqtt topic
const topic1 = "/suhuair";
const topic2 = "/suhulingkungan";
const topic3 = "/tds";

// MongoDB URL
const uri = "mongodb://127.0.0.1:27017/db_AMHBM";

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

// Ketika Connect (Subscribe)
mqttclient.on("connect", () => {
  console.log("Succes Connected to MQTT");
});

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

// Message (Value) dari MQTT
let suhuAir;
let suhuLingkungan = "";
let tds = "";
mqttclient.on("message", (topic, message) => {
  let msg = message.toString();
  if (topic === "/suhuair") {
    suhuAir = msg;
  } else if (topic === "/suhulingkungan") {
    suhuLingkungan = msg;
  } else {
    tds = msg;
  }

  mongoose.connect(`${uri}`, (err, db) => {
    if (err) throw err;
    let sendData = {
      suhuAir: `${suhuAir}`,
      suhuLingkungan: `${suhuLingkungan}`,
      tds: `${tds}`,
    };
    db.collection("datas").insertOne(sendData, (err, result) => {
      if (err) throw err;
      console.log(sendData);
    });
  });
});

// function suhuAirHandle(msg) {
//   let suhuAir = msg;
//   console.log(suhuAir);
// }

// function suhuLingkunganHandle(msg) {
//   let suhuLingkungan = msg;
//   console.log(suhuLingkungan);
// }

// function tdsHandle(msg) {
//   let tds = msg;
//   console.log(tds);
// }
