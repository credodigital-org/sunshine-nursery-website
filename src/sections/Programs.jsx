import React from 'react';
import './Programs.css'; // 1. IMPORT YOUR NEW CSS FILE HERE

import slide from '../assets/HeroImages/slide.jpg';
import teddy from '../assets/HeroImages/teddy.png';
import corn from '../assets/HeroImages/corn.png';
import abc from '../assets/HeroImages/abc.png';
import drawing from '../assets/HeroImages/drawing.png';
import music from '../assets/HeroImages/music.png';

export default function Programs() {
  const matchingPrograms = [
    { name: "Play Group", desc: "Fun activities & play based learning", icon: teddy, isImage: true, bgColor: '#FEF6E1' },
    { name: "Nursery", desc: "Building basic through play", icon: corn, isImage: true, bgColor: '#EBF4FA' },
    { name: "KG Classes", desc: "Preparing kids for the future", icon: abc, isImage: true, bgColor: '#FDF0F2' },
    { name: "Art & Craft", desc: "Encouraging creativity", icon: drawing, isImage: true, bgColor: '#FEF6E1' },
    { name: "Music & Dance", desc: "Rhythm, movement & expression", icon: music, isImage: true, bgColor: '#F6EBF2' }
  ];

  return (
    <section id="programs" className="programs-section" style={{ backgroundColor: '#FFFFFF', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#F7558B', marginBlockEnd: '3rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <img 
            src={slide} 
            alt="decoration"
            style={{ width: '3.968rem', height: '1.106rem' }} 
          />
          Our Programs
          <img 
            src={slide} 
            alt="decoration"
            style={{ width: '3.968rem', height: '1.106rem' }} 
          />
        </h2>
        
        {/* 2. Swapped out inline layout logic for class handles */}
        <div className="programs-grid">
          {matchingPrograms.map((item, index) => (
            <div 
              key={index} 
              className="program-card"
              style={{ background: item.bgColor }} // Dynamic background color stays inline cleanly
            >
              <div className="program-media-wrapper">
                {item.isImage ? (
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    style={{ 
                      width: '100%',     
                      height: '100%',    
                      objectFit: 'cover' 
                    }} 
                  />
                ) : (
                  <span style={{ fontSize: '3.5rem' }}>{item.icon}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}