import React from "react";
import "./About.css";

import yellow from "../assets/HeroImages/yellow.png";
import pink from "../assets/HeroImages/pink.png";
import blue from "../assets/HeroImages/blue.png";
import green from "../assets/HeroImages/green.png";

export default function StatsSection() {
  const statsData = [
    { id: 1, icon: yellow, number: "150+", label: "Happy Students" },
    { id: 2, icon: pink, number: "15+", label: "Qualified Teachers" },
    { id: 3, icon: blue, number: "5+", label: "Years of Trust" },
    { id: 4, icon: green, number: "100%", label: "Safe & Secure" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-card">
          <div className="row g-0">

            {statsData.map((stat, index) => (
              <div
                key={stat.id}
                className={`col-12 col-sm-6 col-md-3 stats-item ${
                  index !== statsData.length - 1 ? "border-desktop" : ""
                }`}
              >
                <div className="stats-icon">
                  <img src={stat.icon} alt={stat.label} />
                </div>

                <div className="stats-content">
                  <h3 className="stats-number">{stat.number}</h3>
                  <p className="stats-label">{stat.label}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}