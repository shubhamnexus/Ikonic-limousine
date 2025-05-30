import React from 'react';
import { Settings, HeadphonesIcon, ShieldCheck, Car } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <div className="lg:w-2/5 animate-fadeIn">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#FF6600]">Us</span>
            </h1>
            <h2 className="text-2xl text-[#FF6600] font-semibold mb-8">
              Driven by Distinction. Defined by Elegance.
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Ikonic Limousine is more than a luxury car service – it's a symbol of sophistication and trust. 
              We are a subsidiary of the globally renowned Sawarthia Group, a leader in supply chain and logistics since 1981. 
              Today, Ikonic stands as the benchmark in Dubai's premium ground transport, catering to discerning travelers, 
              corporate elites, luxury hotels, and tourism partners.
            </p>
            <button className="bg-[#FF6600] text-white px-8 py-3 rounded-full hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg font-medium">
              Know More
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-3/5 transform hover:scale-105 transition-transform duration-500 px-4 lg:px-8">
            <img
              src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/erasebg-transformed_(1)_583eb315-4864-48d8-8b30-2f4c4166f89e.png"
              alt="Luxury Vehicle"
              className="w-full h-auto object-contain animate-float max-w-[800px] mx-auto"
            />
          </div>
        </div>

        {/* Service Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32">
          <div className="text-center transform hover:scale-105 transition-all duration-300 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-[#FF6600]" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Engine Upgrades</h3>
            <p className="text-gray-600">Regular maintenance and performance upgrades</p>
          </div>

          <div className="text-center transform hover:scale-105 transition-all duration-300 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeadphonesIcon className="w-10 h-10 text-[#FF6600]" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Free Support</h3>
            <p className="text-gray-600">24/7 customer support available</p>
          </div>

          <div className="text-center transform hover:scale-105 transition-all duration-300 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10 text-[#FF6600]" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Security Inspections</h3>
            <p className="text-gray-600">Regular security and safety checks</p>
          </div>

          <div className="text-center transform hover:scale-105 transition-all duration-300 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-[#FF6600]" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Fleet Checkup</h3>
            <p className="text-gray-600">Comprehensive vehicle inspections</p>
          </div>
        </div>
      </div>
    </div>
  );
}
