const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true },
  sem1: { type: Number },
  sem2: { type: Number },
  sem3: { type: Number },
  sem4: { type: Number },
  sem5: { type: Number },
  sem6: { type: Number },
  sem7: { type: Number },
  sem8: { type: Number },
  cgpa: { type: Number },
});

const Result = mongoose.model("result", resultSchema);

module.exports = { Result };
