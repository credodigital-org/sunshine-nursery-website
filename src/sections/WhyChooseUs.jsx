import React from 'react';
import love from '../assets/love.png';
import tick from '../assets/tick.png';
import bulb from '../assets/bulb.png';
import people from '../assets/people.png';
import home from '../assets/home.png';
import studying from '../assets/studying.png';

export default function AboutSection() {
  return (
    <section className="py-4 bg-white" style={{ fontFamily: 'sans-serif' }}>
      <div className="container p-4">
        <div className="row position-relative">
        
          
          {/* LEFT HALF COLUMN */}
          <div className="col-12 col-md-6 ps-md-4" style={{ borderRight: '2px solid #E84E88' }}>
            <h2 style={{ color: '#E84E88', fontWeight: '700' }} className="mb-5">
              Why Parents Choose Us
            </h2>
            
            <div className="d-flex flex-column gap-4">
              {/* Item 1 */}
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '60px', height: '60px' }} className="rounded-circle bg-light d-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={love} alt="decoration" style={{ width: '100%', height: '100%',objectFit:'contain' }} 
          />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Caring & Experienced Teachers</h5>
                  <p className="text-muted mb-0">Our teachers are loving, qualified and dedicated.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '60px', height: '60px' }} className="rounded-circle bg-light d-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={tick} alt="decoration" style={{ width: '100%', height: '100%',objectFit:'contain' }} 
          />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Safe & Secure Environment</h5>
                  <p className="text-muted mb-0">Your child's safety and well-being are our top priority.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '60px', height: '60px' }} className="rounded-circle bg-light d-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={bulb} alt="decoration" style={{ width: '100%', height: '100%',objectFit:'contain' }} 
          />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Fun & Engaging Activities</h5>
                  <p className="text-muted mb-0">We make learning fun with creative and interactive activities.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '60px', height: '60px' }} className="rounded-circle bg-light d-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={people} alt="decoration" style={{ width: '100%', height: '100%',objectFit:'contain' }} 
          />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Individual Attention</h5>
                  <p className="text-muted mb-0">We focus on each child's growth and development.</p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '60px', height: '60px' }} className="rounded-circle bg-light d-flex align-items-center justify-content-center flex-shrink-0">
                  <img src={home} alt="decoration" style={{ width: '100%', height: '100%',objectFit:'contain' }} 
          />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Clean & Colorful Classrooms</h5>
                  <p className="text-muted mb-0">Bright, clean and child-friendly spaces for happy learning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT HALF COLUMN */}
          <div className="col-12 col-md-6 ps-md-4 ">
            <h2 className="fw-bold mb-5">
              <span style={{color: '#E84E88'}}>About</span> <span style={{ color: '#3182CE' }}>Sunshine</span> <span style={{ color: '#48BB78' }}>Nursery</span>
            </h2>
            <p className="text-muted lh-lg mb-4">
              At Sunshine Nursery, we provide a warm, caring and stimulating environment where children learn 
              through play, creativity, music, stories and activities. We focus on the overall development 
              of each child - socially, emotionally, physically and intellectually.
            </p>
            <button className="btn text-white px-4 py-2 rounded-pill mb-4" style={{ backgroundColor: '#E84E88', fontWeight: '600' }}>
              Learn More About Us &rarr;
            </button>

            {/* BIG ILLUSTRATION CONTAINER */}
            <div className="w-100 bg-light rounded-4 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
              <img src={studying} style={{width: '100%', height: '100%'}}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}