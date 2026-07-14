import React from 'react';
import yellow from '../assets/yellow.png';
import pink from '../assets/pink.png';
import blue from '../assets/blue.png';
import green from '../assets/green.png';


export default function StatsSection() {
  const statsData = [
    { id: 1, icon: yellow, number: "150+", label: "Happy Students" },
    { id: 2, icon: pink, number: "15+", label: "Qualified Teachers" },
    { id: 3, icon: blue, number: "5+", label: "Years of Trust" },
    { id: 4, icon: green, number: "100%", label: "Safe & Secure" },
  ];

  return (
    <section className="py-4 bg-white" style={{fontFamily: 'sans-serif' }}>
      <div className="container">
        {/* Main Card Container */}
        <div 
          className="p-4 rounded-5" 
          style={{ backgroundColor: '#EBF3FC',borderRadius: '30px' }}
        >
          <div className="row g-3 align-items-center justify-content-center">
            {statsData.map((stat, index) => (
              <div 
                key={stat.id} 
                className="col-12 col-sm-6 col-md-3 d-flex align-items-center justify-content-center gap-3 py-2"
                style={{
                  // Draws a crisp dashed line on desktop between the items
                  borderRight: index !== statsData.length - 1 && window.innerWidth >= 768 
                    ? '1.5px dashed #A0AEC0' 
                    : 'none'
                }}
              >
                {/* Image / Icon container */}
                <div style={{ width: '65px', height: '65px' }} className="flex-shrink-0 d-flex align-items-center justify-content-center">
                  {stat.icon && (
                    <img 
                      src={stat.icon} 
                      alt={stat.label} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  )}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="fw-bold mb-0 lh-1" style={{ color: '#E84E88' }}>
                    {stat.number}
                  </h3>
                  <p className="text-dark fw-bold mb-0 mt-1 small" style={{ letterSpacing: '0.3px' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}