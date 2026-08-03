import React from 'react';
import './Testimonials.css';
import sarah from '../assets/HeroImages/Sarah_Alakkad.jpeg';

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-white testimonials-section">
      <div className="container">
        
        {/* TITLE SECTION */}
        <div className="text-center mb-4">
          <h2 className="d-inline-flex align-items-center gap-2 testimonials-main-title fw-bold">
            What Parents Say <span style={{ fontSize: '1.5rem', color: '#E84E88' }}>♡</span>
          </h2>
        </div>

        {/* SINGLE FEATURED TESTIMONIAL CARD */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div 
              className="p-4 p-md-5 position-relative d-flex flex-column justify-content-between testimonial-base-card shadow-sm" 
              style={{ 
                backgroundColor: '#FFF0F3',
                border: '1px solid #FFD6E0'
              }}
            >
              <div>
                <div className="quote-icon-shared quote-pink mb-2">&ldquo;&ldquo;</div>
                <p className="text-dark fw-medium mt-1 mb-4 testimonial-body-text">
                  Sunshine has truly been a second home for Khalid and Hashim. I have always trusted the team wholeheartedly and knew they were in the best hands. Thank you for the love, care, patience, and support you’ve given them. We will always be grateful for the beautiful memories and the positive impact you’ve had on their lives. ❤️
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top border-pink-subtle gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="flex-shrink-0 testimonial-avatar-wrapper">
                    <img 
                      src={sarah} 
                      alt="Sarah Alakkad" 
                      className="w-100 h-100 testimonial-avatar-img" 
                    />
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold text-dark">Sarah Alakkad</h5>
                    <span className="text-muted small">Parent of Khalid &amp; Hashim</span>
                  </div>
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