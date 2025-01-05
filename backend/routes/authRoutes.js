const express = require('express');

const { signup, login , forgotPassword, resetPassword, loginWithGoogle } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/login-google', loginWithGoogle);


module.exports = router;
