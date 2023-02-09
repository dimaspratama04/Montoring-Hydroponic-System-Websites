// Module
const express = require("express");
const app = express();
const port = 3004;
const path = require("path");
const session = require("express-session");

// Module situational
const cors = require("cors");
const bodyParser = require("body-parser");

// Database and Mqtt
require("./utils/database");
require("./utils/mqtt");

// Route path
const dataRoutes = require("./route/route");
const userLogin = require("./controller/userLogin");
const userLogout = require("./controller/userLogout");
const postSchedule = require("./controller/postSchedule");

// Use moduls
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Endpoint
app.use("/datas", dataRoutes);
app.use("/schedule", postSchedule);
app.use("/logout", userLogout);
app.use("/auth", userLogin);

// Login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/login.html"));
});

// Home page
app.get("/home", (req, res) => {
  if (req.session.loggedin) {
    return res.sendFile(path.dirname(__dirname + "/pages/home.html"));
  } else {
    res.send("Please login to view this page !");
  }
  res.end();
});

// Url to fetch (url API)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
