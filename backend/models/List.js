const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  tasks: [
    {
      name: { type: String, required: true },
      completed: { type: Boolean, default: false },
      dueDate: { type: Date},
    },
  ],
});

module.exports = mongoose.model('List', listSchema);
