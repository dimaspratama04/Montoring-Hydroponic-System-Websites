const express = require("express");
const router = express.Router();
const getAllDatas = require("../controller/getAllDatas");
const userLogout = require("../controller/userLogout");
const userLogin = require("../controller/userLogin");
const postSchedule = require("../controller/postSchedule");

router.get("/", getAllDatas);
router.get("/logout", userLogout);
router.post("/auth", userLogin);
router.post("/schedule", postSchedule);

module.exports = router;
