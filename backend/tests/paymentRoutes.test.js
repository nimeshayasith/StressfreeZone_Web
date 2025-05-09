const request = require('supertest');
const express = require('express');
const router = require('../routes/payment');
const stripe = require('stripe');
const User = require('../models/User');

const app = express();
app.use(express.json());
app.use('/api/payments', router);

jest.mock('stripe', () => {
  return jest.fn(() => ({
    paymentIntents: {
      create: jest.fn().mockResolvedValue({ client_secret: 'mock_secret' })
    },
    subscriptions: {
      create: jest.fn().mockResolvedValue({
        id: 'sub_123',
        trial_end: Math.floor(Date.now() / 1000) + 7 * 86400,
        latest_invoice: { payment_intent: {} },
      }),
    },
    customers: {
      retrieve: jest.fn().mockResolvedValue({ id: 'cus_123' }),
      create: jest.fn().mockResolvedValue({ id: 'cus_123' }),
    },
    paymentMethods: {
      attach: jest.fn().mockResolvedValue({}),
    }
  }));
});

jest.mock('../middleware/authMiddleware', () => ({
  protect: (req, res, next) => {
    req.user = { _id: 'user123' }; // fake user ID
    next();
  },
}));

jest.mock('../models/User');

describe('POST /api/payments/create-payment-intent', () => {
  it('should create a payment intent', async () => {
    User.findById.mockResolvedValue({ _id: 'user123', email: 'test@example.com' });

    const res = await request(app)
      .post('/api/payments/create-payment-intent')
      .send({ amount: 50 });

    expect(res.statusCode).toBe(200);
    expect(res.body.clientSecret).toBe('mock_secret');
  });
});

describe('POST /api/payments/create-subscription', () => {
  it('should create a subscription', async () => {
    User.findById.mockResolvedValue({
      _id: 'user123',
      email: 'test@example.com',
      stripeCustomerId: null,
    });

    User.findByIdAndUpdate.mockResolvedValue();

    const res = await request(app)
      .post('/api/payments/create-subscription')
      .send({ paymentMethodId: 'pm_123', country: 'US' });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
