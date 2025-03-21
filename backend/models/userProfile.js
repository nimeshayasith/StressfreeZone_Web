// UserProfile.js - Create a new model for recommendation data
const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
    unique: true
  },
  occupation: { 
    type: String, 
    enum: ['Student', 'Working Professional', 'Stay-at-home Parent', 'Retired', 'Other'],
    default: 'Other'
  },
  stressFrequency: { 
    type: String, 
    enum: ['Daily', 'A few times a week', 'Weekly', 'Monthly', 'Rarely'],
    default: 'Daily'
  },
  previousTechniques: {
    type: [String],
    enum: ['Deep Breathing Exercises', 'Mindfulness Meditation', 'Movements Exercises', 
           'Listening to Music', 'Guided Imagery', 'None of the Above'],
    default: []
  },
  usesDeadlines: {
    type: Boolean,
    default: false
  },
  availableTime: {
    type: String,
    enum: ['5-10 minutes', '10-20 minutes', '20-30 minutes', 'More than 30 minutes'],
    default: '5-10 minutes'
  },
  preferredTechniques: {
    type: [String],
    enum: ['Guided Meditation', 'Breathing Exercises', 'Yoga or Stretching', 
           'Soundscapes or Music Therapy', 'Visual Relaxation', 'Other'],
    default: []
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserProfile', userProfileSchema);