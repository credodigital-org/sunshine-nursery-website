import React, { useState, useEffect } from 'react';
import children from '../assets/GalleryImages/children.png';

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
      {/* --- HERO BANNER SECTION --- */}
      <div 
        className="gallery-hero-wrapper" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${children})`
        }}
      >
        <div className="container text-center position-relative" style={{ zIndex: 6 }}>
          <div className="row justify-content-center">
            
            <div className="col-11 col-md-9 col-lg-8 position-relative gallery-text-panel mx-auto text-center">

              {/* Title with pure white "OUR" */}
              <h1 className="fw-bold p-0 m-0 gallery-title">
                <span className="text-white">OUR</span> <br/>
                <span style={{ color: '#FF538A' }}>G</span>
                <span style={{ color: '#5BE32D' }}>a</span>
                <span style={{ color: '#FF538A' }}>ll</span>
                <span style={{ color: '#00E5FF' }}>e</span>
                <span style={{ color: '#FF538A' }}>r</span>
                <span style={{ color: '#5BE32D' }}>y</span>
              </h1>

              {/* Lead text in pure white */}
              <p className="fw-bold p-2 mx-auto gallery-lead-text text-white">
                A glimpse into the joyful learning, <br className="d-none d-sm-inline" />
                laughter, and love that fill our days.
              </p>

            </div>

          </div>
        </div>
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