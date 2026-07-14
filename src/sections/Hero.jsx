import React from 'react';
import '../sections/Admission.css';
import './Hero.css'; 

import heroIllustration from '../assets/HeroImages/herobackground.jpg'; 
import wave from '../assets/HeroImages/wave.jpg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      backgroundImage: `url(${heroIllustration})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Fixed: changed from justify-content
      padding: '4rem 2rem',
      margin: 0,
      maxWidth: '100vw',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="hero-container-inner"> 
        
        <div className="hero-text-block">
          
          <h1 className="hero-title">
  <span className="hero-welcome">Welcome to</span> <br />
  <span className="hero-brand-name">
    {/* SUNSHINE */}
    <span className="clr-pink">S</span>
    <span className="clr-blue">u</span>
    <span className="clr-olive">n</span>
    <span className="clr-orange">s</span>
    <span className="clr-magenta">h</span>
    <span className="clr-midblue">i</span>
    <span className="clr-orange">n</span>
    <span className="clr-pink">e</span>
    
    {" "} <br className="d-block d-sm-none" /> {/* Forces clean break on small mobile */}
    
    {/* NURSERY */}
    <span className="clr-orange">N</span>
    <span className="clr-blue">u</span>
    <span className="clr-pink">r</span>
    <span className="clr-blue">s</span>
    <span className="clr-pink">e</span>
    <span className="clr-olive">r</span>
    <span className="clr-skyblue">y</span>
  </span>
</h1>
          
          <h2 className="hero-description">
            <b>A Happy Place To Learn & Grow</b>
          </h2>
          
          <div style={{ display: 'flex', gap: '3.75rem', flexWrap: 'wrap' }}>
            <Link to="/contactus" className="admission-btn-link">
              <button className="admission-btn">
                <span className="btn-text">Admission Open ➔</span>
              </button>
            </Link>
          </div>
        </div>

      </div>
      <div style={{
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: '100%',
        lineHeight: 0, // Fixed: changed from line-height
        zIndex: 1
      }}>
        <img 
          src={wave} 
          alt="Transition Wave Divider" 
          style={{
            width: '100%',
            height: '60px',
            maxHeight: '130px', // Fixed: changed from max-height
            display: 'block'
          }} 
        />
      </div>
    </section>
  );
}