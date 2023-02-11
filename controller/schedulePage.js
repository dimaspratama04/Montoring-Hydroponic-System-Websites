const schedulePage = (req, res) => {
  res.render("Schedule", {
    layout: "layouts/mainHome",
  });
};

module.exports = schedulePage;
