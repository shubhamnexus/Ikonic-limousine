import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08247.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6600] to-orange-500">
              Contact Us
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto font-light">
              We're Here to Drive You, Always.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Left Column - Contact Details */}
            <motion.div 
              className="flex flex-col space-y-8 h-full"
              {...fadeInUp}
            >
              {/* Phone Card - Most important, put first */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-grow">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6600]/20 p-4 rounded-full">
                    <FaPhone className="text-2xl text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Phone</h3>
                    <p className="text-[#FF6600] text-xl font-medium">800 IKONIC</p>
                  </div>
                </div>
              </div>

              {/* Email Card - Second most important */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-grow">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6600]/20 p-4 rounded-full">
                    <FaEnvelope className="text-2xl text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
                    <div className="space-y-4">
                      <div className="group">
                        <p className="text-white/80">
                          <span className="font-medium text-white">Reservations:</span><br />
                          <a 
                            href="mailto:reservations@ikoniclimousine.com" 
                            className="text-[#FF6600] hover:text-orange-400 transition-colors duration-300 inline-flex items-center group-hover:underline text-lg"
                          >
                            reservations@ikoniclimousine.com
                          </a>
                        </p>
                      </div>
                      <div className="group">
                        <p className="text-white/80">
                          <span className="font-medium text-white">General Inquiries:</span><br />
                          <a 
                            href="mailto:info@ikoniclimousine.com" 
                            className="text-[#FF6600] hover:text-orange-400 transition-colors duration-300 inline-flex items-center group-hover:underline text-lg"
                          >
                            info@ikoniclimousine.com
                          </a>
                        </p>
                      </div>
                      <div className="group">
                        <p className="text-white/80">
                          <span className="font-medium text-white">Sales & Partnerships:</span><br />
                          <a 
                            href="mailto:sales@ikoniclimousine.com" 
                            className="text-[#FF6600] hover:text-orange-400 transition-colors duration-300 inline-flex items-center group-hover:underline text-lg"
                          >
                            sales@ikoniclimousine.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-grow">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6600]/20 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-2xl text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Address</h3>
                    <p className="text-white/80 leading-relaxed text-lg">
                      Office No. 608, Level 6, Jumeirah Bay X2<br />
                      Cluster X, Jumeirah Lakes Towers<br />
                      Dubai, U.A.E
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media - Last but still important */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-grow">
                <h3 className="text-2xl font-semibold text-white mb-6">Follow Us</h3>
                <div className="flex justify-center space-x-10">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <div className="bg-gradient-to-br from-[#FF6600] to-orange-500 p-5 rounded-full">
                      <FaInstagram className="text-4xl text-white" />
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <div className="bg-[#FF6600] p-5 rounded-full">
                      <FaLinkedin className="text-4xl text-white" />
                    </div>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <div className="bg-[#FF6600] p-5 rounded-full">
                      <FaFacebook className="text-4xl text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form and Map */}
            <motion.div
              className="flex flex-col space-y-8 h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 flex-grow">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:bg-white/20 transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF6600] to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-[#e65c00] hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map Container */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 flex-grow">
                <h2 className="text-2xl font-bold text-white mb-6">Our Location</h2>
                <div className="h-[300px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7004902926353!2d55.1413!3d25.0767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9c9c9c9c9c%3A0x3e5f6b9c9c9c9c9c!2sJumeirah%20Lakes%20Towers!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 