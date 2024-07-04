const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    title: { type: String, required: false },
    description: { type: String, required: false },
    category: { type: String, required: false },
    dueDate: { type: String, required: false },
    priority: { type: Number, required: false },
    email: { type: String, required: false },
  },
  { collection: "tasks", versionKey: false }
);

const Tasks = mongoose.model("tasks", taskSchema);

module.exports = Tasks