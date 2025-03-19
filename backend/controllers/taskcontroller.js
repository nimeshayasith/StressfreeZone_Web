const Task = require("../models/task");
const moment = require("moment");

// Create a task
exports.createTask = async (req, res) => {
  const { user_id, title, description, taskplan_type, start_time, start_date } = req.body;

  try {
    // Calculate the first execution based on the taskplan_type
    let next_execution;
    const startDateTime = moment(`${start_date} ${start_time}`, "YYYY-MM-DD HH:mm");

    switch (taskplan_type) {
      case "daily":
        next_execution = startDateTime.toDate();
        break;
      case "weekly":
        next_execution = startDateTime.add(7, "days").toDate();
        break;
      case "monthly":
        next_execution = startDateTime.add(1, "months").toDate();
        break;
      case "no_repeating":
        next_execution = null;
        break;
      default:
        return res.status(400).json({ message: "Invalid taskplan_type" });
    }

    // Create the task
    const task = new Task({
      user_id,
      title,
      description,
      taskplan_type,
      start_time,
      start_date,
      repeat: taskplan_type !== "no_repeating",
      next_execution,
    });

    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch tasks by user ID
exports.getTasksByUser = async (req, res) => {
  const { user_id } = req.params;

  try {
    const tasks = await Task.find({ user_id }).sort({ next_execution: 1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
