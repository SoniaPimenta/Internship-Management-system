const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true},
  duration: { type: String, required: true },
  rollNumber: { type: Number, required: true },
});

const Internship = mongoose.model("internship", internshipSchema);

module.exports = { Internship };
