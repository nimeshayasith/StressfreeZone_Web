const express = require('express');
const { signup, login , forgotPassword, resetPassword, loginWithGoogle, updateUserDetails} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); 

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/login-google', loginWithGoogle);
router.put('/update-details', protect, updateUserDetails); 

module.exports = router;
