const router = require('express').Router();
const stripe = require('stripe')("sk_test_51QrCNfBlwh3mSIcZSvCU6yuQeb7ZdSsNJbuGhqaAvcAZvodcPWwUZ8skOv2Rui4ee7Pm4XYD3NuGlHjNn0QnQ3vK00gMkP0RJH");
const { protect } = require('../middleware/authMiddleware'); 
const User = require('../models/User');

// Protected route using your "protect" middleware
router.post('/create-payment-intent', protect, async (req, res) => {
  try {
    const { amount } = req.body;

    // Get user from middleware (req.user)
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      metadata: { userId: user._id.toString() }, // Track user in Stripe
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add more routes as needed
module.exports = router;