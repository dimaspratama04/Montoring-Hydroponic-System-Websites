const dashboardPage = (req, res) => {
  res.render("Dashboard", {
    title: "Dashboard",
    layout: "layouts/mainHomeUser",
  });
};

const deviceInfoPage = (req, res) => {
  res.render("DeviceInfo", {
    title: "Device Info",
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
  deviceInfoPage: deviceInfoPage,
  schedulePage: schedulePage,
  userRegisterPage: userRegisterPage,
};
