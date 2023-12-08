const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = mongoose.model("Students", studentSchema);
