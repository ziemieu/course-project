const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("testing route");
  res.send("Hello World");
});

router.get("/tosin", (req, res) => {
  console.log("testing route2");
  res.send("Tosin");
});

module.exports = router;
