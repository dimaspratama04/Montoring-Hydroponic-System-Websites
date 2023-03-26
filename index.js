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
require("./utils/mqttSubs");

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

// Auth
const userLogin = require("./route/auth/userLogin");
const userLogout = require("./route/auth/userLogout");

// Get data
const getAllDatas = require("./route/data/getAllDatas");
const getAllDevices = require("./route/data/getAllDevices");

// Delete
const handleDelete = require("./route/data/handleDelete");

// Post data
const postSchedule = require("./route/postData/postSchedule");

// Registration
const userRegister = require("./route/register/userRegister");
const deviceRegister = require("./route/register/deviceRegister");

// Route path user page (GET)
const { dashboardPage, schedulePage, userRegisterPage, deviceInfoPage, deviceDetailsPage } = require("./controller/userPage");

// Route path Admin Page (GET)
const { adminPageDashboard, adminPageSchedulling, adminPageDeviceRegister, adminPageDeviceInfo, adminPageDeviceList, adminPageDeviceDetails, adminPageAccountsList, adminPageLogSchedule } = require("./controller/adminPage");

// Endpoint auth
app.use("/logout", userLogout);
app.use("/auth", userLogin);

// Endpoint get data
app.use("/datas", getAllDatas);
app.use("/devices", getAllDevices);

// Endpoint delete
app.use("/delete", handleDelete);

// Endpoint post data
app.use("/postSchedule", postSchedule);

// Endpoint registration
app.use("/userRegister", userRegister);
app.use("/deviceRegister", deviceRegister);

// Endpoint for admin page (GET)
app.use("/admin/dashboard", adminPageDashboard);
app.use("/admin/schedulling", adminPageSchedulling);
app.use("/admin/deviceList", adminPageDeviceList);
app.use("/admin/deviceRegister", adminPageDeviceRegister);
app.use("/admin/deviceInfo", adminPageDeviceInfo);
app.use("/admin/detail", adminPageDeviceDetails);
app.use("/admin/accounts", adminPageAccountsList);
app.use("/admin/log", adminPageLogSchedule);

// Endpoint for user page (GET)
app.use("/register", userRegisterPage);
app.use("/home/dashboard", dashboardPage);
app.use("/home/schedulling", schedulePage);
app.use("/home/deviceInfo", deviceInfoPage);
app.use("/home/detail", deviceDetailsPage);

// Login page
app.get("/", (req, res) => {
  res.render("Login", {
    title: "Login",
    layout: "layouts/mainAuthPage",
  });
});

// Home page user
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
