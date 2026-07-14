import React from 'react';
import slide from '../assets/slide.jpg';
import teddy from '../assets/teddy.png';
import corn from '../assets/corn.png';
import abc from '../assets/abc.png';
import drawing from '../assets/drawing.png';
import music from '../assets/music.png';

export default function Programs() {
  const matchingPrograms = [
    { name: "Play Group", desc: "Fun activities & play based learning", icon: teddy, isImage: true, bgColor: '#FEF6E1' },
    { name: "Nursery", desc: "Building basic through play", icon: corn, isImage: true, bgColor: '#EBF4FA' },
    { name: "KG Classes", desc: "Preparing kids for the future", icon: abc, isImage: true, bgColor: '#FDF0F2' },
    { name: "Art & Craft", desc: "Encouraging creativity", icon: drawing, isImage: true, bgColor: '#FEF6E1' },
    { name: "Music & Dance", desc: "Rhythm, movement & expression", icon: music, isImage: true, bgColor: '#F6EBF2' }
  ];

  return (
    <section id="programs" style={{ backgroundColor: '#FFFFFF', padding: '2rem' }}>
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
        
        {/* Changed to flex row for exact horizontal flow tracking */}
        <div style={{ display: 'grid', gap: '0.625rem', justifyContent: 'center', flexWrap: 'wrap', gridAutoFlow: 'column',
          gridAutoColumns: '1fr'}}>
          {matchingPrograms.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                background: item.bgColor, 
                width: '250px',          // 1. Exact fixed width from image specifications
                height: '250px',         // 2. Exact fixed height from image specifications
                borderRadius: '50px',    // 3. Exact corner rounding radius
                overflow: 'hidden',      // 4. Clips the image's raw white corners cleanly
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Expanded container to match full card scale */}
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.isImage ? (
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    style={{ 
                      width: '100%',     // 5. Makes image span full width
                      height: '100%',    // 6. Makes image span full height
                      objectFit: 'cover' // 7. Fills the card and eliminates layout borders
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