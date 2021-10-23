const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Course = require("../models/Lecturer");
const Lecturer = require("../models/Lecturer");

router.get("/lecturer", (req, res) => {
  Lecturer.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

// Get Single Course
router.get("/lecturer/:id", (req, res) => {
  const id = req.params.id;
  Course.findOne({ _id: id })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No Data Found");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

router.post("/lecturer", (req, res) => {
  console.log(req.body);
  const { name, gender, position, school } = req.body;

  //Create a new Lecturer
  const newLecturer = new Lecturer({
    name,
    gender,
    position,
    school,
  });

  //Save Course in Database
  newLecturer
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred ",
      });
    });
});

// Edit Single Lecturer
router.put("/lecturer/:id", (req, res) => {
  const id = req.params.id;
  Course.findOneAndUpdate({ _id: id }, req.body)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No Data Found");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

// Delete Single Course
router.delete("/lecturer/:id", (req, res) => {
  const id = req.params.id;
  Course.findOneAndDelete({ _id: id })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No Data Found");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

module.exports = router;
