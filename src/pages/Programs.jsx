import React from 'react';
import sun from '../assets/aboutUsImages/sun.png';
import cloud from '../assets/aboutUsImages/cloud.png';
import wave from '../assets/aboutUsImages/wave.png';
import kids from '../assets/ProgramsImages/kids.png';
import slide from '../assets/HeroImages/slide.jpg';
import teddy from '../assets/ProgramsImages/teddy.png';
import corn from '../assets/ProgramsImages/corn.png';
import abc from '../assets/ProgramsImages/abc.png';
import drawing from '../assets/ProgramsImages/drawing.png';
import music from '../assets/ProgramsImages/music.png';
import drawted from '../assets/ProgramsImages/drawted.png';
import drawcar from '../assets/ProgramsImages/drawcar.png';
import drawbox from '../assets/ProgramsImages/drawbox.png';
import scene1 from '../assets/ProgramsImages/scene1.png';
import scene2 from '../assets/ProgramsImages/scene2.png';
import scene3 from '../assets/ProgramsImages/scene3.png';
import scene4 from '../assets/ProgramsImages/scene4.png';

import About from "../sections/About";
import CTA from '../sections/CTA';
import './Programs.css'; // Ensure this is imported here!

function Programs() {
  return (
    <div>
      {/* HERO SECTION CONTAINER */}
<div 
  className="programs-hero-main"
  style={{ 
    background: 'linear-gradient(180deg, #15B9FF 0%, #FFFFFF 100%)',
    fontFamily: "'Fredoka', sans-serif", 
    position: 'relative', 
    overflow: 'hidden',
    minHeight: '95vh'
  }}
>
  <div className="container programs-hero-container-inner">
    <div className="row align-items-center programs-hero-row">
      
      {/* LEFT COLUMN: Hero Heading Text Block */}
      <div className="col-12 col-md-6 position-relative mb-5 mb-md-0 programs-text-panel">
        {sun && (
          <img 
            src={sun} 
            className="programs-desktop-sun"
            alt="Sun decoration" 
          />
        )}
        <img 
          src={cloud} 
          className="programs-desktop-cloud"
          alt="Cloud decoration" 
        />

        <h2 className="display-6 fw-bold text-dark m-0 programs-text">OUR <span style={{ color: '#FF3B7A' }}>PROGRAMS</span>{' '}</h2>
        
        <p className="fs-5 fw-semibold mb-3 programs-hero-lead" style={{ maxWidth: '420px', color:'#00477C', lineHeight: '1.6', paddingBottom:'2px' }}>
          <b>Helping Every Child <span style={{ color: '#286a06' }}>Learn</span></b><br/>
          <b><span style={{ color: '#00477C' }}>Explore</span> <span style={{ color: '#000000' }}> & </span> <span style={{ color: '#286a06' }}> Grow</span></b>
        </p>
        <p className="fs-5 fw-semibold mb-5 text-dark programs-hero-subtext">Nurturing young minds through play, <br/>
        learning and exploration</p>
      </div>

      {/* RIGHT COLUMN: Asymmetrical Cutout Yellow Background Mask */}
      <div className="col-12 col-md-6 p-0 d-flex justify-content-end programs-mask-panel">
        <div className="programs-sweeping-mask">
          <img 
            src={kids}
            className="programs-mask-img"
            alt="Children playing" 
          />
        </div>
      </div>

    </div>
  </div>

  {/* Bottom Layer Curvature Wave */}
  <img 
    src={wave} 
    alt="wave decor" 
    className="programs-bottom-wave"
  />
</div>

      {/* SECTION TITLE */}
      <h2 className="programs-section-header" style={{ textAlign: 'center', fontSize: '2.5rem', color: '#ED5085', marginBlockEnd: '3rem', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <img src={slide} alt="decoration" style={{ width: '3.968rem', height: '1.106rem' }} />
        Our Programs
        <img src={slide} alt="decoration" style={{ width: '3.968rem', height: '1.106rem' }} />
      </h2>

      {/* CORE AGE GROUPS CLASS LIST SECTIONS */}
      <div className="row g-4 justify-content-center px-4 px-md-5 programs-cards-grid">
      
        {/* CARD 1: Play Group */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-4 h-100 age-group-card" style={{ backgroundColor: '#FEF7DC', borderRadius: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={teddy} alt="decoration" style={{ width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
                <div className="text-center">
                  <span className="badge px-3 py-2 mb-1" style={{ backgroundColor: '#EA8E34', borderRadius: '12px', fontSize: '13px' }}>Age</span>
                  <div className="fw-bold text-dark" style={{ fontSize: '15px', lineHeight: '1.2' }}>1.5-2.5 <br /><span style={{ fontSize: '13px', fontWeight: 'normal' }}>Years</span></div>
                </div>
              </div>
              <h3 className="fw-SemiBold text-dark m-0 mb-1" style={{ fontSize: '24px' }}>Play Group</h3>
              <p className="text-secondary text-dark fw-semiBold mb-3" style={{ fontSize: '15px' }}>Fun activities & play <br />based learning</p>
              <hr style={{ borderTop: '2px solid #EAD6A3', opacity: 1, margin: '15px 0' }} />
              <h5 className="fw-bold" style={{ color: '#E57E25', fontSize: '15px', marginBottom: '10px' }}>Key Focus</h5>
              <ul className="list-unstyled m-0">
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Social interaction</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Motor Skills</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Early Communication</li>
              </ul>
            </div>
            <img src={drawted} alt="" className="card-sketch-decor drawing-ted" style={{ position: 'absolute', bottom: '-10px', right: '-5px', width: '120px', height: 'auto', zIndex: 1, pointerEvents: 'none' }} />
          </div>
        </div>

        {/* CARD 2: Nursery */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-4 h-100 age-group-card" style={{ backgroundColor: '#E3F2FD', borderRadius: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={corn} alt="decoration" style={{ width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
                <div className="text-center">
                  <span className="badge px-3 py-2 mb-1" style={{ backgroundColor: '#6A369F', borderRadius: '12px', fontSize: '13px' }}>Age</span>
                  <div className="fw-bold text-dark" style={{ fontSize: '15px', lineHeight: '1.2' }}>2-3.5 <br /><span style={{ fontSize: '13px', fontWeight: 'normal' }}>Years</span></div>
                </div>
              </div>
              <h3 className="fw-SemiBold text-dark m-0 mb-1" style={{ fontSize: '24px' }}>Nursery</h3>
              <p className="text-secondary text-dark fw-semiBold mb-3" style={{ fontSize: '15px' }}>Building basic <br />through play</p>
              <hr style={{ borderTop: '2px solid #B1D3EE', opacity: 1, margin: '15px 0' }} />
              <h5 className="fw-bold" style={{ color: '#E57E25', fontSize: '15px', marginBottom: '10px' }}>Key Focus</h5>
              <ul className="list-unstyled m-0">
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Language Development</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Cognitive Skills</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Independence</li>
              </ul>
            </div>
            <img src={drawcar} alt="" className="card-sketch-decor drawing-car" style={{ position: 'absolute', bottom: '2px', right: '3px', width: '120px', height: 'auto', opacity: 0.7, pointerEvents: 'none' }} />
          </div>
        </div>

        {/* CARD 3: KG Classes */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-4 h-100 age-group-card" style={{ backgroundColor: '#FCE4EC', borderRadius: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={abc} alt="decoration" style={{ width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
                <div className="text-center">
                  <span className="badge px-3 py-2 mb-1" style={{ backgroundColor: '#E94E77', borderRadius: '12px', fontSize: '13px' }}>Age</span>
                  <div className="fw-bold text-dark" style={{ fontSize: '15px', lineHeight: '1.2' }}>3.5-5 <br /><span style={{ fontSize: '13px', fontWeight: 'normal' }}>Years</span></div>
                </div>
              </div>
              <h3 className="fw-SemiBold text-dark m-0 mb-1" style={{ fontSize: '24px' }}>KG Classes</h3>
              <p className="text-secondary text-dark fw-semiBold mb-3" style={{ fontSize: '15px' }}>Preparing kids <br />for the future</p>
              <hr style={{ borderTop: '2px solid #EFCAD4', opacity: 1, margin: '15px 0' }} />
              <h5 className="fw-bold" style={{ color: '#E57E25', fontSize: '15px', marginBottom: '10px' }}>Key Focus</h5>
              <ul className="list-unstyled m-0">
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Early Literacy</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Numbers & Logic</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Confidence Building</li>
              </ul>
            </div>
            <img src={drawbox} alt="" className="card-sketch-decor drawing-box" style={{ position: 'absolute', bottom: '60px', right: '0', width: '120px', height: 'auto', opacity: 0.7, pointerEvents: 'none' }} />
          </div>
        </div>

        {/* CARD 4: Art and Craft */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-4 h-100 age-group-card" style={{ backgroundColor: '#FCF4D9', borderRadius: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={drawing} alt="decoration" style={{ width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
                <div className="text-center">
                  <span className="badge px-3 py-2 mb-1" style={{ backgroundColor: '#EA8E34', borderRadius: '12px', fontSize: '13px' }}>Age</span>
                  <div className="fw-bold text-dark" style={{ fontSize: '15px', lineHeight: '1.2' }}>2.5-5 <br /><span style={{ fontSize: '13px', fontWeight: 'normal' }}>Years</span></div>
                </div>
              </div>
              <h3 className="fw-SemiBold text-dark m-0 mb-1" style={{ fontSize: '24px' }}>Art and Craft</h3>
              <p className="text-secondary text-dark fw-semiBold mb-3" style={{ fontSize: '15px' }}>Encouraging <br />Creativity</p>
              <hr style={{ borderTop: '2px solid #EAD49E', opacity: 1, margin: '15px 0' }} />
              <h5 className="fw-bold" style={{ color: '#E57E25', fontSize: '15px', marginBottom: '10px' }}>Key Focus</h5>
              <ul className="list-unstyled m-0">
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Creativity</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Fine Motor Skills</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Self Expression</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CARD 5: Music & Dance */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-4 h-100 age-group-card" style={{ backgroundColor: '#F3E5F5', borderRadius: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={music} alt="decoration" style={{ width: '100%', height: '100%', objectFit:'contain' }} />
                </div>
                <div className="text-center">
                  <span className="badge px-3 py-2 mb-1" style={{ backgroundColor: '#E94E77', borderRadius: '12px', fontSize: '13px' }}>Age</span>
                  <div className="fw-bold text-dark" style={{ fontSize: '15px', lineHeight: '1.2' }}>2.5-5 <br /><span style={{ fontSize: '13px', fontWeight: 'normal' }}>Years</span></div>
                </div>
              </div>
              <h3 className="fw-SemiBold text-dark m-0 mb-1" style={{ fontSize: '24px' }}>Music & Dance</h3>
              <p className="text-secondary text-dark fw-semiBold mb-3" style={{ fontSize: '15px' }}>Rhythm, Movement <br />& Expression</p>
              <hr style={{ borderTop: '2px solid #DCC3DF', opacity: 1, margin: '15px 0' }} />
              <h5 className="fw-bold" style={{ color: '#E57E25', fontSize: '15px', marginBottom: '10px' }}>Key Focus</h5>
              <ul className="list-unstyled m-0">
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Rhythm & Movement</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Listening Skills</li>
                <li className="d-flex align-items-center mb-2" style={{ fontSize: '13px', fontWeight: '500' }}><span className="me-2" style={{ color: '#EA8E34' }}>•</span> Confidence</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION TITLE: Focus Steps */}
      <h2 className="steps-section-header" style={{ textAlign: 'center', fontSize: '2.5rem', color: '#ED5085', marginBlockEnd: '3rem', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <img src={slide} alt="decoration" style={{ width: '3.968rem', height: '1.106rem' }} />
        Our Programs
        <img src={slide} alt="decoration" style={{ width: '3.968rem', height: '1.106rem' }} />
      </h2>

      {/* FOUR STEP MILESTONES PROCESS */}
      <div className="container py-2 px-4 px-md-5 programs-steps-block">
        <div className="row g-5 justify-content-center">
          
          {/* STEP 1: Play & Explore */}
          <div className="col-12 col-sm-6 col-lg-3 step-card-wrapper">
            <div 
              className="p-4 text-center h-100 step-milestone-card" 
              style={{ 
                backgroundColor: '#FFF7E2', 
                borderRadius: '35px', 
                position: 'relative',
                paddingTop: '3rem',
                display: 'flex',
                maxHeight: '300px',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div 
                className="d-flex align-items-center justify-content-center text-white fw-bold milestone-badge"
                style={{
                  position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '50px', height: '50px', backgroundColor: '#EA8E34', borderRadius: '50%',
                  fontSize: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}
              >
                01
              </div>
              <div className="d-flex align-items-center justify-content-center wrapper-scene-img" style={{ minHeight: '130px' }}>
                <img src={scene1} alt="" className="img-fluid w-100" style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} />
              </div>
              <div className="text-center mt-2">
                <h4 className="fw-SemiBold text-dark mb-2" style={{ fontSize: '1.35rem' }}>Play & Explore</h4>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem', fontWeight: '500' }}>Encouraging<br />Creativity</p>
              </div>
            </div>
          </div>

          {/* STEP 2: Discover & Create */}
          <div className="col-12 col-sm-6 col-lg-3 step-card-wrapper">
            <div 
              className="p-4 text-center h-100 step-milestone-card" 
              style={{ 
                backgroundColor: '#E1F0FA', 
                borderRadius: '35px', 
                position: 'relative',
                paddingTop: '3rem',
                display: 'flex',
                maxHeight: '300px',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div 
                className="d-flex align-items-center justify-content-center text-white fw-bold milestone-badge"
                style={{
                  position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '50px', height: '50px', backgroundColor: '#0084FF', borderRadius: '50%',
                  fontSize: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}
              >
                02
              </div>
              <div className="d-flex align-items-center justify-content-center wrapper-scene-img" style={{ minHeight: '130px' }}>
                <img src={scene2} alt="" className="img-fluid w-100" style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} />
              </div>
              <div className="text-center mt-2">
                <h4 className="fw-SemiBold text-dark mb-2" style={{ fontSize: '1.35rem' }}>Discover & Create</h4>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem', fontWeight: '500' }}>Encouraging<br />Creativity</p>
              </div>
            </div>
          </div>

          {/* STEP 3: Learn & Grow */}
          <div className="col-12 col-sm-6 col-lg-3 step-card-wrapper">
            <div 
              className="p-4 text-center h-100 step-milestone-card" 
              style={{ 
                backgroundColor: '#F9E7F1', 
                borderRadius: '35px', 
                position: 'relative',
                paddingTop: '3rem',
                display: 'flex',
                maxHeight: '300px',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div 
                className="d-flex align-items-center justify-content-center text-white fw-bold milestone-badge"
                style={{
                  position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '50px', height: '50px', backgroundColor: '#ED5085', borderRadius: '50%',
                  fontSize: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}
              >
                03
              </div>
              <div className="d-flex align-items-center justify-content-center wrapper-scene-img" style={{ minHeight: '130px' }}>
                <img src={scene4} alt="" className="img-fluid w-100" style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} />
              </div>
              <div className="text-center mt-2">
                <h4 className="fw-SemiBold text-dark mb-2" style={{ fontSize: '1.35rem' }}>Learn & Grow</h4>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem', fontWeight: '500' }}>Encouraging<br />Creativity</p>
              </div>
            </div>
          </div>

          {/* STEP 4: Shine With Confidence */}
          <div className="col-12 col-sm-6 col-lg-3 step-card-wrapper">
            <div 
              className="p-4 text-center h-100 step-milestone-card" 
              style={{ 
                backgroundColor: '#E6F2FC', 
                borderRadius: '35px', 
                position: 'relative',
                paddingTop: '3rem',
                display: 'flex',
                maxHeight: '300px',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div 
                className="d-flex align-items-center justify-content-center text-white fw-bold milestone-badge"
                style={{
                  position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '50px', height: '50px', backgroundColor: '#15B9FF', borderRadius: '50%',
                  fontSize: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}
              >
                04
              </div>
              <div className="d-flex align-items-center justify-content-center wrapper-scene-img" style={{ minHeight: '130px' }}>
                <img src={scene3} alt="" className="img-fluid w-100" style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} />
              </div>
              <div className="text-center mt-2">
                <h4 className="fw-SemiBold text-dark mb-2" style={{ fontSize: '1.35rem' }}>Shine With Confidence</h4>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem', fontWeight: '500' }}>Encouraging<br />Creativity</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <About/>
      <CTA />
    </div>
  );
}

export default Programs;