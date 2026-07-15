import React from 'react';
import './Footer.css'; 

import footerLogo from '../assets/HeroImages/footerlogo.png'; 
import facebook from '../assets/HeroImages/facebook.png';
import insta from '../assets/HeroImages/insta.png';
import { useNavigate } from 'react-router-dom';

export default function FooterSection() {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-white py-4 main-footer-wrapper">
      <div className="container-fluid px-4">
        <div className="row g-4 text-center text-md-start justify-content-between">
          
          {/* COLUMN 1: LOGO, TAGLINE & SOCIALS */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center text-center align-items-md-start text-md-start">
            {/* Logo Container */}
            <div className="mb-3 footer-logo-box">
              <img 
                src={footerLogo} 
                alt="Sunshine Nursery Logo" 
                className="w-100 h-auto" 
                style={{ objectFit: 'contain' }}
              />
            </div>
            {/* Tagline */}
            <p className="text-secondary fw-medium mb-3 footer-tagline">
              Where little minds learn, play, grow and shine every day.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-3 justify-content-center fs-5">
              
              <span className="social-icon-span">
                <a href="https://www.facebook.com/share/1E8VDTNZeF/" target="_blank" 
                rel="noopener noreferrer" aria-label="Visit Sunshine Nursery on Instagram">
                  <img src={facebook} alt="facebook" className="w-100 h-100" style={{ objectFit: 'contain' }} />
                </a>
              </span> 
              <span className="social-icon-span">
                <a href="https://www.instagram.com/sunshinenurseryad?igsh=MTJyZWZtNHlsdmM5ZQ==" target="_blank" 
                rel="noopener noreferrer" aria-label="Visit Sunshine Nursery on Instagram">
                  <img src={insta} alt="instagram" className="w-100 h-100" style={{ objectFit: 'contain' }} />
                </a>
              </span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="col-12 col-md-2 dashed-right-divider">
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 fw-medium footer-links-list">
              <li onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>Home</li>
              <li onClick={() => { navigate('/about'); window.scrollTo(0, 0); }}>About Us</li>
              <li onClick={() => { navigate('/programs'); window.scrollTo(0, 0); }}>Programs</li>
              <li onClick={() => { navigate('/gallery'); window.scrollTo(0, 0); }}>Gallery</li>
              <li onClick={() => { navigate('/contactus'); window.scrollTo(0, 0); }}>Contact Us</li>
            </ul>
          </div>

          {/* COLUMN 3: OUR PROGRAMS */}
          <div className="col-12 col-md-2 dashed-right-divider">
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Our Programs</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 fw-medium footer-links-list">
              <li>Play Group</li>
              <li>Nursery</li>
              <li>KG Classes</li>
              <li>Art & Craft</li>
              <li>Music & Dance</li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Contact Us</h5>
            <div className="d-flex flex-column gap-3 fw-medium text-dark align-items-center align-items-md-start" style={{ fontSize: '0.95rem' }}>
              
              {/* Phone Row */}
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: '#E84E88', fontSize: '1.1rem' }}>📞</span>
                <a href="tel:024499966" style={{ textDecoration: 'none', color: 'inherit' }}>024499966</a>
              </div>

              {/* Email Row */}
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: '#E84E88', fontSize: '1.1rem' }}>✉️</span>
                <a href="mailto:info@sunshinenursery.com" style={{ textDecoration: 'none', color: 'inherit' }}>info@sunshinenursery.com</a>
              </div>

              {/* Address Row */}
              <div className="d-flex align-items-start gap-2 text-center text-md-start">
                <span style={{ color: '#E84E88', fontSize: '1.1rem', marginTop: '2px' }}>📍</span>
                <span>
                  22 Al Tayseer St - Al Manhal - W13-02<br />
                  Abu Dhabi
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ==========================================================================
           🆕 ATTRIBUTION BOTTOM BAR (Matches your image layout)
           ========================================================================== */}
        <div className="mt-5 pt-3 text-center footer-credits-border">
  <p className="mb-1 text-muted fw-normal" style={{ fontSize: '0.9rem' }}>
    Designed & Developed By
  </p>
  
  <a 
    href="https://wa.me/971509132555" 
    target="_blank" 
    rel="noopener noreferrer"
    className="mb-0 fw-bold text-dark d-inline-flex align-items-center" 
    style={{ fontSize: '1.1rem', textDecoration: 'none', color: 'inherit' }}
  >
    Credo Digital Designs LLC SPC
  </a>
</div>

      </div>
    </footer> 
  );
}