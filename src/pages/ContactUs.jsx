import React, { useState } from 'react'
import sun from '../assets/aboutUsImages/sun.png';
import cloud from '../assets/aboutUsImages/cloud.png';
import wave from '../assets/aboutUsImages/wave.png';
import children from '../assets/ContactUsImages/children.png';
import slide from '../assets/HeroImages/slide.jpg';
import flower1 from '../assets/GalleryImages/flower1.png'; 
import callicon from '../assets/ContactUsImages/call.png';
import emailicon from '../assets/ContactUsImages/email.png';
import location from '../assets/ContactUsImages/location.png';
import time from '../assets/ContactUsImages/time.png';
import school from '../assets/aboutUsImages/school.png';
import map from '../assets/ContactUsImages/map.png';
import mapname from '../assets/ContactUsImages/mapname.png';

import About from "../sections/About";
import CTA from '../sections/CTA';
import './ContactUs.css'; // Ensure you import the newly created stylesheet!

function ContactUs() {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [message, setMessage]= useState('');

    const sendMessage =(m)=>{
        m.preventDefault();
        const companyEmail = "info@sunshinenursery.ae";
        const subject = encodeURIComponent(`New Inqiuiry from ${name}`);

        const bodyText= `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: +971 ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${bodyText}`;
    }
  return (
    <>
    <div className="contact-hero-wrapper" style={{ 
      background: 'linear-gradient(95deg, #A8D6FF 0%, #C0E1FF 100%)',
        paddingTop: '250px', 
        paddingBottom: '100px', 
        fontFamily: "'Fredoka', sans-serif", 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '95vh'
    }}>
        <div className="container">
                  <div className="row align-items-center contact-hero-row">
                    
                    {/* LEFT COLUMN */}
                    <div className="col-12 col-md-6 position-relative mb-5 mb-md-0 contact-text-panel">
                      {sun && (
                        <img 
                          src={sun} 
                          alt="Sun decoration" 
                          className="contact-decor-sun"
                          style={{ position: 'absolute', top: '-60px', left: '530px', width: '100px', height: '100px' }} 
                        />
                      )}
        
                      <h2 className="display-6 fw-bold text-dark p-3 m-0 contact-title">Contact <span style={{ color: '#ED5085' }}>Us</span>
                      </h2>
        
                      <p className="fs-5 fw-bold p-3 contact-lead-text" style={{color:'#000000'}}>
                        A glimpse into the joyful learning, <br/>
                        laughter, and love that fill our days.
                      </p>
                    </div>
        
                    {/* RIGHT COLUMN */}
                    <div className="col-12 col-md-6 p-0 d-flex justify-content-end contact-image-panel">
                      <div className="contact-kids-mask" style={{
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
                          className="contact-kids-img"
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
                  <div className="contact-decor-flower1" style={{ position: 'absolute', top: '515px', left: '1px', zIndex: 5 }}>
                    <img src={flower1} alt="grass left" style={{ width: '100%', height: '150px' }} />
                  </div>

                </div>
                
                {/* Wave Layer */}
                {wave && (
                  <img 
                    src={wave} 
                    alt="wave decor" 
                    className="contact-bottom-wave"
                    style={{
                      position: 'absolute',
                      bottom: '-2px', 
                      left: '0',
                      width: '100%',
                      height: 'auto',
                      filter: 'drop-shadow(0px -8px 0px #ED5085)',
                      zIndex: '5'
                    }}
                  />
                )}
    </div>

    {/* --- CONTACT LAYOUT INFO & INPUT FORM SECTION --- */}
    <section className="contact-form-section" style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '60px', fontFamily: "'Fredoka', sans-serif" }}>
      <div className="container">
        <form onSubmit={sendMessage} className="row g-4 align-items-stretch">
          
          {/* LEFT SIDE: CONTACT INFO CARDS */}
          <div className="col-12 col-md-5 d-flex flex-column gap-3 contact-cards-wrapper">
            
            {/* Call Us Card */}
            <div className="p-3 d-flex align-items-center gap-3 contact-info-card" style={{ border: '1px solid #FFCCD5', borderRadius: '15px', backgroundColor: '#fff' }}>
              <div className="d-flex align-items-center justify-content-center contact-card-icon" style={{ width: '60px', height: '60px', backgroundColor: '#E94E77', borderRadius: '15px', overflow: 'hidden' }}>
                <img src={callicon} alt="Call Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <h5 className="m-0 fw-bold" style={{ color: '#E94E77' }}>Call US</h5>
                <a href="tel:024499966" style={{ textDecoration: 'none', color: 'inherit' }}>024499966</a>
                <small className="text-muted d-block">Sun - thu: 8:00 AM - 4:00PM</small>
                <small className="text-muted d-block">Friday:Closed</small>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="p-3 d-flex align-items-center gap-3 contact-info-card" style={{ border: '1px solid #FFCCD5', borderRadius: '15px', backgroundColor: '#fff' }}>
              <div className="d-flex align-items-center justify-content-center contact-card-icon" style={{ width: '60px', height: '60px', backgroundColor: '#2196F3', borderRadius: '15px', overflow: 'hidden' }}>
                <img src={emailicon} alt="Email Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <h5 className="m-0 fw-bold" style={{ color: '#2196F3' }}>Email us</h5>
                <p className="m-0 fw-bold text-dark">info@sunshinenursery.ae</p>
                <small className="text-muted">We're respond within 24 hours.</small>
              </div>
            </div>

            {/* Visit Us Card */}
            <div className="p-3 d-flex align-items-center gap-3 contact-info-card" style={{ border: '1px solid #FFCCD5', borderRadius: '15px', backgroundColor: '#fff' }}>
              <div className="d-flex align-items-center justify-content-center contact-card-icon" style={{ width: '60px', height: '60px', backgroundColor: '#5FAF37', borderRadius: '15px', overflow: 'hidden' }}>
                <img src={location} alt="Location Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <h5 className="m-0 fw-bold" style={{ color: '#5FAF37' }}>Visit Us</h5>
                <p className="m-0 fw-bold text-dark">Sunshine Nursery</p>
                <small className="text-muted d-block">22 Al Tayseer St - Al Manhal - W13-02 - Abu Dhabi</small>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="p-3 d-flex align-items-center gap-3 contact-info-card" style={{ border: '1px solid #FFCCD5', borderRadius: '15px', backgroundColor: '#fff' }}>
              <div className="d-flex align-items-center justify-content-center contact-card-icon" style={{ width: '60px', height: '60px', backgroundColor: '#8A56AC', borderRadius: '15px', overflow: 'hidden' }}>
                <img src={time} alt="Hours Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <h5 className="m-0 fw-bold" style={{ color: '#FF3B7A' }}>Office Hourse</h5>
                <small className="text-muted d-block">Sun - thu: 8:00 AM - 4:00PM</small>
                <small className="text-muted d-block">Friday:Closed</small>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: MESSAGE FORM */}
          <div className="col-12 col-md-7 contact-form-wrapper">
            <div className="p-4 h-100 d-flex flex-column gap-3" style={{ border: '1px solid #FFCCD5', borderRadius: '15px', backgroundColor: '#fff' }}>
              
              <h4 className="fw-bold mb-2" style={{ color: '#E94E77' }}>Send Us a Message</h4>
              
              {/* Name Input */}
              <div className="input-group" style={{ border: '1px solid #FFCCD5', borderRadius: '10px', overflow: 'hidden' }}>
                <span className="input-group-text bg-white border-0 text-muted">👤</span>
                <input type="text" className="form-control border-0 py-2 shadow-none" placeholder="Your Name" required
                  value={name}
                  onChange={(m) => setName(m.target.value)} />
              </div>

              {/* Email Input */}
              <div className="input-group" style={{ border: '1px solid #FFCCD5', borderRadius: '10px', overflow: 'hidden' }}>
                <span className="input-group-text bg-white border-0 text-muted">✉️</span>
                <input type="email" className="form-control border-0 py-2 shadow-none" placeholder="Your Email" required
                  value={email}
                  onChange={(m) => setEmail(m.target.value)} />
              </div>

              {/* Country Code + Phone Row */}
              <div className="row g-2">
                <div className="col-4 col-sm-3">
                  <div style={{ border: '1px solid #FFCCD5', borderRadius: '10px', overflow: 'hidden' }}>
                    <select className="form-select border-0 py-2 shadow-none text-muted" style={{ fontSize: '14px' }}>
                      <option>UAE +971</option>
                    </select>
                  </div>
                </div>
                <div className="col-8 col-sm-9">
                  <div style={{ border: '1px solid #FFCCD5', borderRadius: '10px', overflow: 'hidden' }}>
                    <input type="tel" className="form-control border-0 py-2 shadow-none" placeholder="Enter Phone Number" required
                  value={phone}
                  onChange={(m) => setPhone(m.target.value)}/>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div style={{ border: '1px solid #FFCCD5', borderRadius: '10px', overflow: 'hidden' }}>
                <textarea className="form-control border-0 py-2 shadow-none" rows="4" placeholder="Your Message...... " style={{ resize: 'none' }} required
                  value={message}
                  onChange={(m) => setMessage(m.target.value)}></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button type="submit" className="btn fw-bold text-white px-4 py-2 contact-submit-btn" style={{ backgroundColor: '#E94E77', borderRadius: '15px', fontSize: '18px', border: 'none' }}>
                  Send Message
                </button>
              </div>

            </div>
          </div>

        </form>
      </div>
    </section>

    {/* --- MAP AND EXTERIOR SECTION --- */}
    <section className="contact-map-section" style={{ backgroundColor: '#ffffff', paddingBottom: '40px', fontFamily: "'Fredoka', sans-serif" }}>
  <div className="container">
    <div className="row g-4 align-items-stretch contact-map-row">
      
      {/* LEFT COLUMN: Map Card */}
      <div className="col-12 col-md-6 contact-map-col">
        <div className="p-4 h-100" style={{ border: '1px solid #FFCCD5', borderRadius: '15px', backgroundColor: '#fff' }}>
          <h4 className="fw-bold mb-3" style={{ color: '#5FAF37' }}>Find Us Here</h4>
          <div className="contact-map-container" style={{ borderRadius: '15px', overflow: 'hidden', height: '320px', position:'relative'}}>
            <img 
              src={map}
              alt="Sunshine Nursery Map Location" 
              className="contact-map-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <a 
  href="https://maps.google.com/?q=Sunshine+Nursery,+22+Al+Tayseer+St+-+Al+Manhal+-+W13-02,+Abu+Dhabi" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Open Sunshine Nursery in Google Maps"
  style={{ 
    position: 'absolute', 
    bottom: '60px',
    right: '60px',
    zIndex: 10,
    display: 'block'
  }}
>
  <img 
    src={mapname}
    alt="Location Details" 
    className="contact-mapname-badge"
    style={{ 
      width: '200px',       
      height: 'auto',
      display: 'block',
      cursor: 'pointer' /* Adds a hand pointer cursor to show it's clickable */
    }} 
  />
</a>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Nursery Exterior Image */}
      <div className="col-12 col-md-6 contact-school-col">
        <div className="contact-school-img-wrapper" style={{ borderRadius: '15px', overflow: 'hidden', height: '100%', minHeight: '380px' }}>
          <img 
            src={school} 
            alt="Sunshine Nursery Building Exterior" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
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

export default ContactUs