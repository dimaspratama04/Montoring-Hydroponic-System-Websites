const adminPageDashboard = (req, res) => {
  res.render("Dashboard", {
    layout: "layouts/mainHomeAdmin",
  });
};

const adminDeviceDetails = (req, res) => {
  res.render("DeviceDetails", {
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
  adminDeviceDetails: adminDeviceDetails,
  adminPageSchedulling: adminPageSchedulling,
  adminPageDeviceRegister: adminPageDeviceRegister,
};
