const Devices = require("../models/deviceModels");
const adminPageDashboard = (req, res) => {
  res.render("Dashboard", {
    layout: "layouts/mainHomeAdmin",
  });
};

const adminDeviceDetails = async (req, res) => {
  const devices = await Devices.findAll();
  res.render("DeviceDetails", {
    layout: "layouts/mainHomeAdmin",
    devices: devices,
  });
};

const adminPageSchedulling = (req, res) => {
  res.render("Schedule", {
    layout: "layouts/mainHomeAdmin",
  });
};

const adminPageDeviceRegister = (req, res) => {
  res.render("DeviceRegister", {
    layout: "layouts/mainHomeAdmin",
  });
};

module.exports = {
  adminPageDashboard: adminPageDashboard,
  adminDeviceDetails: adminDeviceDetails,
  adminPageSchedulling: adminPageSchedulling,
  adminPageDeviceRegister: adminPageDeviceRegister,
};
