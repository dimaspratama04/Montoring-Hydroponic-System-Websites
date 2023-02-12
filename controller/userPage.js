const dashboardPage = (req, res) => {
  res.render("Dashboard", {
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
  schedulePage: schedulePage,
  userRegisterPage: userRegisterPage,
};
