import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { CorporateServices } from './pages/CorporateServices/CorporateServices';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { PaymentPage } from './pages/Payment/PaymentPage';
import { BookingConfirmationPage } from './pages/BookingConfirmation/BookingConfirmationPage';
import { BookingProvider } from './contexts/BookingContext';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services';
import Career from './pages/Career';

function App() {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Add event listener for page refresh
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('load', handleLoad);
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <BookingProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/corporate" element={<CorporateServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BookingProvider>
  );
}

export default App;