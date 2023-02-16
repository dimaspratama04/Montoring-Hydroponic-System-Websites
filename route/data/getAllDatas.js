const Datas = require("../../models/datasModels");

const getAllDatas = async (req, res) => {
  try {
    const data = await Datas.findAll();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = getAllDatas;
