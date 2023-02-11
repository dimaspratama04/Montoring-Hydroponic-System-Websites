const registerPage = (req, res) => {
  res.render("Register", {
    layout: "layouts/mainAuthPage",
  });
};

module.exports = registerPage;
