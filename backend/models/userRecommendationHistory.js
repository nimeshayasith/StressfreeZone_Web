// UserRecommendationHistory.js - Separate model for tracking recommendations
const mongoose = require('mongoose');

const userRecommendationHistorySchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  contentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Content',
    required: true
  },
  recommended: { type: Date, default: Date.now },
  engaged: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  engagementTime: { type: Number, default: 0 }
}, {
  timestamps: true
});

// Create compound index to efficiently query user's history
userRecommendationHistorySchema.index({ userId: 1, contentId: 1 }, { unique: true });

module.exports = mongoose.model('UserRecommendationHistory', userRecommendationHistorySchema);