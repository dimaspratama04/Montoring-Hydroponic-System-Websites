const Devices = require("../models/devicesModels");
const Datas = require("../models/datasModels");

const adminPageDashboard = async (req, res) => {
  const devices = await Devices.findAll();
  const datas = await Datas.findAll();
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeAdmin",
    devices: devices,
    datas: datas,
  });
};

const adminPageDeviceInfo = async (req, res) => {
  const devices = await Devices.findAll();
  res.render("DeviceInfo", {
    title: "Device info",
    devices: devices,
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
  adminPageDeviceInfo: adminPageDeviceInfo,
  adminPageSchedulling: adminPageSchedulling,
  adminPageDeviceRegister: adminPageDeviceRegister,
};
