// Module
const express = require("express");
const app = express();
const port = 3004;

// Module situational
const cors = require("cors");

// Database and Mqtt
const db = require("./utils/database");

// Schema Database
const Data = require("./models/dataModels");

app.use(cors());

/// Test endpoint helloworld
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

// Value from db endpoint API
app.get("/post", async (req, res) => {
  const datas = await Data.find();
  res.send({
    message: datas,
  });
});

// Message ketika connect
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
