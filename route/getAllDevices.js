const Devices = require("../models/devicesModels");

const getAllDevices = async (req, res) => {
  try {
    const devices = await Devices.findAll();
    res.json(devices);
  } catch (e) {
    res.json({ message: e });
  }
};

module.exports = getAllDevices;
