import React from 'react';
import '../sections/Admission.css';
import './Hero.css';

import heroIllustration from '../assets/HeroImages/herobackground.png';
import wave from '../assets/HeroImages/wave.jpg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-container">
        {/* Background Image Layer */}
        <img 
          src={heroIllustration} 
          alt="Sunshine Nursery Hero Background" 
          className="hero-bg-img"
        />

        {/* Text Overlay Layer */}
        <div className="hero-container-inner">
          <div className="hero-text-block">
            <h1 className="hero-title">
              <span className="hero-welcome">Welcome to</span> <br />
              <span className="hero-brand-name">
                <span className="clr-pink">S</span>
                <span className="clr-blue">u</span>
                <span className="clr-olive">n</span>
                <span className="clr-orange">s</span>
                <span className="clr-magenta">h</span>
                <span className="clr-midblue">i</span>
                <span className="clr-orange">n</span>
                <span className="clr-pink">e</span>

                {" "} <br className="d-block d-sm-none" />

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

            <div className="hero-btn-wrapper">
              <Link to="/contactus" className="admission-btn-link">
                <button className="admission-btn">
                  <span className="btn-text">Admission Open ➔</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Transition Wave */}
      <div className="hero-wave-divider">
        <img
          src={wave}
          alt="Transition Wave Divider"
        />
      </div>
    </section>
  );
}