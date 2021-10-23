const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  price: Number,
  userEmail: String,
  lecturerName: String,
});

module.exports = mongoose.model("Course", courseSchema);
