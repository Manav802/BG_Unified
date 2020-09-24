const mongoose = require("mongoose");

//schema
const reportSchema = new mongoose.Schema(
  {
    archive: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
    browser: {
      type: String,
      required: true,
    },
    operatingSystem: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
