const Devices = require("../models/devicesModels");
const dashboardPage = (req, res) => {
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeUser",
  });
};

const deviceInfoPage = async (req, res) => {
  const devices = await Devices.findAll();
  res.render("DeviceInfo", {
    title: "Device Info",
    layout: "layouts/mainHomeUser",
    devices: devices,
  });
};

const schedulePage = (req, res) => {
  res.render("Schedule", {
    title: "Schedule",
    layout: "layouts/mainHomeUser",
  });
};

const userRegisterPage = (req, res) => {
  res.render("Register", {
    title: "Register",
    layout: "layouts/mainAuthPage",
  });
};

module.exports = {
  dashboardPage: dashboardPage,
  deviceInfoPage: deviceInfoPage,
  schedulePage: schedulePage,
  userRegisterPage: userRegisterPage,
};
