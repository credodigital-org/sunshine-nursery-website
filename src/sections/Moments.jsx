import React, { useState, useEffect } from 'react';
import './Moments.css';
import moment1 from '../assets/HeroImages/moment1.png';
import moment2 from '../assets/HeroImages/moment2.png';
import moment3 from '../assets/HeroImages/moment3.png';
import moment4 from '../assets/HeroImages/moment4.png';
import moment5 from '../assets/HeroImages/moment5.png';

export default function HappyMoments() {
  const images = [moment1, moment2, moment3, moment4, moment5];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlots, setVisibleSlots] = useState(4); // Default to desktop view count

  // Dynamically calculate how many items fit on the screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setVisibleSlots(1); // 1 Image on Mobile Phones
      } else if (window.innerWidth < 992) {
        setVisibleSlots(2); // 2 Images on Tablets
      } else {
        setVisibleSlots(4); // 4 Images on Desktop
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Total shiftable steps safely prevents scrolling into empty voids
  const maxIndex = images.length - visibleSlots;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-5 bg-white moments-section">
      <div className="container position-relative">
        
        <div className="text-center mb-4">
          <h2 className="moments-title">Our Happy Moments ♡</h2>
        </div>

        {/* CAROUSEL TRACK SHIELD */}
        <div className="moments-carousel-container">
          
          <button className="moments-nav-btn nav-left" onClick={handlePrev} aria-label="Previous">
            &#10094;
          </button>

          <button className="moments-nav-btn nav-right" onClick={handleNext} aria-label="Next">
            &#10095;
          </button>

          {/* DYNAMIC TRACK SLIDE LAYER */}
          <div className="moments-viewport">
            <div 
              className="moments-track" 
              style={{ transform: `translateX(-${activeIndex * (100 / visibleSlots)}%)` }}
            >
              {images.map((imgSrc, index) => {
                // Determines if an item is currently showing inside the view box
                const isVisible = index >= activeIndex && index < activeIndex + visibleSlots;

                return (
                  <div 
                    key={index} 
                    className={`moment-card-wrapper ${isVisible ? 'in-view' : 'out-view'}`}
                    style={{ width: `${100 / visibleSlots}%` }}
                  >
                    <div className="moment-card">
                      <img src={imgSrc} alt={`Moment ${index + 1}`} className="moment-image" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DOT INDICATORS (Responsive Count Matching Shifts) */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}