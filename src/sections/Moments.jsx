import React from 'react';
import moment1 from '../assets/moment1.png';
import moment2 from '../assets/moment2.png';
import moment3 from '../assets/moment3.png';
import moment4 from '../assets/moment4.png';
import moment5 from '../assets/moment5.png';

export default function HappyMoments() {
  return (
    <section className="py-5 bg-white" style={{ fontFamily: 'sans-serif' }}>
      <div className="container position-relative">
        
        {/* 1. SECTION TITLE */}
        <div className="text-center mb-4">
          <h2 style={{ color: '#E84E88', fontWeight: '700' }}>
            Our Happy Moments ♡
          </h2>
        </div>

        {/* 2. THE CAROUSEL CONTAINER (With Arrows on left and right) */}
        <div className="position-relative px-4">
          
          {/* Left Pink Arrow */}
          <button 
            className="btn rounded-circle position-absolute" 
            style={{ backgroundColor: '#E84E88', color: 'white', width: '35px', height: '35px', left: '0', top: '50%', transform: 'translateY(-50%)', border: 'none', zIndex: 5 }}
          >
            &#10094;
          </button>

          {/* Right Pink Arrow */}
          <button 
            className="btn rounded-circle position-absolute" 
            style={{ backgroundColor: '#E84E88', color: 'white', width: '35px', height: '35px', right: '0', top: '50%', transform: 'translateY(-50%)', border: 'none', zIndex: 5 }}
          >
            &#10095;
          </button>

          {/* 3. FIVE IMAGES DISPLAYED USING SIMPLE BOOTSTRAP COLUMNS */}
          {/* flex-nowrap and overflow-auto lets it scroll left/right naturally on mobile phones */}
          <div className="row g-3 flex-nowrap overflow-auto pb-2 justify-content-md-center">
            
            {/* Image Box 1 */}
            <div className="col-9 col-sm-6 col-md-2" style={{ minWidth: '220px' }}>
              <div style={{ height: '220px', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <img src={moment1} alt="Moment 1" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Image Box 2 */}
            <div className="col-9 col-sm-6 col-md-2" style={{ minWidth: '220px' }}>
              <div style={{ height: '220px', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <img src={moment2} alt="Moment 2" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Image Box 3 */}
            <div className="col-9 col-sm-6 col-md-2" style={{ minWidth: '220px' }}>
              <div style={{ height: '220px', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <img src={moment3} alt="Moment 3" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Image Box 4 */}
            <div className="col-9 col-sm-6 col-md-2" style={{ minWidth: '220px' }}>
              <div style={{ height: '220px', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <img src={moment4} alt="Moment 4" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Image Box 5 */}
            <div className="col-9 col-sm-6 col-md-2" style={{ minWidth: '220px' }}>
              <div style={{ height: '220px', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <img src={moment5} alt="Moment 5" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>

          </div>

          {/* 4. THREE LITTLE DOT INDICATORS AT THE BOTTOM */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            <span className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#E84E88' }}></span>
            <span className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#CBD5E1' }}></span>
            <span className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#CBD5E1' }}></span>
          </div>

        </div>
      </div>
    </section>
  );
}