const express = require("express");
const router = express.Router();
const Tasks = require("../models/taskModel");
const mongoose = require("mongoose");
const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

// Read Accounts data
router.get("/tasks", async (req, res) => {
  const accountsData = await Tasks.find();
  res.json(accountsData);
});

// Read a specific Account data
router.get("/task/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await Tasks.findById(userId);

    if (!userData) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ userData: userData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Create Account
router.post("/addTask", async (req, res) => {
  try {

    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userEmail = decoded.email;

    const taskData = new Tasks({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      email: userEmail,
    });
    const result = await taskData.save();
    res.json(result);
  } catch (error) {
    console.log("error : ", error);
    res.json({ error: "something went wrong!" });
  }
});

// delete Account
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    console.log(req.params);
    const userId = req.params.id;
    const deletedTask = await Tasks.findByIdAndDelete(userId);
    console.log("deletedTask : ", deletedTask);

    if (!deletedTask) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.json({ message: "user deleted successfuly!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update Account

router.put("/updateTask/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const dataToBeUpdate = new Tasks({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
    });

    const updatedData = await Tasks.findByIdAndUpdate(userId, dataToBeUpdate, {
      new: true,
    });
    console.log("updatedData : ", updatedData);

    if (!updatedData) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.json({ message: "user updated successfuly!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
