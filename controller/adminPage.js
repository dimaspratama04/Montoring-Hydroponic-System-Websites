const adminPageDashboard = (req, res) => {
  res.render("Dashboard", {
    layout: "layouts/mainHomeAdmin",
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
  adminPageSchedulling: adminPageSchedulling,
  adminPageDeviceRegister: adminPageDeviceRegister,
};
