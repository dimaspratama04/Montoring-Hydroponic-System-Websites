// Module
const express = require("express");
const app = express();
const port = 3004;

// Module situational
const cors = require("cors");

// Database and Mqtt
require("./utils/database");
require("./utils/mqtt");

// Data Route
const dataRoutes = require("./route/route");

app.use(cors());
app.use(express.json());

// Endpoint get all datas from database
app.use("/datas", dataRoutes);

/// Test endpoint helloworld
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

// Url to fetch (url API)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
