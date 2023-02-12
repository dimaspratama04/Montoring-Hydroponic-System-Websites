const express = require("express");
const router = express.Router();

const getAllDatas = require("./getAllDatas");
const userLogout = require("./userLogout");
const userLogin = require("./userLogin");
const userRegister = require("./userRegister");
const postSchedule = require("./postSchedule");

router.get("/", getAllDatas);
router.get("/logout", userLogout);
router.post("/auth", userLogin);
router.post("/register", userRegister);
router.post("/schedule", postSchedule);

module.exports = router;
