const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  language: {
    type: String,
    required: true,
    enum: ["cpp", "py"],
  },
  filepath: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "error"],
  },
  output: {
    type: String,
    default:"",
  },
});

// default export
module.exports = mongoose.model("job", JobSchema);
