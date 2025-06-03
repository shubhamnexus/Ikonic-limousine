import { Router, Request, Response } from 'express';
import { createPaymentIntent } from '../../api/stripe';

const router = Router();

interface PaymentRequestBody {
  amount: number;
  currency?: string;
}

router.post('/create-payment-intent', async (req: Request, res: Response): Promise<void> => {
  try {
    const { amount, currency = 'AED' } = req.body as PaymentRequestBody;

    if (!amount) {
      res.status(400).json({ error: 'Amount is required' });
      return;
    }

    const paymentIntent = await createPaymentIntent(amount, currency);
    res.json(paymentIntent);
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

export default router; 