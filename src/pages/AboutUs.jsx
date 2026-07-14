import React from 'react';
import './AboutUs.css'; 

import children from '../assets/aboutUsImages/children.png';
import love from '../assets/aboutUsImages/love.png';
import sun from '../assets/aboutUsImages/sun.png';
import tick from '../assets/aboutUsImages/tick.png';
import cloud from '../assets/aboutUsImages/cloud.png';
import wave from '../assets/aboutUsImages/wave.png';
import school from '../assets/aboutUsImages/school.png';
import redarrow from '../assets/aboutUsImages/redarrow.png';
import scope from '../assets/aboutUsImages/scope.png';
import contact from '../assets/aboutUsImages/contact.png';
import yellow from '../assets/aboutUsImages/yellow.png';
import degree from '../assets/aboutUsImages/degree.png';
import blue from '../assets/aboutUsImages/blue.png';
import fam from '../assets/aboutUsImages/fam.png';
import aswini from '../assets/aboutUsImages/aswini.png';

import About from "../sections/About";
import CTA from '../sections/CTA';

export default function AboutUs() {    
  return (
    <>
      {/* HERO WRAPPER BLOCK */}
      <div className="about-hero-container">
        
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT COLUMN: Main textual titles & highlights */}
            <div className="col-12 col-md-6 position-relative mb-md-0">
              
              {/* Floating Decorations hooks */}
              {sun && <img src={sun} alt="Sun decoration" className="decor-sun" />}
              {cloud && <img src={cloud} alt="Cloud decoration" className="decor-cloud" />}

              <h2 className="display-6 fw-bold text-dark m-0">About</h2>
              <h1 className="display-4 fw-bold mb-4">
                <span style={{ color: '#FF3B7A' }}>Sunshine</span>{' '}
                <span style={{ color: '#4CAF50' }}>Nursery</span>
              </h1>

              <p className="fs-5 text-dark fw-semibold about-hero-tagline">
                where little minds learn, <br/>play, grow and shine every day.
              </p>

              {/* Grid Features */}
              <div className="row g-4">
                
                {/* Feature 1: Nurturing Hearts */}
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <div className="feature-icon-circle" style={{ backgroundColor: '#FF3B7A' }}>
                    {love ? (
                      <img src={love} alt="Love icon" style={{ width: '70px', height: '70px' }} />
                    ) : (
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>❤️</span>
                    )}
                  </div>
                  <div>
                    <h5 className="fw-bold m-0 text-dark">Nuturing Hearts</h5>
                    <p className="small text-muted m-0 fw-medium">We care with love and compassion</p>
                  </div>
                </div>

                {/* Feature 2: Building Future */}
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <div className="feature-icon-circle" style={{ backgroundColor: '#42A5F5' }}>
                    {tick ? (
                      <img src={tick} alt="Blue tick icon" style={{ width: '70px', height: '70px' }} />
                    ) : (
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>🛡️</span>
                    )}
                  </div>
                  <div>
                    <h5 className="fw-bold m-0 text-dark">Building Future</h5>
                    <p className="small text-muted m-0 fw-medium">We prepare children for a bright tomorrow</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Large Sweeping Layout Image Box */}
            <div className="col-12 col-md-6 p-0 d-flex justify-content-end">
              <div className="about-sweeping-mask-wrapper">
                <img 
                  src={children} 
                  alt="Children playing" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'center' }} 
                />
              </div>
            </div>

          </div>
        </div>
        
        {/* Ground level divider decoration wave */}
        <img src={wave} alt="wave decor" className="decor-bottom-wave" />
      </div>
      
      {/* STORY & CORE VALUES WRAPPER BLOCK */}
      <div className="about-story-container">
        <div className="container py-2">
          
          {/* OUR STORY ROW */}
          <div className="row align-items-center mb-5 pb-3">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="overflow-hidden">
                <img 
                  src={school}
                  alt="Sunshine Nursery School Building" 
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover', display: 'block', height: 'auto' }}
                />
              </div>
            </div>

            <div className="col-12 col-md-6 ps-md-4">
              <h2 className="display-6 fw-bold mb-3" style={{ position: 'relative', display: 'inline-block' }}>
                <span className="story-heading-underline">
                  Our Story
                </span>
              </h2>
              <p className="fs-5 text-secondary mt-3" style={{ lineHeight: '1.7', fontWeight: '400' }}>
                Founded With A Passion For Early Childhood Education, Sunshine Nursery Has Been Nurturing 
                Young Minds For Over A Decade. We Provide A Safe, Joyful, And Inspiring Environment Where 
                Children Can Explore, Learn, And Grow With Confidence.
              </p>
              <p className="fs-5 text-secondary" style={{ lineHeight: '1.7', fontWeight: '400' }}>
                Our Dedicated Educators Create Engaging Learning Experiences That Foster Creativity, Curiosity, 
                Social Development, And A Lifelong Love For Learning.
              </p>
            </div>
          </div>

          {/* MISSION & VISION BOXES ROW */}
          <div className="row g-4 mt-2">
            
            {/* Left Box: Our Mission */}
            <div className="col-12 col-md-6">
              <div className="h-100 p-4 d-flex align-items-center card-mission-box">
                <div className="d-flex align-items-center w-100">
                  <div className="me-4 flex-shrink-0" style={{ width: '85px' }}>
                    <img src={redarrow} alt="Target Icon" className="img-fluid" />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#FF3B7A' }}>
                      <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Our Mission</span>
                    </h4>
                    <p className="m-0 text-dark fw-medium" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                      To provide a safe, loving and stimulating environment where childern learn through play, creativity and meaningful experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Our Vision */}
            <div className="col-12 col-md-6">
              <div className="h-100 p-4 d-flex align-items-center card-vision-box">
                <div className="d-flex align-items-center w-100">
                  <div className="me-4 flex-shrink-0" style={{ width: '85px' }}>
                    <img src={scope} alt="Telescope Icon" className="img-fluid" />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0288D1' }}>
                      <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Our Vision</span>
                    </h4>
                    <p className="m-0 text-dark fw-medium" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                      To be leading early childhood center that inspire young minds to become confidence, curious and compassionate lifelong learners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* WHAT MAKES US SPECIAL SECTION */}
      <section className="py-2 bg-white" style={{ fontFamily: 'sans-serif' }}>
        <div className="container position-relative">
          
          <div className="text-center mb-4">
            <h2 style={{ color: '#E84E88', fontWeight: '700' }}>
              What Makes us Special ♡
            </h2>
          </div>

          <div className="container py-5">
            <div className="row justify-content-center g-4">
              
              {/* Item 1 */}
              <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3 special-icon-wrapper" style={{ backgroundColor: '#5CB85C' }}>
                  <img src={contact} alt="decoration" className="w-100 h-100" style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>Child -centered Approach</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
                    we focus on each child's individual needs and learn style.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3 special-icon-wrapper" style={{ backgroundColor: '#E4B63C' }}>
                  <img src={yellow} alt="decoration" className="w-100 h-100" style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>Safe and secure enviorment</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
                    Hygienic , secure and child- friendly spaces for peace of mind.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3 special-icon-wrapper" style={{ backgroundColor: '#EC4B82' }}>
                  <img src={degree} alt="decoration" className="w-100 h-100" style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>Qualified & Caring Educators</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
                    Experienced teachers who inspire, guide and support every child
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3 special-icon-wrapper" style={{ backgroundColor: '#8E44AD' }}>
                  <img src={blue} alt="decoration" style={{ width: '130%', height: '130%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>Play- Based Learning</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
                    Learning through play, exploration and fun activities.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3 special-icon-wrapper" style={{ backgroundColor: '#0A84FF' }}>
                  <img src={fam} alt="decoration" className="w-100 h-100" style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>Strong parent paratnership</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
                    we work closely with parents for holistic child develipment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM SECTION */}
      <section className="py-2 bg-white" style={{ fontFamily: 'sans-serif' }}>
        <div className="container text-center">
          
          <div className="mb-5">
            <h2 style={{ color: '#E84E88', fontWeight: '700', fontSize: '2.5rem' }}>
              Meet our Team ♡
            </h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
            
            {/* Member 1 */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={aswini} alt="Aswini singh" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
                <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  10+ years of experience in early childhood education and leadership.
                </p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={aswini} alt="Aswini singh" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
                <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  10+ years of experience in early childhood education and leadership.
                </p>
              </div>
            </div>

            {/* Member 3 */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={aswini} alt="Aswini singh" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
                <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  10+ years of experience in early childhood education and leadership.
                </p>
              </div>
            </div>

            {/* Member 4 */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={aswini} alt="Aswini singh" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
                <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  10+ years of experience in early childhood education and leadership.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <About />
      <CTA />
    </>
  );
}