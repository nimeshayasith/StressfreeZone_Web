const router = require('express').Router();
const stripe = require('stripe')("sk_test_51QrCNfBlwh3mSIcZSvCU6yuQeb7ZdSsNJbuGhqaAvcAZvodcPWwUZ8skOv2Rui4ee7Pm4XYD3NuGlHjNn0QnQ3vK00gMkP0RJH");
const { protect } = require('../middleware/authMiddleware'); 
const User = require('../models/User');


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

router.post('/create-subscription', protect, async (req, res) => {
  try {
    const { paymentMethodId, country } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    let customer = user.stripeCustomerId 
      ? await stripe.customers.retrieve(user.stripeCustomerId)
      : await stripe.customers.create({
          email: user.email,
          payment_method: paymentMethodId,
          invoice_settings: {
            default_payment_method: paymentMethodId,
          },
          metadata: { userId: user._id.toString() },
        });

    // Attach payment method to customer if new
    if (!user.stripeCustomerId) {
      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customer.id,
      });
    }

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: "price_1QrFuqBlwh3mSIcZsJQOKInX" }],
      trial_period_days: 7,
      payment_settings: {
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
    });

    // Update user in database
    const updates = {
      premium: true,
      stripeCustomerId: customer.id,
      subscriptionId: subscription.id,
      trialEnd: new Date(subscription.trial_end * 1000),
    };

    if (!user.stripeCustomerId) {
      await User.findByIdAndUpdate(user._id, updates);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: error.message });
  }
});

/*
// Webhook handler for subscription events
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'invoice.payment_succeeded':
      if (event.data.object.billing_reason === 'subscription_cycle') {
        const customerId = event.data.object.customer;
        await User.updateOne(
          { stripeCustomerId: customerId },
          { $set: { premium: true } }
        );
      }
      break;
      
    case 'customer.subscription.deleted':
      await User.updateOne(
        { subscriptionId: event.data.object.id },
        { $set: { premium: false, subscriptionId: null } }
      );
      break;
  }

  res.json({ received: true });
});
*/

module.exports = router;