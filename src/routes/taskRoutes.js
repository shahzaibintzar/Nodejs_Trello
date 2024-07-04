const express = require("express");
const router = express.Router();
const { getTasks, getSingleTask, addTask, deleteTask, updateTask, getMyTasks, getTasksByTitle } = require("../controllers/task");

router.get("/", getTasks);

router.get("/my", getMyTasks);

router.get("/:id", getSingleTask);

router.post("/", addTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

router.get('/title/:value', getTasksByTitle);


module.exports = router;
