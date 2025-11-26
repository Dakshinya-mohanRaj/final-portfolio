// src/App.jsx
import React, { useState, useEffect } from "react";
import DaksheeImg from "./assets/Dakshee.png";
import TeddyGif from "./assets/teddy.gif";   // Place your teddy GIF here
import "./App.css";



export default function App() {
  const [isSplit, setIsSplit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);
  const handleTeddyClick = () => setIsSplit(prev => !prev);

  // Skills array for About section
  const skills = [
    { name: "HTML5", icon: <i className="fab fa-html5"></i> },
    { name: "CSS3", icon: <i className="fab fa-css3-alt"></i> },
    { name: "JavaScript", icon: <i className="fab fa-js-square"></i> },
    { name: "React", icon: <i className="fab fa-react"></i> },
    {
      name: "Vite",
      icon: (
        <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.2 2.4L12.8 22.8L12 21.2L22.4 2.4C22.8 1.6 23.2 2 23.2 2.4ZM9.6 2.4L0 20.8L1.6 21.6L10.4 4.8L19.2 21.6L20.8 20.8L11.2 2.4H9.6Z" />
        </svg>
      ),
    },
    { name: "Firebase", icon: <i className="fas fa-fire-alt"></i> },
  ];

  return (
    <>
      {/* Fonts & Icons */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Sacramento&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* Decorative Blobs */}
      <div className="blob b1" aria-hidden="true"></div>
      <div className="blob b2" aria-hidden="true"></div>
      <div className="blob b3" aria-hidden="true"></div>

      {/* Corner Spray Effect */}
      <div className="corner-spray top-left">
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle heart">♥</div>
        <div className="spray-particle sparkle"></div>
        <div className="spray-particle heart">✧</div>
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle sparkle"></div>
      </div>
      <div className="corner-spray top-right">
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle heart">♥</div>
        <div className="spray-particle sparkle"></div>
        <div className="spray-particle heart">✧</div>
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle sparkle"></div>
      </div>
      <div className="corner-spray bottom-left">
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle heart">♥</div>
        <div className="spray-particle sparkle"></div>
        <div className="spray-particle heart">✧</div>
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle sparkle"></div>
      </div>
      <div className="corner-spray bottom-right">
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle heart">♥</div>
        <div className="spray-particle sparkle"></div>
        <div className="spray-particle heart">✧</div>
        <div className="spray-particle heart">♡</div>
        <div className="spray-particle sparkle"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo">Dakshinya</div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Hello, I'm </h1>
            <h1><span>Dakshinya</span></h1>
            <p>Aesthetic Frontend Developer crafting smooth, soft, pastel-inspired web experiences.</p>
          </div>
          <div className="hero-img" aria-hidden="false">
            <img src={DaksheeImg} alt="Dakshinya" />
          </div>
        </div>
      </section>
      

      {/* About */}
      <section id="about" className="section">
        <div className="about-minimal">
          <h2>About Me</h2>
          <div className="about-content">
            <p className="lead">
              I’m a passionate B.E. Computer Science and Engineering student specializing in frontend development.
            </p>
            <p>
              <span className="soft-highlight">
                Currently building with <strong>React + Vite</strong> for instant performance.
              </span>
            </p>

            {/* Skills with theme tooltip (no browser tooltip) */}
            <div className="skills-minimal">
              {skills.map((skill, idx) => (
                <span key={idx} data-name={skill.name}>
                  {skill.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="projects-minimal">
          <h2>My Projects</h2>

          <div className="deck-with-teddy">
            {/* Project Deck */}
            <div className={`project-deck ${isSplit ? "split" : ""}`}>
              {/* Cards (card1–card5) */}
              <div className="project-card" id="card1">
                <div className="card-content">
                  <h3>Portfolio Website</h3>
                  <p>A soft, aesthetic personal site with smooth animations.</p>
                  <span className="tech">React • Vite • CSS</span>
                </div>
                <a href="https://dakshinya-mohanraj.github.io/portfolio/" target="_blank" rel="noreferrer" className="view-btn">View Live</a>
              </div>
              <div className="project-card" id="card2">
                <div className="card-content">
                  <h3>Nail Glam Website</h3>
                  <p>Real-time todo app with drag & drop, Firebase sync.</p>
                  <span className="tech">HTML / CSS • Firebase</span>
                </div>
                <a href="https://dakshinya-mohanraj.github.io/nail-glam/" target="_blank" rel="noreferrer" className="view-btn">View Live</a>
              </div>
              <div className="project-card" id="card3">
                <div className="card-content">
                  <h3>E-commerce Shop</h3>
                  <p>A modern e-commerce site with shopping cart functionality.</p>
                  <span className="tech">React • Redux • Stripe</span>
                </div>
                <a href="#" className="view-btn">View Live</a>
              </div>
              <div className="project-card" id="card4">
                <div className="card-content">
                  <h3>Blog Platform</h3>
                  <p>A blogging platform with user authentication & comments.</p>
                  <span className="tech">Next.js • MongoDB • Tailwind</span>
                </div>
                <a href="#" className="view-btn">View Live</a>
              </div>
              <div className="project-card" id="card5">
                <div className="card-content">
                  <h3>Weather App</h3>
                  <p>Live weather forecasts with geolocation and API integration.</p>
                  <span className="tech">React • OpenWeather API • CSS</span>
                </div>
                <a href="#" className="view-btn">View Live</a>
              </div>
            </div>

            {/* Teddy */}
            <img src={TeddyGif} alt="Teddy" className="single-teddy" onClick={handleTeddyClick} />
            <p className="teddy-hint">Click me to split & stack 💗</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-card">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-sub">I'm always open to collaboration & opportunities</p>
          <div className="contact-icons">
          <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dakshee02@gmail.com" 
          className="contact-orb" 
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fas fa-envelope"></i>
          </a>

            <a href="https://github.com/Dakshinya-mohanRaj" target="_blank" rel="noreferrer" className="contact-orb" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dakshinya-mohan-raj-6a311732b/" target="_blank" rel="noreferrer" className="contact-orb" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-name" aria-hidden="true">
        DAKSHINYA <br /> MOHAN RAJ
      </div>

      <footer>© 2025 Dakshinya — All Rights Reserved</footer>
    </>
  );
}

