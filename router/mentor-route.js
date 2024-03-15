const express = require("express");
const router = express.Router();
const mentors = require("../controllers/mentor-controller");

router.route("/mentor").get(mentors);

module.exports = router;
