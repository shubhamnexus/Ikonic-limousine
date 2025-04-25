import React, { useState, useEffect } from 'react';
import { CreditCard, Lock, Car, MapPin, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import type { BookingDetails } from '../../types';
import { stripePromise } from '../../config/stripe';

interface CardOption {
  id: string;
  type: string;
  name: string;
  logo: string;
  description?: string;
}

const StripeCheckoutForm = ({ booking, onSuccess }: { booking: BookingDetails; onSuccess: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Create a payment intent on your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: booking.price * 100, // Convert to cents
          currency: 'AED',
        }),
      });

      const { clientSecret } = await response.json();

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'An error occurred during payment.');
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full bg-[#FF6600] text-white py-2 px-6 rounded-lg font-medium 
          ${isProcessing || !stripe ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#e65c00]'} 
          transition-colors`}
      >
        {isProcessing ? 'Processing...' : `Pay AED ${booking.price.toFixed(2)}`}
      </button>
    </form>
  );
};

export function PaymentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;

  // Redirect if no booking data
  if (!booking) {
    navigate('/car-selection');
    return null;
  }

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardOptions: CardOption[] = [
    {
      id: 'pay_to_drive',
      type: 'Pay to Drive',
      name: 'Pay to Drive',
      logo: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png',
      description: 'Pay cash to driver when you start your journey'
    },
    {
      id: 'card',
      type: 'Card',
      name: 'Credit/Debit Card',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
    }
  ];

  const handlePaymentSuccess = () => {
    navigate('/booking-confirmation', { 
      state: { 
        booking,
        paymentMethod: 'card'
      },
      replace: true 
    });
  };

  const handlePayToDriverSubmit = () => {
    navigate('/booking-confirmation', { 
      state: { 
        booking,
        paymentMethod: 'pay_to_drive'
      },
      replace: true 
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Payment Details</h2>
        <Lock className="text-gray-400" />
      </div>

      {/* Booking Summary */}
      {!selectedCard && (
        <>
          <div className="mb-6 bg-gray-50 p-3 rounded-lg">
            <h3 className="text-base font-semibold mb-2">Booking Summary</h3>
            <div className="space-y-1">
              <div className="flex items-center text-gray-600 text-sm">
                <Car className="w-4 h-4 mr-2 text-[#FF6600]" />
                <span>{booking.vehicle.name}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-[#FF6600]" />
                <div className="flex-1">
                  <p>From: {booking.pickupLocation}</p>
                  <p>To: {booking.dropoffLocation}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar className="w-4 h-4 mr-2 text-[#FF6600]" />
                <span>{booking.date} at {booking.time}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount to Pay</span>
              <span className="text-xl font-bold text-[#FF6600]">
                AED {booking.price.toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}

      {/* Show selected payment method info */}
      {selectedCard && (
        <div className="mb-4 flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <img 
              src={cardOptions.find(card => card.id === selectedCard)?.logo} 
              alt={cardOptions.find(card => card.id === selectedCard)?.name} 
              className="h-8 w-auto mr-3"
            />
            <div>
              <p className="font-medium">{cardOptions.find(card => card.id === selectedCard)?.name}</p>
              <p className="text-sm text-gray-600">Amount: AED {booking.price.toFixed(2)}</p>
              {cardOptions.find(card => card.id === selectedCard)?.description && (
                <p className="text-sm text-gray-500">
                  {cardOptions.find(card => card.id === selectedCard)?.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {!selectedCard ? (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Select Payment Method</h3>
          <div className="grid gap-4">
            {cardOptions.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className="flex items-center justify-between p-4 border rounded-lg hover:border-[#FF6600] transition-colors"
              >
                <div className="flex items-center flex-1">
                  <img src={card.logo} alt={card.name} className="h-8 w-auto mr-3" />
                  <div>
                    <span className="font-medium block">{card.name}</span>
                    {card.description && (
                      <span className="text-sm text-gray-500">{card.description}</span>
                    )}
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center ml-4">
                  {selectedCard === card.id && (
                    <div className="w-3 h-3 rounded-full bg-[#FF6600]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : selectedCard === 'pay_to_drive' ? (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              You have selected to pay cash to the driver. Click confirm to proceed with your booking.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handlePayToDriverSubmit}
              className="flex-1 bg-[#FF6600] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#e65c00] transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      ) : (
        <Elements stripe={stripePromise}>
          <div className="space-y-4">
            <StripeCheckoutForm booking={booking} onSuccess={handlePaymentSuccess} />
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="w-full bg-gray-100 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back
            </button>
          </div>
        </Elements>
      )}

      <div className="mt-4 text-center text-xs text-gray-500">
        <Lock className="inline-block w-3 h-3 mr-1" />
        Your payment information is secure
      </div>
    </div>
  );
}