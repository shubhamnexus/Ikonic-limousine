import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

// Stripe configuration object
export const stripeConfig = {
  publishableKey: 'YOUR_PUBLISHABLE_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  currency: 'AED',
  locale: 'en',
}; 