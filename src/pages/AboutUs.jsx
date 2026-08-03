import React from 'react';
import './AboutUs.css'; 

import children from '../assets/AboutUsImages/children.png';
import love from '../assets/AboutUsImages/love.png';
import sun from '../assets/AboutUsImages/sun.png';
import tick from '../assets/AboutUsImages/tick.png';
import cloud from '../assets/AboutUsImages/cloud.png';
import wave from '../assets/AboutUsImages/wave.png';
import school from '../assets/AboutUsImages/school.png';
import scope from '../assets/AboutUsImages/scope.png';
import contact from '../assets/AboutUsImages/contact.png';
import yellow from '../assets/AboutUsImages/yellow.png';
import degree from '../assets/AboutUsImages/degree.png';
import arrow from '../assets/AboutUsImages/redarrow.png';
import blue from '../assets/AboutUsImages/blue.png';
import fam from '../assets/AboutUsImages/fam.png';
import mireilie from '../assets/AboutUsImages/Mireilie_saad.jpeg';
import keiko from '../assets/AboutUsImages/Keiko_Fujie.jpeg';
import kholoud from '../assets/AboutUsImages/Arabic_Teacher.jpeg';
import care from '../assets/AboutUsImages/care.jpg';
import shake from '../assets/AboutUsImages/handshake.jpg';
import promise from '../assets/AboutUsImages/promise.jpg';




import About from "../sections/About";
import CTA from '../sections/CTA';

export default function AboutUs() {    
  return (
    <>
      {/* HERO WRAPPER BLOCK */}
      <div className="about-hero-container">
        
        <div className="container">
          <div className="row align-items-center flex-nowrap">
            
            {/* LEFT COLUMN: Main textual titles & highlights */}
            <div className="col-6 position-relative mb-md-0">
              
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
              <div className="row g-4 flex-nowrap">
                
                {/* Feature 1: Nurturing Hearts */}
                <div className="col-6 d-flex align-items-center">
                  <div className="feature-icon-circle" style={{ backgroundColor: '#FF3B7A' }}>
                    {love ? (
                      <img src={love} alt="Love icon" style={{ width: '70px', height: '70px' }} />
                    ) : (
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>❤️</span>
                    )}
                  </div>
                  <div>
                    <h5 className="fw-bold m-0 text-dark feature-title">Nuturing Hearts</h5>
                    <p className="small text-muted m-0 fw-medium feature-desc">We care with love and compassion</p>
                  </div>
                </div>

                {/* Feature 2: Building Future */}
                <div className="col-6 d-flex align-items-center">
                  <div className="feature-icon-circle" style={{ backgroundColor: '#42A5F5' }}>
                    {tick ? (
                      <img src={tick} alt="Blue tick icon" style={{ width: '70px', height: '70px' }} />
                    ) : (
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>🛡️</span>
                    )}
                  </div>
                  <div>
                    <h5 className="fw-bold m-0 text-dark feature-title">Building Future</h5>
                    <p className="small text-muted m-0 fw-medium feature-desc">We prepare children for a bright tomorrow</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Large Sweeping Layout Image Box */}
            <div className="col-6 p-0 d-flex justify-content-end">
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
                  Who We Are
                </span>
              </h2>
              <p className="fs-5 text-secondary mt-3" style={{ lineHeight: '1.7', fontWeight: '400' }}>
                Sunshine Nursery welcomes children from 45 days to 4 years old, providing high-quality early years education in a safe, caring, and stimulating environment. We follow the Early Years Foundation Stage (EYFS) curriculum, ensuring every child receives a well-rounded education that supports their personal, social, emotional, physical, and cognitive development.
              </p>
              <p className="fs-5 text-secondary" style={{ lineHeight: '1.7', fontWeight: '400' }}>
                Our dedicated team believes that children learn best through play, exploration, and meaningful experiences.
                We encourage independence, curiosity, and child-led learning, allowing each child to discover the world in a way that is natural and engaging for them.
              </p>
            </div>
          </div>

          {/* APPROACH, SUPPORT, PARTNERSHIP & PROMISE CARDS GRID */}
          <div className="row g-4 mt-2">
            
            {/* Card 1: Our Learning Approach (Full Width Layout - Centered) */}
            <div className="col-12">
              <div className="p-4 p-md-5 card-mission-box d-flex flex-column align-items-center text-center shadow-sm">
                <div className="d-flex flex-column align-items-center mb-3">
                  <div 
        className="mb-2 rounded-circle overflow-hidden d-flex align-items-center justify-content-center" 
        style={{ width: '80px', height: '80px' }}
      >
        <img 
          src={arrow} 
          alt="arrow Icon" 
          className="w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
                  <h4 className="fw-bold m-0" style={{ color: '#FF3B7A' }}>Our Learning Approach</h4>
                </div>
                <p className="text-dark fw-medium mb-3" style={{ fontSize: '0.98rem', lineHeight: '1.6', maxWidth: '900px' }}>
                  Our spacious classrooms are thoughtfully designed to encourage exploration, creativity, and independent learning. Inspired by the Reggio Emilia approach, our learning spaces are calm, inviting, and rich with opportunities for discovery, where children are free to investigate, create, and develop through hands-on experiences.
                </p>
                <p className="fw-bold text-dark mb-3" style={{ fontSize: '0.95rem' }}>
                  Alongside the EYFS curriculum, we enrich each child’s learning journey with:
                </p>
                <ul className="list-unstyled m-0 text-dark fw-medium mx-auto" style={{ fontSize: '0.92rem', lineHeight: '1.6', maxWidth: '850px' }}>
                  <li className="mb-2"><strong>Arabic and Islamic lessons:</strong> With a strong focus on the UAE National Identity, helping children develop a sense of belonging and appreciation for the country’s culture and values.</li>
                  <li className="mb-2"><strong>French language classes:</strong> Introducing children to a new language through fun and interactive activities.</li>
                  <li><strong>Music and Gymnastics sessions:</strong> Led by our experienced Japanese Sensei, promoting physical development, coordination, creativity, and confidence.</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Supporting Every Child (50% Width - Centered) */}
            <div className="col-12 col-lg-6">
              <div className="h-100 p-4 p-md-5 d-flex flex-column align-items-center text-center shadow-sm" style={{ backgroundColor: '#E8F8F5', border: '2px solid #A3E4D7', borderRadius: '24px' }}>
                <div className="d-flex flex-column align-items-center mb-3">
                  <div 
        className="mb-2 rounded-circle overflow-hidden d-flex align-items-center justify-content-center" 
        style={{ width: '80px', height: '80px' }}
      >
        <img 
          src={care} 
          alt="care Icon" 
          className="w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
                  <h4 className="fw-bold m-0" style={{ color: '#16A085' }}>Supporting Every Child</h4>
                </div>
                <p className="text-dark fw-medium m-0" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                  Every child develops in their own unique way. To ensure each child receives the support they need, Sunshine Nursery has an experienced Special Educational Needs (SEN) Specialist who provides guidance for children who may benefit from additional support, including behavioural development and minor speech delays, working closely with both teachers and families.
                </p>
              </div>
            </div>

            {/* Card 3: Partnering with Parents (50% Width - Centered) */}
            <div className="col-12 col-lg-6">
              <div className="h-100 p-4 p-md-5 d-flex flex-column align-items-center text-center shadow-sm" style={{ backgroundColor: '#FEF9E7', border: '2px solid #F9E79F', borderRadius: '24px' }}>
                <div className="d-flex flex-column align-items-center mb-3">
      <div 
        className="mb-2 rounded-circle overflow-hidden d-flex align-items-center justify-content-center" 
        style={{ width: '80px', height: '80px' }}
      >
        <img 
          src={shake} 
          alt="shake Icon" 
          className="w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
                  <h4 className="fw-bold m-0" style={{ color: '#D4AC0D' }}>Partnering with Parents</h4>
                </div>
                <p className="text-dark fw-medium m-0" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                  We believe that parents are a child’s first and most important teachers. By building strong partnerships with families, we create a consistent and supportive learning journey for every child. Throughout the year, we host a variety of celebrations, workshops, and special events where parents are warmly welcomed to participate, creating meaningful memories together and strengthening our nursery community.
                </p>
              </div>
            </div>

            {/* Card 4: Our Promise */}
<div className="col-12">
  <div className="p-4 p-md-5 d-flex flex-column align-items-center text-center shadow-sm" style={{ backgroundColor: '#FADBD8', border: '2px solid #F5B7B1', borderRadius: '24px' }}>
    
    {/* Centered Circle Image Wrapper */}
    <div 
      className="mb-3 rounded-circle overflow-hidden flex-shrink-0 mx-auto" 
      style={{ width: '90px', height: '90px' }}
    >
      <img 
        src={promise} 
        alt="Our Promise" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
      />
    </div>

    <h4 className="fw-bold mb-3" style={{ color: '#C0392B' }}>Our Promise</h4>
    <p className="text-dark fw-medium mx-auto m-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '800px' }}>
      Every child is unique, and every childhood matters. We provide a nurturing environment where curiosity is celebrated, confidence grows, and a love of learning begins.
    </p>
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

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
            
            {/* Teacher 1: Mireilie Saad */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={mireilie} alt="Mireilie Saad" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.3rem' }}>Mireilie Saad</h4>
                <p className="text-secondary fw-semibold m-0" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                  SEN Coordinator
                </p>
              </div>
            </div>

            {/* Teacher 2: Keiko Fujie */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={keiko} alt="Keiko Fujie" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.3rem' }}>Keiko Fujie</h4>
                <p className="text-secondary fw-semibold m-0" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Gymnastics &amp; Music Teacher
                </p>
              </div>
            </div>

            {/* Teacher 3: Kholoud Abu Zaid */}
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={kholoud} alt="Kholoud Abu Zaid" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.3rem' }}>Kholoud Abu Zaid</h4>
                <p className="text-secondary fw-semibold m-0" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Arabic Teacher
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