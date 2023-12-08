const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  mentorId: {
    type: String,
    required: true,
    trim: true,
  },
  mentorName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
});
module.exports = mongoose.model("Mentor", mentorSchema);
