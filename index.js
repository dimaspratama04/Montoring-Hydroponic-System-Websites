// Module
const express = require("express");
const app = express();
const port = 3004;
const path = require("path");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const bodyParser = require("body-parser");

// Database and Mqtt
require("./utils/database");
require("./utils/mqtt");

// Initialize Express layouts
app.set("view engine", "ejs");
app.set("extractScripts", true);
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);

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

// Route path
const dataRoutes = require("./route/route");
const userLogin = require("./controller/userLogin");
const userLogout = require("./controller/userLogout");
const postSchedule = require("./controller/postSchedule");
const dashboardPage = require("./controller/dashboardPage");
const schedulePage = require("./controller/schedulePage");
const userRegister = require("./controller/userRegister");
const registerPage = require("./controller/registerPage");

// Endpoint
app.use("/datas", dataRoutes);
app.use("/schedule", postSchedule);
app.use("/logout", userLogout);
app.use("/auth", userLogin);
app.use("/dashboard", dashboardPage);
app.use("/schedulling", schedulePage);
app.use("/register", registerPage);
app.use("/userRegister", userRegister);

// Login page
app.get("/", (req, res) => {
  res.render("login", {
    layout: "layouts/mainAuthPage",
  });
});

// Home page
app.get("/home", (req, res) => {
  if (req.session.loggedin) {
    res.render("dashboard", {
      layout: "layouts/mainHome",
      script: "views/script",
    });
  } else {
    res.send("Please login to view this page !");
  }
  res.end();
});

// Url to fetch (url API)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
