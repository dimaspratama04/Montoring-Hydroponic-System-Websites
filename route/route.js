const express = require("express");
const router = express.Router();
const getAllDatas = require("../controller/datas");

router.get("/", getAllDatas);

module.exports = router;
