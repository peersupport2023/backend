const Mentor = require("../models/mentor-model");

const mentors = async (req, res) => {
  try {
    const response = await Mentor.find();
    if (!response) {
      res.status(404).json({ msg: "no mentor found" });

      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`mentor error: ${error}`);
  }
};

module.exports = mentors;
