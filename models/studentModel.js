const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  usn: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
