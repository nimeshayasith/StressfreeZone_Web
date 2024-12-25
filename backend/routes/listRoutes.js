const express = require('express');
const { protect } = require('../middleware/authMiddleware'); 
const List = require('../models/List'); 


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

//delete a list
router.delete('/:id', protect, async(req,res)=>{
  try{
    const list = await List.findById(req.params.id);

    if(!list){
      return res.status(404).json({message:'List not found'});
    }
    if(list.user.toString() !== req.user._id.toString()){
      return res.status(401).json({message:'Not authorized'});
    }
    await list.deleteOne();
    res.json({message:'List deleted successfully'});
  }catch(err){
    res.status(500).json({message: 'Error deleting list'});
  }
});

//delete a task from a list
router.delete('/:id/tasks/:taskId', protect, async(req,res)=>{
  try{
    const list = await List.findById(req.params.id);
    if(!list){
      return res.status(404).json({message: 'List not found'});
    }

    if(list.user.toString() !== req.user._id.toString()){
      return res.status(401).json({message:'Not authorized'});
    }

    list.tasks = list.tasks.filter((task) => task._id.toString() !== req.params.taskId);
    await list.save();
    res.json(list);

  }catch(error){
    res.status(500).json({message:'Error deleting task'});
  }
});

//update a list name
router.put('/:id', protect, async(req,res)=>{
  try{
    const {name} = req.body;
    const list = await List.findById(req.params.id);

    if(!list){
      return res.status(404).json({message:'List not found'});
    }
    if(!list.user.toString() !== req.user._id.toString()){
      return res.status(401).json({ message: 'Not authorized'});
    }

    list.name = name;
    await list.save();
    res.json(list);
  }catch(error){
    res.status(500).json({message:'Error updating list name'});
  }
});

// update a task name
router.put('/:id/tasks/:taskId', protect, async (req, res) => {
  try {
    const { name } = req.body;
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const task = list.tasks.id(req.params.taskId);
    task.name = name;
    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error toggling task' });
  }
});


//update a task's completion status
router.put('/:id/tasks/:taskId/completion', protect, async(req,res)=>{
  try{
    const {completed} = req.body;
    const list = await List.findById(req.params.id);

    if(!list){
      return res.status(404).json({message:'List not found'});
    }

    if(!list.user.toString() !== req.user._id.toString()){
      return res.status(401).json({message:'Not authorized'});
    }
    const task = list.tasks.id(req.params.taskId);
    task.completed = completed;
    await list.save();
    res.json(list);
  }catch(error){
    res.status(500).json({message:'Error updating task completion status'});
  }
});

module.exports = router;
