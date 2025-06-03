import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe('pk_test_51R13BTFtwLvCEnG8CJuAz5NwyG9YSxC6nQoQ4NB9mwy4Gz97n5jPDEVduBWk9yCWpqPj2sr58Xj872PHwqaM4n6c002xFkCoDy');

// Stripe configuration object
export const stripeConfig = {
  publishableKey: 'YOUR_PUBLISHABLE_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  currency: 'AED',
  locale: 'en',
}; 