const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const Tasks = require("../models/taskModel");

async function getTasks(req, res) {
    const accountsData = await Tasks.find();
    res.json(accountsData);
}

async function getSingleTask(req, res) {
    try {
        const userId = req.params.id;
        const userData = await Tasks.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "Task not found!" });
        }
        res.status(200).json({ userData: userData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function addTask(req, res) {
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
}

async function deleteTask(req, res) {
    try {
        console.log(req.params);
        const userId = req.params.id;
        const deletedTask = await Tasks.findByIdAndDelete(userId);
        console.log("deletedTask : ", deletedTask);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found!" });
        }

        return res.json({ message: "Task deleted successfuly!" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function updateTask(req, res) {
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
            return res.status(404).json({ message: "Task not found!" });
        }

        return res.json({ message: "Task updated successfuly!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getMyTasks(req, res) {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userEmail = decoded.email;

        const task = await Tasks.find({ email: userEmail });

        if (!task) {
            return res.status(404).json({ message: "Task not found for the user!" });
        }

        res.status(200).json({ task: task });
    } catch (error) {
        return res.status(500).json({ error: error.message + "dkjfkdfj" });
    }
}

async function getTasksByTitle(req, res) {
    try {
        const value = req.params.value;
        const tasks = await Tasks.find({ title: { $regex: value, $options: 'i' } });

        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found with the given value in the title." });
        }

        res.status(200).json({ tasks: tasks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getTasks,
    getSingleTask,
    addTask,
    deleteTask,
    updateTask,
    getMyTasks,
    getTasksByTitle,
};
