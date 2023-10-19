const Devices = require("../models/devicesModels");
const Accounts = require("../models/accountsModels");
const Schedule = require("../models/logScheduleModels");

const adminPageDashboard = async (req, res) => {
  const devices = await Devices.findAll();
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeAdmin",
    devices: devices,
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

const adminPageDeviceDetails = async (req, res) => {
  const deviceKey = req.query.key;
  res.render("DeviceDetail", {
    title: "Device Detail",
    layout: "layouts/mainHomeAdmin",
    deviceKey: deviceKey,
  });
};

const adminPageAccountsList = async (req, res) => {
  const accounts = await Accounts.findAll();
  res.render("ListAccounts", {
    title: "List Accounts",
    layout: "layouts/mainHomeAdmin",
    accounts: accounts,
  });
};

const adminPageLogSchedule = async (req, res) => {
  const schedules = await Schedule.findAll();
  res.render("LogSchedule", {
    title: "Log Schedule",
    layout: "layouts/mainHomeAdmin",
    schedules: Schedule,
  });
};

module.exports = {
  adminPageDashboard: adminPageDashboard,
  adminPageDeviceList: adminPageDeviceList,
  adminPageDeviceInfo: adminPageDeviceInfo,
  adminPageSchedulling: adminPageSchedulling,
  adminPageDeviceRegister: adminPageDeviceRegister,
  adminPageDeviceDetails: adminPageDeviceDetails,
  adminPageAccountsList: adminPageAccountsList,
  adminPageLogSchedule: adminPageLogSchedule,
};
