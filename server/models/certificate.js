const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  certificateLink: [{ type: String }],
  rollNumber: { type: Number, required: true },
});

const Certificate = mongoose.model("certificate", certificateSchema);

module.exports = { Certificate };