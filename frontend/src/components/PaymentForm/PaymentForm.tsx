import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';

export function PaymentForm() {
  const { state, dispatch } = useBooking();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Move to confirmation step
    dispatch({ type: 'NEXT_STEP' });
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
        <p className="text-gray-600 mt-2">Amount to pay: AED {(state.price || 0).toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">
            Cardholder Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FF6600] focus:border-[#FF6600]"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FF6600] focus:border-[#FF6600]"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
            <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <div className="mt-1 relative">
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FF6600] focus:border-[#FF6600]"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#FF6600] focus:border-[#FF6600]"
                placeholder="123"
                maxLength={3}
                required
              />
              <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#FF6600] text-white py-3 px-6 rounded-lg font-medium 
              ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#e65c00]'} 
              transition-all duration-300 flex items-center justify-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Pay Now'
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 