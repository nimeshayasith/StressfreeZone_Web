// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware'); // JWT middleware

// DELETE /api/users/delete
router.delete('/delete', protect, async (req, res) => {
  try {
    const userId = req.user.id; 
    await User.findByIdAndUpdate(userId, { isDeleted: true });
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting account', error });
  }
});

module.exports = router;
