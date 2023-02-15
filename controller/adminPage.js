const Devices = require("../models/devicesModels");

const adminPageDashboard = (req, res) => {
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeAdmin",
  });
};

const adminDeviceDetails = (req, res) => {
  res.render("DeviceDetails", {
    title: "Device Details",
    layout: "layouts/mainHomeAdmin",
  });
};

const adminPageSchedulling = (req, res) => {
  res.render("Schedule", {
    title: "Schedule",
    layout: "layouts/mainHomeAdmin",
  });
};

const adminPageDeviceList = async (req, res) => {
  const devices = await Devices.findAll();
  res.render("DeviceList", {
    title: "Devices list",
    layout: "layouts/mainHomeAdmin",
    devices: devices,
  });
};
const adminPageDeviceRegister = (req, res) => {
  res.render("DeviceRegister", {
    title: "Device Register",
    layout: "layouts/mainHomeAdmin",
  });
};

module.exports = {
  adminPageDashboard: adminPageDashboard,
  adminPageDeviceList: adminPageDeviceList,
  adminDeviceDetails: adminDeviceDetails,
  adminPageSchedulling: adminPageSchedulling,
  adminPageDeviceRegister: adminPageDeviceRegister,
};
