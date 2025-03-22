const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true }, // Reference to the user
    title: { type: String, required: true },
    description: { type: String },
    taskplan_type: {
      type: String,
      required: true,
      enum: ["daily", "weekly", "monthly", "no_repeating"], // Plan types
    },
    start_time: { type: String, required: true }, // Format: HH:mm (24-hour)
    start_date: { type: Date, required: true }, // Task creation/start date
    repeat: { type: Boolean, default: false }, // Whether the task should repeat
    next_execution: { type: Date }, // Next time the task should execute
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
