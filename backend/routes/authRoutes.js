const express = require('express');
const { signup, login, googleLogin, forgotPassword, resetPassword } = require('../controllers/authController');
//const passport = require('passport');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/login-google', googleLogin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);


module.exports = router;
