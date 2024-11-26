const express = require("express");
const router = express.Router();

const controller = require("../controller/members.controller");

router.post("/addMember", controller.addMember);

router.get("/showAllMembers", controller.showAllMembers);

module.exports = router;
