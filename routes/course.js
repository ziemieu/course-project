const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Get All Courses
router.get("/course", (req, res) => {
  Course.find()
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
router.get("/course/:id", (req, res) => {
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

router.post("/course", (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const description = req.body.description;
  const duration = req.body.duration;
  const price = req.body.price;
  const userEmail = req.body.userEmail;
  const lecturerName = req.body.lecturerName;

  // const { title, description, duration, price } = req.body;

  // Create a Course Object
  const newCourse = new Course({
    title,
    description,
    duration,
    price,
    userEmail,
    lecturerName,
  });

  // Save Course in Database
  // Save Note in the database
  newCourse
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

// Edit Single Course
router.put("/course/:id", (req, res) => {
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
router.delete("/course/:id", (req, res) => {
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
