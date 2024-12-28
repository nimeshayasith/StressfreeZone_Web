const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');
const nodemailer = require('nodemailer');

//const { OAuth2Client } = require('google-auth-library');
//const nodemailer = require('nodemailer');
//const crypto = require('crypto');
//const admin = require('../firebaseAdmin')
//const { auth } = require('firebase-admin');

//const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


// Sign Up with Email & Password
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login with Email & Password
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


// Forgot password 
exports.forgotPassword = async (req,res) => {
  const {email} = req.body;
  try{
    const user = await User.findOne({email});
    if(!user) return res.status(404).json({msg: ' User not found'});

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    user.resetPasswordExpires = Date.now() + 3600000; 
    
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',

// Google Login
/*exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    // Verify Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { email, name} = decodedToken;

    // Check if user exists in MongoDB
    let user = await User.findOne({ email });
    if (!user) {
      // Create new user if doesn't exist
      user = new User({ email, name});
      await user.save();
    }

    // Generate JWT token for your app
    const jwtToken = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token: jwtToken, user });
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });


    /*const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/reset-password/${resetToken}`;*/
    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL,
      subject: 'Password Reset Request',
      //text: `You are receiving this email because you (or someone else) have requested to reset your password.\n\nPlease click on the following link, or paste it into your browser to complete the process:\n\n${resetURL}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.`,
      html: `
        <p>You are receiving this email because you (or someone else) have requested to reset your password.</p>
        <p>Please click on the link below to reset your password:</p>
        <a href="${resetURL}" target="_blank">${resetURL}</a>
        <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: 'Reset password link sent to email' });

  }catch(err){
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ msg: 'Invalid or expired token' });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ msg: 'Password reset successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL,
      subject: 'Password reset',
      text: `You are receiving this because you have requested a password reset. 
      Please click the following link, or paste it into your browser to reset your password:
      http://${req.headers.host}/reset/${token}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: 'Email sent' });
  } catch (error) {
    console.error('Error in forgotPassword:',error)
    res.status(500).json({ msg: 'Server error' });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) return res.status(400).json({ msg: 'Invalid or expired token' });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ msg: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });

  }
};

*/