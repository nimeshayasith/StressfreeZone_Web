const express = require('express');
const { protect } = require('../middleware/authMiddleware'); // Ensure this exists and is imported correctly
const List = require('../models/List'); // Ensure the model is defined correctly

const router = express.Router();

// Get all lists for a user
router.get('/gettask', protect, async (req, res) => {
  try {
    const lists = await List.find({ user: req.user._id });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new list
router.post('/posttask', protect, async (req, res) => {
  try {
    const { name } = req.body;
    const list = new List({
      user: req.user._id,
      name,
      tasks: [],
    });
    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error creating list' });
  }
});

// Add a task to a specific list
router.post('/:id/tasks', protect, async (req, res) => {
  try {
    const { name } = req.body;
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    list.tasks.push({ name, completed: false });
    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error adding task' });
  }
});

// Toggle task completion
router.put('/:id/tasks/:taskId', protect, async (req, res) => {
  try {
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const task = list.tasks.id(req.params.taskId);
    task.completed = !task.completed;
    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error toggling task' });
  }
});

module.exports = router;
