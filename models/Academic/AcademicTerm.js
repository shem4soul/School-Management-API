const mongoose = require('mongoose');

const academicTermSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, "Academic term name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Academic term description is required"],
    trim: true,
  },
  duration: {
    type: String,
    default: "3 months",
    enum: {
      values: ["3 months", "6 months", "1 year"],
      message: "{VALUE} is not a valid duration",
    },
  },
  // Relationships
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: [true, "Created by admin is required"],
  },
}, { timestamps: true });

// Model
const AcademicTerm = mongoose.model("AcademicTerm", academicTermSchema);

module.exports = AcademicTerm;
