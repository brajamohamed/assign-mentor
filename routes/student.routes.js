const express = require("express");
const router = express.Router();
const Students = require("../model/student.model");

router.get("/students", (req, res) => {
  try {
    Students.find()
      .then((data) => {
        res.status(200).send({
          message: "Students data retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).send("Error while retrival");
      });
  } catch (error) {
    res.status(500).send("Internal Sever Error");
  }
});

router.post("/createStudent", (req, res) => {
  try {
    const payload = req.body;
    const newStudent = new Students(payload);

    newStudent
      .save()
      .then((data) => {
        res.status(200).send("Student created successfully");
      })
      .catch((error) => {
        res.status(400).send({
          message: "Error while creating student",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send("Internal server Error");
  }
});

module.exports = router;
