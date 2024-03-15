const { Schema, model } = require("mongoose");

const mentorSchema = new Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  college: { type: Boolean, required: true },
  linkedinUsername: { type: String, required: true },
});

const Mentor = new model("Mentor", mentorSchema);

module.exports = Mentor;

