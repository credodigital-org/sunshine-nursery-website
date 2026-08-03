import React, { useState, useEffect } from 'react';
import sun from '../assets/AboutUsImages/sun.png';
import wave from '../assets/AboutUsImages/wave.png';
import children from '../assets/GalleryImages/children.png';
import flower1 from '../assets/GalleryImages/flower1.png'; 
import flower2 from '../assets/GalleryImages/flower2.png'; 

import activity1 from '../assets/GalleryImages/activity1.jpeg';
import activity2 from '../assets/GalleryImages/activity2.jpeg';
import activity3 from '../assets/GalleryImages/activity3.jpeg';
import activity4 from '../assets/GalleryImages/activity4.jpeg';
import activity5 from '../assets/GalleryImages/activity5.jpeg';
import celebrations1 from '../assets/GalleryImages/celebrations1.jpeg';
import events1 from '../assets/GalleryImages/events1.jpeg';
import events2 from '../assets/GalleryImages/events2.jpeg';
import events3 from '../assets/GalleryImages/events3.jpeg';
import events4 from '../assets/GalleryImages/events4.jpeg';
import events5 from '../assets/GalleryImages/events5.jpeg';
import events6 from '../assets/GalleryImages/events6.jpeg';
import outdoor1 from '../assets/GalleryImages/outdoor1.jpeg';

import About from "../sections/About";
import CTA from '../sections/CTA';
import './Gallery.css';

const galleryItems = [
  { id: 1, category: 'Activity', label: 'Classroom Activity & Crafts', img: activity1 },
  { id: 2, category: 'Activity', label: 'Interactive Learning Session', img: activity2 },
  { id: 3, category: 'Activity', label: 'Creative Hands-on Activity', img: activity3 },
  { id: 4, category: 'Activity', label: 'Group Classroom Fun', img: activity4 },
  { id: 5, category: 'Activity', label: 'Early Skills Workshop', img: activity5 },
  { id: 6, category: 'Celebrations', label: 'Nursery Festive Celebration', img: celebrations1 },
  { id: 7, category: 'Events', label: 'Annual Day Celebrations', img: events1 },
  { id: 8, category: 'Events', label: 'Special Nursery Gathering', img: events2 },
  { id: 9, category: 'Events', label: 'Sports & Fun Activities', img: events3 },
  { id: 10, category: 'Events', label: 'Nursery Cultural Event', img: events4 },
  { id: 11, category: 'Events', label: 'Music & Dance Performance', img: events5 },
  { id: 12, category: 'Events', label: 'Grand Stage Celebration', img: events6 },
  { id: 13, category: 'Outdoors', label: 'Outdoor Playground Fun', img: outdoor1 },
];

const categories = ['All', 'Activity', 'Events', 'Celebrations', 'Outdoors'];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <>
      <div className="gallery-hero-wrapper" style={{ 
        background: 'linear-gradient(95deg, #A8D6FF 100%, #95FB99 0%)',
        paddingTop: '250px', 
        paddingBottom: '100px', 
        fontFamily: "'Fredoka', sans-serif", 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '95vh'
      }}>
        <div className="container">
          <div className="row align-items-center gallery-hero-row">
            
            {/* LEFT COLUMN */}
            <div className="col-12 col-md-6 position-relative mb-5 mb-md-0 gallery-text-panel">
              {sun && (
                <img 
                  src={sun} 
                  alt="Sun decoration" 
                  className="gallery-decor-sun"
                  style={{ position: 'absolute', top: '-60px', left: '530px', width: '100px', height: '100px' }} 
                />
              )}

              <h2 className="display-6 fw-bold text-dark p-3 m-0 gallery-title">OUR <br/>
                <span style={{ color: '#FF3B7A' }}>G</span>
                <span style={{ color: '#5FAF37' }}>a</span>
                <span style={{ color: '#FF3B7A' }}>ll</span>
                <span style={{ color: '#00477C' }}>e</span>
                <span style={{ color: '#FF3B7A' }}>r</span>
                <span style={{ color: '#5FAF37' }}>y</span>
              </h2>

              <p className="fs-5 fw-bold p-3 gallery-lead-text" style={{color:'#000000'}}>
                A glimpse into the joyful learning, <br/>
                laughter, and love that fill our days.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-md-6 p-0 d-flex justify-content-end gallery-image-panel">
              <div className="gallery-kids-mask" style={{
                width: '100%',
                maxWidth: '750px',
                position: 'absolute',
                right: '0px',
                top: '100px',
                bottom: '0px',
                zIndex: '4',
                height: '100%',   
                overflow: 'hidden',
                borderRadius: '100% 0% 0% 100% / 50% 0% 0% 50%',
                WebkitBorderRadius: '100% 0% 0% 100% / 50% 0% 0% 50%'
              }}>
                <img 
                  src={children}
                  alt="Children playing" 
                  className="gallery-kids-img"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    objectPosition: 'right center'
                  }} 
                />
              </div>
            </div>

          </div>

          {/* Left Grass */}
          <div className="gallery-decor-flower1" style={{ position: 'absolute', top: '515px', left: '1px', zIndex: 5 }}>
            <img src={flower1} alt="grass left" style={{ width: '100%', height: '150px' }} />
          </div>

          {/* Center Grass */}
          <div className="gallery-decor-flower2" style={{ position: 'absolute', top: '520px', left: '750px', zIndex: '5' }}>
            <img src={flower2} alt="grass center" style={{ width: '100%', height: '150px' }} />
          </div>
        </div>
        
        {/* Wave Layer */}
        {wave && (
          <img 
            src={wave} 
            alt="wave decor" 
            className="gallery-bottom-wave"
            style={{
              position: 'absolute',
              bottom: '-2px', 
              left: '0',
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0px -10px 0px #7cdf7f)',
              zIndex: '5'
            }}
          />
        )}
      </div> 

      {/* --- GALLERY FILTER SECTION --- */}
      <section style={{ 
        backgroundColor: '#ffffff', 
        paddingTop: '60px', 
        paddingBottom: '60px',
        fontFamily: "'Fredoka', sans-serif"
      }}>
        <div className="container">
          
          {/* THE FILTER BUTTON BAR */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 gallery-filter-bar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn fw-bold px-4 py-2" 
                style={{ 
                  backgroundColor: activeCategory === cat ? '#E94E77' : '#fff', 
                  color: activeCategory === cat ? '#fff' : '#000', 
                  borderRadius: '25px', 
                  border: activeCategory === cat ? 'none' : '1px solid #ced4da',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* THE AUTOMATIC FILTER GRID */}
          <div className="row g-4 justify-content-center gallery-grid">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center gallery-card-col">
                <div 
                  className="gallery-card-thumb" 
                  onClick={() => openLightbox(index)}
                  title="Click to view in 4K HD"
                >
                  <img src={item.img} alt={item.label} className="gallery-card-img" />
                  <div className="gallery-hover-overlay">
                    <span>🔍 View 4K HD</span>
                  </div>
                </div>
                <p className="fw-bold text-dark mt-2 mb-0 small">{item.label}</p>
                <span className="badge bg-light text-secondary border fw-normal" style={{ fontSize: '0.75rem' }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section> 

      {/* LIGHTBOX MODAL FOR 4K HD VIEW */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close">✕</button>

          <button 
            className="lightbox-nav-btn lightbox-prev-btn" 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous Image"
          >
            ‹
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredItems[lightboxIndex].img} 
              alt={filteredItems[lightboxIndex].label} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption text-center mt-3 text-white">
              <h5 className="fw-bold m-0">{filteredItems[lightboxIndex].label}</h5>
              <span className="badge bg-danger mt-1">{filteredItems[lightboxIndex].category}</span>
            </div>
          </div>

          <button 
            className="lightbox-nav-btn lightbox-next-btn" 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next Image"
          >
            ›
          </button>
        </div>
      )}

      <About/>
      <CTA /> 
    </>
  );
}

export default Gallery;