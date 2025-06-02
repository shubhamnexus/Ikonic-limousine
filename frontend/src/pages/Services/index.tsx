import React from 'react';
import { motion } from 'framer-motion';
import { 
  PaperAirplaneIcon, 
  ClockIcon, 
  TruckIcon, 
  MapIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Airport Transfers',
      description: 'Seamless pickups and drop-offs with flight tracking and meet & greet service.',
      icon: <PaperAirplaneIcon className="w-12 h-12" />
    },
    {
      title: 'Half-Day & Full-Day Chauffeur Service',
      description: 'Flexible packages for corporate meetings, shopping trips, or special events.',
      icon: <ClockIcon className="w-12 h-12" />
    },
    {
      title: 'Short-Term & Long-Term Car Lease with Driver',
      description: 'Perfect for executives, tourists, and residents needing reliable daily transport.',
      icon: <TruckIcon className="w-12 h-12" />
    },
    {
      title: 'Intercity & Long-Distance Transfers',
      description: 'Comfortable journeys across the Emirates with professional chauffeurs at the wheel.',
      icon: <MapIcon className="w-12 h-12" />
    },
    {
      title: 'Corporate & VIP Concierge',
      description: 'Custom travel arrangements for business leaders, VVIPs, and special occasions.',
      icon: <UserGroupIcon className="w-12 h-12" />
    }
  ];

  const fleet = [
    { name: 'Mercedes-Benz S-Class', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08338%201.png' },
    { name: 'Mercedes-Benz V-Class', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08161%201.png' },
    { name: 'BMW 7 Series', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08137%201%20(1).png' },
    { name: 'Tesla Model Y', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08258%201.png' },
    { name: 'BMW 5 Series', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08106%201.png' },
    { name: 'Lexus ES300h Premium', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08338%201.png' },
    { name: 'GMC Yukon Denali', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08198%20(1)%201.png' },
    { name: 'Toyota Highlander', image: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Ikonic%20Limousine%20.png' }
  ];

  const amenities = [
    'Complimentary Wi-Fi & Mobile Chargers',
    'Water Bottles & Sanitizer Wipes',
    'Baby Seats (6 months – 8 years)',
    'Fully Insured & GPS-enabled Systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center text-white py-32" style={{ backgroundImage: 'url("https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08233.png")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="text-[#FF6600] font-semibold tracking-wider uppercase text-sm">Premium Services</span>
              <div className="h-1 w-20 bg-[#FF6600] mx-auto mt-2"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Experience luxury transportation tailored to your needs
            </p>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              Whether it's a quick airport pickup or a full-day executive schedule, Ikonic Limousine has a service designed to exceed your expectations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="text-[#FF6600] font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <div className="h-1 w-20 bg-[#FF6600] mx-auto mt-2"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Transportation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of luxury transportation solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-gradient-to-br from-[#FF6600]/10 to-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#FF6600] transform group-hover:rotate-12 transition-transform duration-300">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-[#FF6600] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#FF6600] to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fleet Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="text-[#FF6600] font-semibold tracking-wider uppercase text-sm">Our Fleet</span>
              <div className="h-1 w-20 bg-[#FF6600] mx-auto mt-2"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury and comfort with our carefully curated selection of premium vehicles
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleet.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#FF6600] to-[#FF8533] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-[#FF6600] text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-[#FF6600] transition-colors duration-300 mt-4">{vehicle.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="text-[#FF6600] font-semibold tracking-wider uppercase text-sm">Added Value</span>
            <div className="h-1 w-20 bg-[#FF6600] mx-auto mt-2"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every journey comes with our signature amenities for your comfort and convenience
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6 flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#FF6600]/10 to-orange-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#FF6600] text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-[#FF6600] transition-colors duration-300">{amenity}</span>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#FF6600] to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42IDAtMTIgNS40LTEyIDEyczUuNCAxMiAxMiAxMiAxMi01LjQgMTItMTItNS40LTEyLTEyLTEyIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="text-white font-semibold tracking-wider uppercase text-sm">Get Started</span>
              <div className="h-1 w-20 bg-white mx-auto mt-2"></div>
            </div>
            <p className="text-3xl md:text-4xl font-light italic mb-8">
              "Let us handle the road, so you can focus on the experience."
            </p>
            <button className="bg-white text-[#FF6600] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book Your Ride
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services; 