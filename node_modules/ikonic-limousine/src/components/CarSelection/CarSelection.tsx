import React, { useState, useEffect } from 'react';
import { Car, Users, Star, Check, Shield, Clock, ArrowRight, Phone, Mail, User, Navigation2, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Vehicle } from '../../types';

interface CarSelectionProps {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  onSelect: (vehicle: Vehicle | null) => void;
}

export function CarSelection({ vehicles, selectedVehicle, onSelect }: CarSelectionProps) {
  const navigate = useNavigate();
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    distance: '25', // Demo distance
    notes: ''
  });

  // Filter vehicles to only show those with valid images
  const vehiclesWithImages = vehicles.filter(vehicle => vehicle.imageUrl && vehicle.imageUrl.trim() !== '');

  // Demo route data
  const demoRoute = {
    pickup: "Dubai Mall",
    dropoff: "Dubai Airport Terminal 3",
    distance: "25",
    estimatedTime: "35 mins"
  };

  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);

  useEffect(() => {
    if (selectedVehicle) {
      const distance = parseFloat(demoRoute.distance);
      if (!isNaN(distance)) {
        setEstimatedPrice(distance * selectedVehicle.pricePerKm);
        setBookingForm(prev => ({
          ...prev,
          distance: demoRoute.distance
        }));
      }
    }
  }, [selectedVehicle]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedVehicle) return;

    // Validate required fields
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone || !bookingForm.distance) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const bookingData = {
        vehicle: selectedVehicle,
        ...bookingForm,
        price: estimatedPrice,
      };

      // Navigate to payment with booking details
      navigate('/payment', { 
        state: { 
          booking: bookingData 
        },
        replace: true
      });
    } catch (error) {
      console.error('Navigation error:', error);
      alert('There was an error processing your booking. Please try again.');
    }
  };

  const isSelected = (vehicle: Vehicle) => {
    return selectedVehicle?.id === vehicle.id;
  };

  return (
    <div className="space-y-8">
      {!selectedVehicle && (
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Vehicle</h2>
          <div className="max-w-3xl mx-auto">
            <div className="h-[400px] overflow-y-auto pr-2 space-y-3">
              {vehiclesWithImages.map((vehicle: Vehicle) => (
                <div
                  key={vehicle.id}
                  onClick={() => onSelect(vehicle)}
                  className={`bg-white rounded-xl border-2 border-[#FF6600]/20 overflow-hidden transition-all duration-300 cursor-pointer transform ${
                    isSelected(vehicle)
                      ? 'ring-2 ring-[#FF6600] scale-[1.02] shadow-lg'
                      : 'hover:shadow-lg hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex h-24">
                    <div className="relative w-24">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600]/10 to-transparent z-10"></div>
                      <div className="absolute inset-0 bg-[#FF6600]/5"></div>
                      <img
                        src={vehicle.imageUrl}
                        alt={vehicle.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/800x600?text=No+Image+Available';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 p-3">
                      <div className="flex justify-between items-start h-full">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{vehicle.name}</h3>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center text-gray-600 bg-gray-50/80 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-100">
                              <Users className="w-3 h-3 mr-1 text-[#FF6600]" />
                              <span className="text-xs font-medium">{vehicle.capacity} seats</span>
                            </div>
                            <div className="flex items-center text-gray-600 bg-gray-50/80 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-100">
                              <Shield className="w-3 h-3 mr-1 text-[#FF6600]" />
                              <span className="text-xs font-medium">{vehicle.baggageCapacity} bags</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          isSelected(vehicle)
                            ? 'bg-[#FF6600] text-white shadow-sm'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}>
                          {isSelected(vehicle) ? 'Selected' : 'Select'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {selectedVehicle && (
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onSelect(null)}
              className="flex items-center text-gray-600 hover:text-[#FF6600] transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180 mr-2" />
              Back to Selection
            </button>
            <div className="flex items-center space-x-2 text-[#FF6600]">
              <Car className="w-5 h-5" />
              <span className="font-medium">{selectedVehicle.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative w-full h-0 pb-[75%] rounded-lg overflow-hidden">
                <img
                  src={selectedVehicle.imageUrl}
                  alt={selectedVehicle.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                <span>{selectedVehicle.capacity} seats</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-[#FF6600]" />
                  <span>Safety</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-[#FF6600]" />
                  <span>24/7</span>
                </div>
              </div>
              <div className="space-y-2">
                {selectedVehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-[#FF6600]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-medium">{selectedVehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Baggage Capacity:</span>
                    <span className="font-medium">{selectedVehicle.baggageCapacity} bags</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6">Booking Details</h3>
            
            {/* Demo Route Display */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex flex-col items-center">
                  <MapPin className="w-5 h-5 text-[#FF6600]" />
                  <div className="w-0.5 h-10 bg-gray-300 mx-auto my-1"></div>
                  <MapPin className="w-5 h-5 text-[#FF6600]" />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Pickup Location</p>
                    <p className="font-medium">{demoRoute.pickup}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dropoff Location</p>
                    <p className="font-medium">{demoRoute.dropoff}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white rounded-lg px-3 py-1 shadow-sm">
                    <p className="text-sm text-gray-500">Distance</p>
                    <p className="font-semibold text-[#FF6600]">{demoRoute.distance} KM</p>
                  </div>
                  <div className="mt-2 bg-white rounded-lg px-3 py-1 shadow-sm">
                    <p className="text-sm text-gray-500">Est. Time</p>
                    <p className="font-semibold text-gray-700">{demoRoute.estimatedTime}</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6600] focus:border-[#FF6600]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6600] focus:border-[#FF6600]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6600] focus:border-[#FF6600]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Distance
                  </label>
                  <div className="relative">
                    <Navigation2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="distance"
                      value={`${demoRoute.distance} KM`}
                      readOnly
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={bookingForm.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6600] focus:border-[#FF6600]"
                    rows={3}
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Route Distance:</span>
                    <span className="font-medium">{demoRoute.distance} KM</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Rate per KM:</span>
                    <span className="font-medium">AED {selectedVehicle.pricePerKm}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Estimated Time:</span>
                    <span className="font-medium">{demoRoute.estimatedTime}</span>
                  </div>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total Estimated Price:</span>
                      <span className="text-xl font-bold text-[#FF6600]">AED {estimatedPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextClick}
                  className="bg-[#FF6600] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e65c00] transition-colors flex items-center space-x-2"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}