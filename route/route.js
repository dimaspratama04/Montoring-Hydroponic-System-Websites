const express = require("express");
const router = express.Router();
const getAllDatas = require("../controller/datas");

router.get("/", getAllDatas);
router.post("/schedule", (req, res) => {
  console.log(res);
});

module.exports = router;
