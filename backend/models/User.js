const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  googleId: { type: String },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  premium: {type: Boolean, default: false},
  stripeCustomerId:String,
  subscriptionId:String,
  trialEnd:Date,
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
