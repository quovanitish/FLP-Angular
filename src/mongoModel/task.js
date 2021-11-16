const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
  },

  status: {
    type: String,
    default: "In progress",
    required: true,
  },

  createdOn: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
