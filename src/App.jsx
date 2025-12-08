// src/App.jsx
import React, { useState, useEffect } from "react";
import DaksheeImg from "./assets/Dakshee.png";
import TeddyGif from "./assets/teddy.gif";
import "./App.css";
import MemoryGame from "./MemoryGame.jsx";

export default function App() {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // ⭐ CLICK NAVIGATION
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ⭐ SCROLL DETECTOR FOR AUTO-HIGHLIGHT
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      let current = "home";

      sectionIds.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;

        const rect = sec.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTeddyClick = () => setIsSplit((prev) => !prev);

  // Skills
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

  // Show game first
  if (!gameCompleted) {
    return <MemoryGame onComplete={() => setGameCompleted(true)} />;
  }

  // Portfolio Content
  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Sacramento&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* Blobs */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>

      {/* ⭐ NAVBAR WITH ACTIVE HIGHLIGHT */}
      <nav className="navbar">
        <div className="logo">Dakshinya</div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Hello, I'm</h1>
            <h1>
              <span>Dakshinya</span>
            </h1>
            <p>Aesthetic Frontend Developer crafting smooth, pastel experiences.</p>
          </div>
          <div className="hero-img">
            <img src={DaksheeImg} alt="Dakshinya" />
          </div>
        </div>
      </section>

      {/* ABOUT (YOUR CONTAINER KEPT SAME) */}
      <section id="about" className="section">
        <div className="about-minimal">
          <h2>About Me</h2>

          <div className="about-content">
            <p className="lead">I’m a passionate B.E. CSE student specializing in frontend development.</p>
            <p>
              <span className="soft-highlight">
                Currently building with <strong>React + Vite</strong>.
              </span>
            </p>

            <div className="skills-minimal">
              {skills.map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-inner">
                    <div className="skill-front">{skill.icon}</div>
                    <div className="skill-back">{skill.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="projects-minimal">
          <h2>My Projects</h2>

          <div className="deck-with-teddy">
            <div className={`project-deck ${isSplit ? "split" : ""}`}>
              <div className="project-card" id="card1">
                <div className="card-content">
                  <h3>Portfolio Website</h3>
                  <p>A soft, aesthetic personal site with smooth animations.</p>
                  <span className="tech">React • Vite • CSS</span>
                </div>
                <a
                  href="https://dakshinya-mohanraj.github.io/portfolio/"
                  target="_blank"
                  className="view-btn"
                >
                  View Live
                </a>
              </div>

              <div className="project-card" id="card2">
                <div className="card-content">
                  <h3>Nail Glam Website</h3>
                  <p>Real-time todo app with drag & drop + Firebase sync.</p>
                  <span className="tech">HTML • CSS • Firebase</span>
                </div>
                <a
                  href="https://dakshinya-mohanraj.github.io/nail-glam/"
                  target="_blank"
                  className="view-btn"
                >
                  View Live
                </a>
              </div>

              <div className="project-card" id="card3">
                <div className="card-content">
                  <h3>E-commerce Shop</h3>
                  <p>A modern online shop with cart functionality.</p>
                  <span className="tech">React • Redux • Stripe</span>
                </div>
                <a href="#" className="view-btn">
                  View Live
                </a>
              </div>

              <div className="project-card" id="card4">
                <div className="card-content">
                  <h3>Blog Platform</h3>
                  <p>A blog with user auth + comments.</p>
                  <span className="tech">Next.js • MongoDB • Tailwind</span>
                </div>
                <a href="#" className="view-btn">
                  View Live
                </a>
              </div>

              <div className="project-card" id="card5">
                <div className="card-content">
                  <h3>Weather App</h3>
                  <p>Live weather + geolocation + API.</p>
                  <span className="tech">React • OpenWeather API</span>
                </div>
                <a href="#" className="view-btn">
                  View Live
                </a>
              </div>
            </div>

            <img
              src={TeddyGif}
              alt="Teddy"
              className="single-teddy"
              onClick={handleTeddyClick}
            />
            <p className="teddy-hint">Click me to split & stack 💗</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-card">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-sub">I'm always open to collaboration & opportunities</p>

          <div className="contact-icons">
            <a href="mailto:dakshee02@gmail.com" className="contact-orb">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Dakshinya-mohanRaj"
              target="_blank"
              className="contact-orb"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dakshinya-mohan-raj-6a311732b/"
              target="_blank"
              className="contact-orb"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-name">
        DAKSHINYA <br /> MOHAN RAJ
      </div>

      <footer>© 2025 Dakshinya — All Rights Reserved</footer>
    </>
  );
}
