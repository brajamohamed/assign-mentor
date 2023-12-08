const express = require("express");
const router = express.Router();
const Mentor = require("../model/mentor.model");

router.post("/createMentor", (req, res) => {
  try {
    const payload = req.body;
    const newMentor = new Mentor(payload);
    newMentor
      .save()
      .then((data) => {
        console.log(data);
        res.status(200).send("Mentor added successfully");
      })
      .catch((error) => {
        res.status(400).send("Error creating mentor", error);
      });
  } catch {
    res.status(500).send("Internal server error");
  }
});

router.get("/mentorslist", (req, res) => {
  try {
    Mentor.find()
      .then((data) => {
        console.log("Data retrived successfully");
        res.send({ data: data });
      })
      .catch((error) => {
        res.status(400).send("Error while retriving data", error);
      });
  } catch (error) {
    res.send("Internal server Error");
  }
});

module.exports = router;
