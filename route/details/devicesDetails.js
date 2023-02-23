const deviceDetails = async (req, res) => {
  const deviceKey = req.query.key;

  res.render("DeviceDetail", {
    title: "Device Detail",
    layout: "layouts/mainHomeAdmin",
    deviceKey: deviceKey,
  });
};
module.exports = deviceDetails;
