const Devices = require("../models/devicesModels");

const dashboardPage = (req, res) => {
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeUser",
  });
};

const deviceDetailsPage = async (req, res) => {
  const devices = await Devices.findAll();
  res.render("DeviceDetails", {
    title: "Device Details",
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
  deviceDetailsPage: deviceDetailsPage,
  schedulePage: schedulePage,
  userRegisterPage: userRegisterPage,
};
