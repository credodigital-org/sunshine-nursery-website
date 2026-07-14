import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/HeroImages/logo.jpg";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <nav
      className="navbar"
      style={{
        background: isHomePage ? "transparent" : "#78DAFC",
      }}
    >
      <div className="navbar-container">

        {/* Logo */}

        <div class="logo-3d-container">
  <div class="logo-3d-card">
    <img src={logo} alt="Sunshine Nursery Logo" class="logo-front" />
    
    <div class="logo-depth"></div>
  </div>
</div>

        {/* Hamburger */}

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            end
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/programs"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Programs
          </NavLink>

          <NavLink
            to="/gallery"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contactus"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>

        </div>

      </div>
    </nav>
  );
}