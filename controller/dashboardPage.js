const dashboardPage = (req, res) => {
  res.render("Dashboard", {
    layout: "layouts/mainHome",
  });
};

module.exports = dashboardPage;
