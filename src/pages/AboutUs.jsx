import React from 'react';
import './AboutUs.css'; 

import school from '../assets/AboutUsImages/school.png';
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
    <main className="about-us-page">
      <section className="about-story-container py-2 py-md-4">
        <div className="container">
          
          {/* Main Heading -> Image -> Text Stack */}
          {/* Reduced mb-5 to responsive mb-2 mb-md-5 to close the bottom gap */}
          <div className="row justify-content-center text-center mb-2 mb-md-5">
            
            {/* 1. Main Heading */}
            <div className="col-12 mb-2 mb-md-4">
              <h1 className="display-4 fw-bold story-main-heading">
                Who We Are
              </h1>
            </div>

            {/* 2. School Image */}
            <div className="col-12 col-md-10 col-lg-8 mb-2 mb-md-4">
              <div className="story-img-wrapper overflow-hidden rounded-4 shadow-sm">
                <img 
                  src={school}
                  alt="Sunshine Nursery School Building" 
                  className="img-fluid w-100 story-main-img"
                />
              </div>
            </div>

            {/* 3. Paragraph Content */}
            <div className="col-12 col-md-11 col-lg-10 text-center">
              <p className="story-text mb-2 mt-4">
                Sunshine Nursery welcomes children from 45 days to 4 years old, providing high-quality early years education in a safe, caring, and stimulating environment. We follow the Early Years Foundation Stage (EYFS) curriculum, ensuring every child receives a well-rounded education that supports their personal, social, emotional, physical, and cognitive development.
              </p>
              <p className="story-text mb-0">
                Our dedicated team believes that children learn best through play, exploration, and meaningful experiences.
                We encourage independence, curiosity, and child-led learning, allowing each child to discover the world in a way that is natural and engaging for them.
              </p>
            </div>

          </div>

          {/* Cards Grid */}
          {/* Tighter row margin for mobile */}
          <div className="row g-3 g-md-4 mt-0 mt-md-2">
            <div className="col-12">
              <div className="p-3 p-md-5 card-feature-box d-flex flex-column align-items-center text-center shadow-sm">
                <div className="d-flex flex-column align-items-center mb-2 mb-md-3">
                  <div className="icon-circle mb-2 overflow-hidden d-flex align-items-center justify-content-center">
                    <img src={arrow} alt="Learning Approach Icon" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <h3 className="fw-bold m-0 text-pink">Our Learning Approach</h3>
                </div>
                <p className="text-dark fw-medium mb-3 card-paragraph">
                  Our spacious classrooms are thoughtfully designed to encourage exploration, creativity, and independent learning. Inspired by the Reggio Emilia approach, our learning spaces are calm, inviting, and rich with opportunities for discovery, where children are free to investigate, create, and develop through hands-on experiences.
                </p>
                <p className="fw-bold text-dark mb-3 card-subheading">
                  Alongside the EYFS curriculum, we enrich each child’s learning journey with:
                </p>
                <ul className="list-unstyled m-0 text-dark fw-medium mx-auto card-list">
                  <li className="mb-2"><strong>Arabic and Islamic lessons:</strong> With a strong focus on the UAE National Identity, helping children develop a sense of belonging and appreciation for the country’s culture and values.</li>
                  <li className="mb-2"><strong>French language classes:</strong> Introducing children to a new language through fun and interactive activities.</li>
                  <li><strong>Music and Gymnastics sessions:</strong> Led by our experienced Japanese Sensei, promoting physical development, coordination, creativity, and confidence.</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="h-100 p-3 p-md-5 card-feature-box card-teal d-flex flex-column align-items-center text-center shadow-sm">
                <div className="d-flex flex-column align-items-center mb-2 mb-md-3">
                  <div className="icon-circle mb-2 overflow-hidden d-flex align-items-center justify-content-center">
                    <img src={care} alt="Care Icon" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <h3 className="fw-bold m-0 text-teal">Supporting Every Child</h3>
                </div>
                <p className="text-dark fw-medium m-0 card-paragraph">
                  Every child develops in their own unique way. To ensure each child receives the support they need, Sunshine Nursery has an experienced Special Educational Needs (SEN) Specialist who provides guidance for children who may benefit from additional support, including behavioural development and minor speech delays, working closely with both teachers and families.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="h-100 p-3 p-md-5 card-feature-box card-yellow d-flex flex-column align-items-center text-center shadow-sm">
                <div className="d-flex flex-column align-items-center mb-2 mb-md-3">
                  <div className="icon-circle mb-2 overflow-hidden d-flex align-items-center justify-content-center">
                    <img src={shake} alt="Handshake Icon" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <h3 className="fw-bold m-0 text-gold">Partnering with Parents</h3>
                </div>
                <p className="text-dark fw-medium m-0 card-paragraph">
                  We believe that parents are a child’s first and most important teachers. By building strong partnerships with families, we create a consistent and supportive learning journey for every child. Throughout the year, we host a variety of celebrations, workshops, and special events where parents are warmly welcomed to participate, creating meaningful memories together and strengthening our nursery community.
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="p-3 p-md-5 card-feature-box card-red d-flex flex-column align-items-center text-center shadow-sm">
                <div className="icon-circle circle-lg mb-2 mb-md-3 overflow-hidden flex-shrink-0 mx-auto">
                  <img src={promise} alt="Our Promise Icon" className="w-100 h-100 object-fit-cover" />
                </div>
                <h3 className="fw-bold mb-2 mb-md-3 text-red">Our Promise</h3>
                <p className="text-dark fw-medium mx-auto m-0 card-paragraph max-w-800">
                  Every child is unique, and every childhood matters. We provide a nurturing environment where curiosity is celebrated, confidence grows, and a love of learning begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="section-title text-pink fw-bold">
              What Makes Us Special ♡
            </h2>
          </div>

          <div className="row justify-content-center g-4 row-cols-2 row-cols-sm-3 row-cols-md-5">
            <div className="col d-flex flex-column align-items-center text-center">
              <div className="special-icon-wrapper rounded-circle d-flex align-items-center justify-content-center mb-3 bg-green">
                <img src={contact} alt="Child centered approach" className="w-100 h-100 object-fit-contain" />
              </div>
              <h5 className="fw-bold text-dark special-item-title">Child-centered Approach</h5>
              <p className="text-secondary small mb-0 special-item-desc">
                We focus on each child's individual needs and learning style.
              </p>
            </div>

            <div className="col d-flex flex-column align-items-center text-center">
              <div className="special-icon-wrapper rounded-circle d-flex align-items-center justify-content-center mb-3 bg-gold">
                <img src={yellow} alt="Safe environment" className="w-100 h-100 object-fit-contain" />
              </div>
              <h5 className="fw-bold text-dark special-item-title">Safe & Secure Environment</h5>
              <p className="text-secondary small mb-0 special-item-desc">
                Hygienic, secure, and child-friendly spaces for peace of mind.
              </p>
            </div>

            <div className="col d-flex flex-column align-items-center text-center">
              <div className="special-icon-wrapper rounded-circle d-flex align-items-center justify-content-center mb-3 bg-pink">
                <img src={degree} alt="Qualified educators" className="w-100 h-100 object-fit-contain" />
              </div>
              <h5 className="fw-bold text-dark special-item-title">Qualified & Caring Educators</h5>
              <p className="text-secondary small mb-0 special-item-desc">
                Experienced teachers who inspire, guide, and support every child.
              </p>
            </div>

            <div className="col d-flex flex-column align-items-center text-center">
              <div className="special-icon-wrapper rounded-circle d-flex align-items-center justify-content-center mb-3 bg-purple">
                <img src={blue} alt="Play based learning" className="w-100 h-100 object-fit-contain" />
              </div>
              <h5 className="fw-bold text-dark special-item-title">Play-Based Learning</h5>
              <p className="text-secondary small mb-0 special-item-desc">
                Learning through play, exploration, and fun activities.
              </p>
            </div>

            <div className="col d-flex flex-column align-items-center text-center">
              <div className="special-icon-wrapper rounded-circle d-flex align-items-center justify-content-center mb-3 bg-blue">
                <img src={fam} alt="Parent partnership" className="w-100 h-100 object-fit-contain" />
              </div>
              <h5 className="fw-bold text-dark special-item-title">Strong Parent Partnership</h5>
              <p className="text-secondary small mb-0 special-item-desc">
                We work closely with parents for holistic child development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container text-center">
          <div className="mb-4 mb-md-5">
            <h2 className="section-title text-pink fw-bold">
              Meet Our Team ♡
            </h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper shadow-sm rounded-4">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={mireilie} alt="Mireilie Saad" className="w-100 h-100 team-avatar-img" />
                </div>
                <h4 className="fw-bold text-dark mb-1 team-name">Mireilie Saad</h4>
                <p className="text-secondary fw-semibold m-0 team-role">SEN Coordinator</p>
              </div>
            </div>

            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper shadow-sm rounded-4">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={keiko} alt="Keiko Fujie" className="w-100 h-100 team-avatar-img" />
                </div>
                <h4 className="fw-bold text-dark mb-1 team-name">Keiko Fujie</h4>
                <p className="text-secondary fw-semibold m-0 team-role">Gymnastics &amp; Music Teacher</p>
              </div>
            </div>

            <div className="col">
              <div className="h-100 p-4 d-flex flex-column align-items-center team-card-wrapper shadow-sm rounded-4">
                <div className="mb-3 overflow-hidden rounded-circle team-avatar-box">
                  <img src={kholoud} alt="Kholoud Abu Zaid" className="w-100 h-100 team-avatar-img" />
                </div>
                <h4 className="fw-bold text-dark mb-1 team-name">Kholoud Abu Zaid</h4>
                <p className="text-secondary fw-semibold m-0 team-role">Arabic Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <CTA />
    </main>
  );
}