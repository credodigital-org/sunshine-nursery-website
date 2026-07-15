import React from 'react';
import whatsapp2 from './assets/HeroImages/whatsapp.png';
import callicon from './assets/ContactUsImages/call.png';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
      <div className="floating-contact-widget">
        
        {/* Call Button */}
        <a href="tel:024499966" className="contact-btn call-btn" aria-label="Call Us">
          <img src={callicon} alt="Call Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/+971566479999?text=Hello!%20I%20would%20like%20to%20inquire%20about%20admissions." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn whatsapp-btn" 
          aria-label="Chat on WhatsApp"
        >
          <img src={whatsapp2} alt="WhatsApp Icon" className="image3"/>
        </a>

      </div>
      <Footer />
    </BrowserRouter>
  );
}