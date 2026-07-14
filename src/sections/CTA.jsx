import React from 'react';
import './CTA.css'; // 1. IMPORT YOUR NEW RESPONSIVE STYLESHEET HERE

import bag from '../assets/HeroImages/bag.png';
import arrow from '../assets/HeroImages/arrow.png';

export default function CTASection() {
  return (
    <section className="py-4 bg-white cta-section">
      <div className="container-fluid">
        
        {/* 2. Moved explicit inline backgrounds and border radiuses out to class properties */}
        <div className="p-4 px-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 text-white position-relative cta-banner-wrapper">
          
          {/* Left Side Content (Icon + Text) */}
          <div className="d-flex flex-column flex-sm-row align-items-center gap-4 text-center text-sm-start">
            
            {/* 3. Assigned className="cta-icon-box" */}
            <div className="flex-shrink-0 cta-icon-box">
              <img 
                src={bag}
                alt="School Bag" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>

            <div>
              {/* 4. Assigned className="cta-title" */}
              <h2 className="fw-bold mb-1 cta-title">
                Ready to Brighten Your Child's Future?
              </h2>
              {/* 5. Assigned className="cta-text" */}
              <p className="mb-0 fw-medium opacity-90 cta-text">
                Join Sunshine Nursery today!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}