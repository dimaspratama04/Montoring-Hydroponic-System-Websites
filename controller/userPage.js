const dashboardPage = (req, res) => {
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeUser",
  });
};

const deviceDetailsPage = (req, res) => {
  res.render("DeviceDetails", {
    title: "Device Details",
    layout: "layouts/mainHomeUser",
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
