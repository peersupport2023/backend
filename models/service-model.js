const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  image: { type: String, required: true },
  header: { type: String, required: true },
  isUrl: { type: Boolean, required: true },
  description: { type: String, required: true },
  btntitle: { type: String, required: true },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
