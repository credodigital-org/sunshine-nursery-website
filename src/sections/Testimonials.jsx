import React from 'react';
import arun from '../assets/arun.png';
import sneha from '../assets/sneha.png';
import priya from '../assets/priya.png';

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-white" style={{ fontFamily: 'sans-serif' }}>
      <div className="container">
        
        {/* 1. TITLE SECTION */}
        <div className="text-center mb-4">
          <h2 style={{ color: '#E84E88', fontWeight: '700' }} className="d-inline-flex align-items-center gap-2">
            What Parents Say <span style={{ fontSize: '1.5rem' }}>♡</span>
          </h2>
        </div>

        {/* 2. THREE TESTIMONIAL CARDS */}
        <div className="row g-4 justify-content-center">
          
          {/* CARD 1 - Light Pink Background */}
          <div className="col-12 col-md-4">
            <div 
              className="p-4 h-100 position-relative d-flex flex-column justify-content-between" 
              style={{ backgroundColor: '#FFF0F3', borderRadius: '30px' }}
            >
              <div>
                {/* Quote Icon */}
                <div style={{ color: '#FF4D8D', fontSize: '2.5rem', lineHeight: '1', fontFamily: 'serif', fontWeight: 'bold' }}>
                  &ldquo;&ldquo;
                </div>
                {/* Review Text */}
                <p className="text-dark fw-medium mt-1 mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Sunshine Nursery is a wonderful place! My daughter loves going here every day and has learned so much through play.
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }} className="bg-secondary flex-shrink-0">
                    <img src={sneha} alt="Sneha R" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <h6 className="mb-0 fw-bold text-dark">- Sneha R</h6>
                </div>
                {/* Yellow Stars */}
                <div style={{ color: '#FFD700', fontSize: '1.2rem' }}>⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          {/* CARD 2 - Light Blue Background */}
          <div className="col-12 col-md-4">
            <div 
              className="p-4 h-100 position-relative d-flex flex-column justify-content-between" 
              style={{ backgroundColor: '#EEF6FC', borderRadius: '30px' }}
            >
              <div>
                {/* Quote Icon */}
                <div style={{ color: '#3182CE', fontSize: '2.5rem', lineHeight: '1', fontFamily: 'serif', fontWeight: 'bold' }}>
                  &ldquo;&ldquo;
                </div>
                {/* Review Text */}
                <p className="text-dark fw-medium mt-1 mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  The teachers are so caring and supportive. We are happy to see our son grow confident and independent.
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }} className="bg-secondary flex-shrink-0">
                    <img src={arun} alt="Arun Kumar" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <h6 className="mb-0 fw-bold text-dark">- Arun Kumar</h6>
                </div>
                {/* Yellow Stars */}
                <div style={{ color: '#FFD700', fontSize: '1.2rem' }}>⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          {/* CARD 3 - Light Yellow Background */}
          <div className="col-12 col-md-4">
            <div 
              className="p-4 h-100 position-relative d-flex flex-column justify-content-between" 
              style={{ backgroundColor: '#FFF8E7', borderRadius: '30px' }}
            >
              <div>
                {/* Quote Icon */}
                <div style={{ color: '#ECC94B', fontSize: '2.5rem', lineHeight: '1', fontFamily: 'serif', fontWeight: 'bold' }}>
                  &ldquo;&ldquo;
                </div>
                {/* Review Text */}
                <p className="text-dark fw-medium mt-1 mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  A safe, clean and friendly environment. Sunshine Nursery truly lives up to its name!
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }} className="bg-secondary flex-shrink-0">
                    <img src={priya} alt="Priya S" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <h6 className="mb-0 fw-bold text-dark">- Priya S</h6>
                </div>
                {/* Yellow Stars */}
                <div style={{ color: '#FFD700', fontSize: '1.2rem' }}>⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}