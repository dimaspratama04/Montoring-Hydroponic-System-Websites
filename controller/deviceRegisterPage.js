const deviceRegisterPage = (req, res) => {
  res.render("DeviceRegister", {
    layout: "layouts/mainAuthPage",
  });
};

module.exports = deviceRegisterPage;
