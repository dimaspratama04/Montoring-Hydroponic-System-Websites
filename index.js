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

// Route path (POST)
const dataRoutes = require("./route/route");
const postSchedule = require("./route/postSchedule");
const userLogout = require("./route/userLogout");
const userLogin = require("./route/userLogin");
const userRegister = require("./route/userRegister");

// Route path (Page / GET)
const {
  dashboardPage,
  schedulePage,
  deviceRegisterPage,
  userRegisterPage,
} = require("./controller/userPage");

// Route path Admin Page (GET)
const {
  adminPageDashboard,
  adminPageSchedulling,
  adminPageDeviceRegister,
} = require("./controller/adminPage");

// Endpoint (POST)
app.use("/datas", dataRoutes);
app.use("/logout", userLogout);
app.use("/auth", userLogin);
app.use("/schedule", postSchedule);
app.use("/userRegister", userRegister);

// Endpoint for admin
app.use("/admin/dashboard", adminPageDashboard);
app.use("/admin/schedulling", adminPageSchedulling);
app.use("/admin/deviceRegister", adminPageDeviceRegister);

// Endpoint for User (Page / GET)
app.use("/register", userRegisterPage);
app.use("/home/dashboard", dashboardPage);
app.use("/home/schedulling", schedulePage);

// Login page
app.get("/", (req, res) => {
  res.render("Login", {
    layout: "layouts/mainAuthPage",
  });
});

// Home page
app.get("/home/dashboard", (req, res) => {
  if (req.session.loggedin) {
    res.render("dashboard", {
      layout: "layouts/mainHome",
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
