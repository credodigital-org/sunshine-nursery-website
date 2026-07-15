import React from 'react';
import './Testimonials.css'; // 1. IMPORT YOUR NEW RESPONSIVE CSS STYLESHEET HERE

import arun from '../assets/HeroImages/arun.png';
import sneha from '../assets/HeroImages/sneha.png';
import priya from '../assets/HeroImages/priya.png';

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-white testimonials-section">
      <div className="container">
        
        {/* TITLE SECTION */}
        <div className="text-center mb-4">
          <h2 className="d-inline-flex align-items-center gap-2 testimonials-main-title">
            What Parents Say <span style={{ fontSize: '1.5rem' }}>♡</span>
          </h2>
        </div>

        {/* THREE TESTIMONIAL CARDS */}
        <div className="row g-4 justify-content-center">
          
          {/* CARD 1 - Light Pink Background */}
          <div className="col-12 col-md-4">
            <div 
              className="p-4 h-100 position-relative d-flex flex-column justify-content-between testimonial-base-card" 
              style={{ backgroundColor: '#FFF0F3' }}
            >
              <div>
                <div className="quote-icon-shared quote-pink">&ldquo;&ldquo;</div>
                <p className="text-dark fw-medium mt-1 mb-4 testimonial-body-text">
                  Sunshine Nursery is a wonderful place! My daughter loves going here every day and has learned so much through play.
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-secondary flex-shrink-0 testimonial-avatar-wrapper">
                    <img src={sneha} alt="Sneha R" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <h6 className="mb-0 fw-bold text-dark">- Sneha R</h6>
                </div>
                <div className="testimonial-star-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          {/* CARD 2 - Light Blue Background */}
          <div className="col-12 col-md-4">
            <div 
              className="p-4 h-100 position-relative d-flex flex-column justify-content-between testimonial-base-card" 
              style={{ backgroundColor: '#EEF6FC' }}
            >
              <div>
                <div className="quote-icon-shared quote-blue">&ldquo;&ldquo;</div>
                <p className="text-dark fw-medium mt-1 mb-4 testimonial-body-text">
                  The teachers are so caring and supportive. We are happy to see our son grow confident and independent.
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-secondary flex-shrink-0 testimonial-avatar-wrapper">
                    <img src={arun} alt="Arun Kumar" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <h6 className="mb-0 fw-bold text-dark">- Arun Kumar</h6>
                </div>
                <div className="testimonial-star-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          {/* CARD 3 - Light Yellow Background */}
          <div className="col-12 col-md-4">
            <div 
              className="p-4 h-100 position-relative d-flex flex-column justify-content-between testimonial-base-card" 
              style={{ backgroundColor: '#FFF8E7' }}
            >
              <div>
                <div className="quote-icon-shared quote-yellow">&ldquo;&ldquo;</div>
                <p className="text-dark fw-medium mt-1 mb-4 testimonial-body-text">
                  A safe, clean and friendly environment. Sunshine Nursery truly lives up to its name!
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-secondary flex-shrink-0 testimonial-avatar-wrapper">
                    <img src={priya} alt="Priya S" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <h6 className="mb-0 fw-bold text-dark">- Priya S</h6>
                </div>
                <div className="testimonial-star-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}