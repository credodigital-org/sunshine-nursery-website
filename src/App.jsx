import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import WhyChooseUs from './sections/WhyChooseUs';
import About from './sections/About';
import Moments from './sections/Moments';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <About />
      <Moments/>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}