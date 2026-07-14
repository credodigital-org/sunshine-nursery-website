import React from 'react';

import heroIllustration from '../assets/herobackground.jpg'; 
import wave from '../assets/wave.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      backgroundImage: `url(${heroIllustration})`,
      id:"home",
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 2rem',
      margin: 0,
      maxWidth: '100vw',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'flex-start', boxSizing: 'border-box',padding: '5rem' }}>
        
        {/* Left Side Content Overlaid on top of the image field */}
        <div className="hero-text-block" style={{ maxWidth: '51.1875rem', height:'41rem', padding: '1rem', borderRadius: '2rem' }}>
          <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '3rem', color: '#2D3748', lineHeight: '1.2', marginBlockEnd: '1rem' }}>
            <b>A Happy Place </b><br />
            <b>To</b> <span style={{ color: '#3B82F6' }}><b>Learn</b></span> & <span style={{ color: '#059263' }}><b>Grow</b></span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4A5568', marginBlockEnd: '2rem', lineHeight: '1.5' }}>
            <b>Inspiring young minds to explore, imagine and achieve every day.</b>
          </p>
          <div style={{ display: 'flex', gap: '3.75rem', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#f80a0a', color: 'white', border: 'none', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer' }}>
              Enroll Now ➔
            </button>
            <button style={{ backgroundColor: 'white', color: '#2169dc', border: '2px solid #3B82F6', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer' }}>
              Contact Us ➔
            </button>
          </div>
        </div>

      </div>
      <div style={{
        position: 'absolute',
        bottom: '-2px', /* Forces overlap to eliminate tiny structural lines */
        left: 0,
        width: '100%',
        lineHeight: 0,
        zIndex: 1
      }}>
        <img 
          src={wave} 
          alt="Transition Wave Divider" 
          style={{
            width: '100%',
            height: '60px',
            maxHeight: '130px', /* Keeps the scale aligned perfectly with the layout height */
            display: 'block'
          }} 
        />
      </div>
    </section>
  );
}