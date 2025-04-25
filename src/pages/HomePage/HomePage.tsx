"use client"
import React from 'react';
import { Users, Check } from 'lucide-react';
import { BookingForm } from '../../components/BookingForm';
import { useBooking } from '../../contexts/BookingContext';
import { vehicles } from '../../data/vehicles';

export function HomePage() {
  const { dispatch } = useBooking();

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div 
          className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url("https://nexuseslink2024.s3.us-east-2.amazonaws.com/Screenshot_2025-04-25_at_2.50.47 PM_fdb63a1f-1370-433a-b4e1-98d8b87f0099.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute top-[-200px] right-[-145px] z-10">
              <img 
                src="https://nexuseslink2024.s3.us-east-2.amazonaws.com/wmremove-transformed_2343fdff-3a5b-4192-adda-4756ecdc0c4c.png"
                alt="24/7 Service"
                className="h-[206px] w-auto filter hue-rotate-[20deg] brightness-110 drop-shadow-lg"
              />
            </div>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                Luxury Chauffeur Service in Dubai
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Experience premium transportation with professional chauffeurs. Your journey, our priority.
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>

        {/* Fleet Showcase */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Luxury Fleet</h2>
              <p className="mt-4 text-lg text-gray-600">Choose from our selection of premium vehicles</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vehicles.filter(vehicle => vehicle.imageUrl && vehicle.imageUrl.trim() !== '').map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative w-full h-64 bg-black">
                    <img
                      src={vehicle.imageUrl}
                      alt={vehicle.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Up to {vehicle.capacity} passengers</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 mr-2 text-[#FF6600]" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Starting from</p>
                          <p className="text-lg font-bold text-[#FF6600]">
                            AED {vehicle.pricePerKm}/km
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            dispatch({ type: 'SET_VEHICLE', payload: vehicle });
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}