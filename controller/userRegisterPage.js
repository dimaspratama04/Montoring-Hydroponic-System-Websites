const userRegisterPage = (req, res) => {
  res.render("Register", {
    layout: "layouts/mainAuthPage",
  });
};

module.exports = userRegisterPage;
