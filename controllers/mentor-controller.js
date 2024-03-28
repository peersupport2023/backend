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

const mentorById = async(req,res)=>{
  try {
    const id = req.params.id;
    const data = await Mentor.findOne({ _id: id });
    if (!id || id.length === 0) {
      return res.status(404).json({ message: "Unable to find service" });
    }
    console.log(data)
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {mentors,mentorById};
