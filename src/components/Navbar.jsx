import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Removed the solid white background and bottom border to let your background sky graphics shine through */
    <nav style={{ background: 'transparent', padding: '1.75rem 2rem', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
      
      <style>{`
        .nav-link {
          text-decoration: none;
          color: #2D3748;
          font-weight: 700;
          font-family: 'Fredoka', sans-serif;
          font-size: 1.05rem;
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: #FF3B7A;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 2.2rem;
          cursor: pointer;
          color: #2D3748;
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-drawer {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            margin-top: 1rem;
          }
          .mobile-drawer a {
            text-decoration: none;
            color: #2D3748;
            font-weight: 700;
            font-family: 'Fredoka', sans-serif;
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left Side: Logo & Sunshine Nursery Brand Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img 
            src={logo} 
            alt="Sunshine Nursery Logo" 
            style={{ width: '6.5rem', height: '6.5rem', objectFit: 'contain', borderRadius: '50%' }} 
          />
        </div>

        {/* Center/Right: Desktop Navigation Links matching image_da518d.jpg */}
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="home" className="nav-link" style={{ color: '#FF3B7A', borderBottom: '3px solid #FF3B7A', paddingBottom: '4px' }}>Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          
          {/* Yellow Pill Button */}
          <button style={{ 
            backgroundColor: '#FFB800', 
            color: '#2D3748', 
            border: 'none', 
            padding: '0.85rem 2rem', 
            borderRadius: '9999px', 
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: '700', 
            fontSize: '1rem',
            cursor: 'pointer', 
            boxShadow: '0px 4px 10px rgba(255, 184, 0, 0.2)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-drawer">
          <a href="#home" style={{ color: '#FF3B7A' }} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <button style={{ backgroundColor: '#FFB800', color: '#2D3748', width: '100%', padding: '0.85rem', borderRadius: '9999px', border: 'none', fontFamily: "'Fredoka', sans-serif", fontWeight: '700', fontSize: '1rem', marginTop: '0.5rem' }}>Enroll Now</button>
        </div>
      )}
    </nav>
  );
}