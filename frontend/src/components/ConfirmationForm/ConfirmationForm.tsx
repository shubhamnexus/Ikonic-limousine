import React, { useState, useEffect } from 'react';
import { CheckCircle, MapPin, Calendar, Car, User } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useNavigate } from 'react-router-dom';

export function ConfirmationForm() {
  const { state } = useBooking();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading confirmation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDone = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-[#FF6600]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[#FF6600] animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Your Booking</h2>
          <p className="text-gray-600">Please wait while we confirm your reservation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">Your luxury ride has been successfully booked.</p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Details</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-[#FF6600] mt-1 mr-3" />
              <div>
                <p className="font-medium">Pickup Location</p>
                <p className="text-gray-600">{state.pickupLocation?.address || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-[#FF6600] mt-1 mr-3" />
              <div>
                <p className="font-medium">Drop-off Location</p>
                <p className="text-gray-600">{state.dropoffLocation?.address || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-[#FF6600] mt-1 mr-3" />
              <div>
                <p className="font-medium">Date & Time</p>
                <p className="text-gray-600">{state.date || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Car className="w-5 h-5 text-[#FF6600] mt-1 mr-3" />
              <div>
                <p className="font-medium">Vehicle</p>
                <p className="text-gray-600">{state.selectedVehicle?.name || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-start">
              <User className="w-5 h-5 text-[#FF6600] mt-1 mr-3" />
              <div>
                <p className="font-medium">Total Amount</p>
                <p className="text-gray-600">AED {(state.price || 0).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleDone}
        className="w-full bg-[#FF6600] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#e65c00] transition-all duration-300"
      >
        Done
      </button>
    </div>
  );
} 