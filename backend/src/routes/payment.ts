import express from 'express';
import Stripe from 'stripe';
import Booking from '../models/Booking';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

router.post('/create-checkout-session', async (req, res) => {
  // Set CORS headers specifically for this endpoint
  res.header('Access-Control-Allow-Origin', 'https://ikonic-booking.nexuses.xyz');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).send();
  }

  const { amount, currency, bookingId } = req.body;

  try {
    // Optionally, save the booking to MongoDB here
    // await Booking.create({ ... });
    await Booking.create({
      user: "667676767676767676767676",
      vehicle: "667676767676767676767676",
      price: 100,
      createdAt: new Date()
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency,
          product_data: { name: 'Car Booking' },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://ikonic-booking.nexuses.xyz/booking-confirmation?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://ikonic-booking.nexuses.xyz/payment',
      metadata: { bookingId }
    });

    res.json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Checkout session error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;