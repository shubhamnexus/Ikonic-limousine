import React from 'react';
import { UserGroupIcon, ChartBarIcon, GlobeAltIcon, BoltIcon } from '@heroicons/react/24/outline';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <div className="lg:w-2/5 animate-fadeIn">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#FF6600]">Us</span>
            </h1>
            <h2 className="text-2xl text-[#FF6600] font-semibold mb-4">
              Driven by Distinction. Defined by Elegance.
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              <span className="font-bold">Ikonic Limousine</span> is a premier luxury ground transportation company dedicated to <span className="font-bold">providing exceptional travel experiences</span>. We are committed to exceeding customer expectations by delivering the highest standards in chauffeured service. Our chauffeurs are carefully selected and rigorously trained to <span className="font-bold">uphold unmatched professionalism and excellence</span>.
            </p>
            
            <div className="bg-[#FF6600]/10 border-l-4 border-[#FF6600] p-4 rounded-lg mb-8">
              <p className="italic text-[#FF6600] text-lg font-medium">"We're not just moving people — we're elevating lifestyles."</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-3/5 flex items-end justify-end px-4 lg:px-8">
            <img
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/bmw-7-series-black-sapphire_1-removebg-preview.png"
              alt="BMW 7 Series"
              className="w-full max-w-[900px] h-auto object-contain drop-shadow-2xl mr-[-40px]"
              style={{ marginRight: '-40px' }}
            />
          </div>
        </div>

        {/* Key Facts Section */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="group text-center p-8 bg-gradient-to-br from-white via-gray-50 to-[#fff7f0] border border-[#FF6600]/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#FF6600]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="w-12 h-12 text-[#FF6600] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">90+ Professional Chauffeurs</h4>
              <p className="text-gray-500 text-base">Expert, courteous, and highly trained drivers</p>
            </div>
            {/* Card 2 */}
            <div className="group text-center p-8 bg-gradient-to-br from-white via-gray-50 to-[#f0f7ff] border border-[#FF6600]/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#FF6600]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="w-12 h-12 text-[#FF6600] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">30% Fleet Expansion Target</h4>
              <p className="text-gray-500 text-base">2025–2026 growth plan</p>
            </div>
            {/* Card 3 */}
            <div className="group text-center p-8 bg-gradient-to-br from-white via-gray-50 to-[#f0fff7] border border-[#FF6600]/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#FF6600]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <GlobeAltIcon className="w-12 h-12 text-[#FF6600] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Service Coverage</h4>
              <p className="text-gray-500 text-base">Dubai | Abu Dhabi | Sharjah | GCC Expansion Planned</p>
            </div>
            {/* Card 4 */}
            <div className="group text-center p-8 bg-gradient-to-br from-white via-gray-50 to-[#f7f0ff] border border-[#FF6600]/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#FF6600]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <BoltIcon className="w-12 h-12 text-[#FF6600] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Hybrid & Electric Fleets</h4>
              <p className="text-gray-500 text-base">For sustainable travel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
