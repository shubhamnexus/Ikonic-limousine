import Stripe from 'stripe';

const stripe = new Stripe('YOUR_SECRET_KEY', {
  apiVersion: '2025-02-24.acacia',
  typescript: true
});

export async function createPaymentIntent(amount: number, currency: string = 'AED') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents and ensure it's an integer
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
} 