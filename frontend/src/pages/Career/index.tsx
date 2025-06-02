import React from 'react';

// Placeholder images for the carousel
const carouselImages = [
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08238.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08326.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08332%20(1).jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08085.jpg',
];

const Career: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        {/* Heading and Subheading */}
        <div className="w-full max-w-4xl text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Career at Ikonic Limousine</h1>
          <h2 className="text-2xl font-medium text-gray-800 mb-8">Luxury in Motion, Excellence in Service</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Ikonic Limousine, every journey begins with excellence. Our team is the heart of our service, and our commitment to luxury, professionalism, and seamless experiences defines who we are.<br /><br />
            We believe in cultivating talent that shares our passion for delivering exceptional service. With our people, our partners, and our pursuit of perfection guiding us, we continue to redefine luxury ground transportation in the UAE.
          </p>
        </div>
        {/* Carousel */}
        <div className="w-full mb-12 flex justify-center">
          <div className="relative w-[1300px] h-[350px] overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out gap-x-12"
              style={{ transform: `translateX(-${current * (400 + 48)}px)` }} // 400px image + 48px gap
            >
              {carouselImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Career Slide ${idx + 1}`}
                  className="w-[400px] h-[350px] object-cover object-center bg-white rounded-xl shadow"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Job Openings Section */}
        <div className="w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start">
            {/* Job Card */}
            <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-between min-h-[350px]">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Chauffeur</h3>
                <div className="space-y-4">
                  <div><span className="font-semibold">Industry:</span> Luxury Ground Transportation</div>
                  <div><span className="font-semibold">Department:</span> Operations</div>
                  <div><span className="font-semibold">Location:</span> Dubai, UAE</div>
                  <div><span className="font-semibold">Experience:</span> Minimum 3–5 Years of Chauffeur Driving Experience in Premium or Hospitality Sector</div>
                  <div><span className="font-semibold">License Requirement:</span> UAE Light Vehicle Driving License (Valid)</div>
                </div>
              </div>
              <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded font-semibold hover:bg-green-800 transition w-[150px]">Apply Now</button>
            </div>
          </div>
        </div>
        {/* Why Join Us Section */}
        <div className="w-full mt-12">
          <div className="bg-gray-100 rounded-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="font-bold text-lg text-gray-800 mb-1">Prestigious Brand:</div>
                  <div className="text-gray-700">Be part of a premium limousine service known for elegance, professionalism, and excellence in every journey.</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-800 mb-1">Meaningful Impact:</div>
                  <div className="text-gray-700">Every ride you deliver shapes the guest experience. At Ikonic Limousine, your role directly contributes to the comfort, safety, and satisfaction of our valued clients.</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="font-bold text-lg text-gray-800 mb-1">Supportive Environment:</div>
                  <div className="text-gray-700">Work in a respectful and professional atmosphere where you are equipped with the tools, training, and support to excel every day.</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-800 mb-1">Authentic You:</div>
                  <div className="text-gray-700">At Ikonic Limousine, we value your individuality. Bring your unique strengths and service approach. We believe authenticity enhances luxury.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section - Outside main container for full width */}
      <div 
        className="bg-cover bg-center bg-no-repeat py-20 px-4 relative min-h-[400px] w-full"
        style={{
          backgroundImage: 'url(https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08200.jpg)'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Join Ikonic Limousine and be part of a team where dedication, elegance, and growth come together. Where your career moves forward with purpose and prestige.
          </p>
          <button className="bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition">
            Join our team
          </button>
        </div>
      </div>
    </>
  );
};

export default Career; 