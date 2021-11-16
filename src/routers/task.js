const express = require("express");
const router = express.Router();
const Task = require("../mongoModel/task");

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
