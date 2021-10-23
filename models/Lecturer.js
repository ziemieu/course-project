const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({
  name: String,
  gender: String,
  position: String,
  school: String,
});

module.exports = mongoose.model("Lecturer", lecturerSchema);
