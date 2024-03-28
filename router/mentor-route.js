const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentor-controller");

router.route("/mentor").get(mentorController.mentors);

router
  .route("/item/:id")
  .get(mentorController.mentorById);

module.exports = router;
