const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// ******************create a new students
/*
router.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
    });
    */

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// ****************** Read a new students
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(201).send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// ****************** Read a new students
// ****************** Read a new students by Id
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    if (!studentData) {
      return res.status(400).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
// ****************** Read a new students by Id
// ****************** Update a new students by Id

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const upadteStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    //console.log(upadteStudents);
    res.send(upadteStudents);
  } catch (e) {
    res.status(500).send(e);
  }
});

// ****************** delete students by Id
router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudents = await Student.findByIdAndDelete(req.params.id);

    if (!req.params.id) {
      return res.status(400).send();
    } else {
      res.send(deleteStudents);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
