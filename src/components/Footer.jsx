import React from 'react';
import footerLogo from '../assets/footerlogo.png'; 
import whatsapp from '../assets/whatsapp.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';


export default function FooterSection() {
  return (
    <footer className=" bg-white" style={{ fontFamily: 'sans-serif' }}>
      <div className="container-fluid px-1">
        <div className="row g-4 text-center text-md-start justify-content-between">
          
          {/* COLUMN 1: LOGO, TAGLINE & SOCIALS */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center text-center">
            {/* Logo Container */}
            <div style={{ maxWidth: '340px' }} className="mb-3">
              <img 
                src={footerLogo} 
                alt="Sunshine Nursery Logo" 
                className="w-100 h-auto" 
                style={{ objectFit: 'contain' }}
              />
            </div>
            {/* Tagline */}
            <p className="text-secondary fw-medium px-2 mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#4A5568' }}>
              Where little minds learn, play, grow and shine every day.
            </p>
            {/* Social Icons (Colored to match image_f99be0.png) */}
            <div className="d-flex gap-2 justify-content-center fs-5">
  <span style={{ display: 'inline-block', width: '24px', height: '24px' }}>
    <img src={whatsapp} alt="whatsapp" className="w-100 h-100" style={{ objectFit: 'contain' }} />
  </span> 
  <span style={{ display: 'inline-block', width: '24px', height: '24px' }}>
    <img src={facebook} alt="facebook" className="w-100 h-100" style={{ objectFit: 'contain' }} />
  </span> 
  <span style={{ display: 'inline-block', width: '24px', height: '24px' }}>
    <img src={insta} alt="instagram" className="w-100 h-100" style={{ objectFit: 'contain' }} />
  </span> 
</div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div 
            className="col-12 col-md-2"
            style={{
              borderRight: window.innerWidth >= 768 ? '1.5px dashed #A0AEC0' : 'none',
              paddingRight: '15px'
            }}
          >
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 fw-medium" style={{ color: '#4A5568', fontSize: '0.95rem' }}>
              <li style={{ cursor: 'pointer' }}>Home</li>
              <li style={{ cursor: 'pointer' }}>About Us</li>
              <li style={{ cursor: 'pointer' }}>Programs</li>
              <li style={{ cursor: 'pointer' }}>Gallery</li>
              <li style={{ cursor: 'pointer' }}>Contact Us</li>
            </ul>
          </div>

          {/* COLUMN 3: OUR PROGRAMS */}
          <div 
            className="col-12 col-md-2"
            style={{
              borderRight: window.innerWidth >= 768 ? '1.5px dashed #A0AEC0' : 'none',
              paddingRight: '15px'
            }}
          >
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Our Programs</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 fw-medium" style={{ color: '#4A5568', fontSize: '0.95rem' }}>
              <li style={{ cursor: 'pointer' }}>Play Group</li>
              <li style={{ cursor: 'pointer' }}>Nursery</li>
              <li style={{ cursor: 'pointer' }}>KG Classes</li>
              <li style={{ cursor: 'pointer' }}>Art & Craft</li>
              <li style={{ cursor: 'pointer' }}>Music & Dance</li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Contact Us</h5>
            <div className="d-flex flex-column gap-3 fw-medium text-dark align-items-center align-items-md-start" style={{ fontSize: '0.95rem' }}>
              
              {/* Phone Row */}
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: '#E84E88', fontSize: '1.1rem' }}>📞</span>
                <span>+91 98765 43210</span>
              </div>

              {/* Email Row */}
              <div className="d-flex align-items-center gap-2">
                <span style={{ color: '#E84E88', fontSize: '1.1rem' }}>✉️</span>
                <span>info@sunshinenursery.com</span>
              </div>

              {/* Address Row */}
              <div className="d-flex align-items-start gap-2 text-center text-md-start">
                <span style={{ color: '#E84E88', fontSize: '1.1rem', marginTop: '2px' }}>📍</span>
                <span>
                  123 Sunshine Street,<br />
                  Sunshine City, India 600001
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}