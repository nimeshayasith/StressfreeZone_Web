const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  isDeleted: { type: Boolean, default: false },
  googleId: { type: String },
  birthday: { type: Date},
  height: { type: Number},
  weight: { type: Number},
  gender:{ type: String
  , enum: ['Male', 'Female'], 
  default: 'Male'},
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
