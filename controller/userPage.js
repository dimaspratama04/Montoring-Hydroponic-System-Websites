const dashboardPage = (req, res) => {
  res.render("Dashboard", {
    layout: "layouts/mainHomeUser",
  });
};

const deviceDetailsPage = (req, res) => {
  res.render("DeviceDetails", {
    layout: "layouts/mainHomeUser",
  });
};

const schedulePage = (req, res) => {
  res.render("Schedule", {
    layout: "layouts/mainHomeUser",
  });
};

const userRegisterPage = (req, res) => {
  res.render("Register", {
    layout: "layouts/mainAuthPage",
  });
};

module.exports = {
  dashboardPage: dashboardPage,
  deviceDetailsPage: deviceDetailsPage,
  schedulePage: schedulePage,
  userRegisterPage: userRegisterPage,
};
