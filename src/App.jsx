// src/App.jsx
import React, { useState, useEffect } from "react";
import DaksheeImg from "./assets/Dakshee.png"; // <-- place your image at src/assets/Dakshee.png

export default function App() {
  const [isSplit, setIsSplit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Click to split project cards
  useEffect(() => {
    const deck = document.querySelector(".project-deck");
    const toggle = () => setIsSplit((prev) => !prev);
    deck?.addEventListener("click", toggle);
    return () => deck?.removeEventListener("click", toggle);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // close menu when a nav link clicked
  const handleNavClick = () => setMenuOpen(false);

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

      {/* Navbar */}
      <nav className="navbar" role="navigation podpor: true" aria-label="Main navigation">
        <div className="logo">Dakshinya</div>

        {/* Hamburger - THREE LINES (replaces dots) */}
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

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero – Text Left, Image Right */}
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
              </span>{" "}
            </p>
            <div className="skills-minimal" aria-hidden="true">
              <span title="HTML5"><i className="fab fa-html5"></i></span>
              <span title="CSS3"><i className="fab fa-css3-alt"></i></span>
              <span title="JavaScript"><i className="fab fa-js-square"></i></span>
              <span title="React"><i className="fab fa-react"></i></span>
              <span title="Vite">
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.2 2.4L12.8 22.8L12 21.2L22.4 2.4C22.8 1.6 23.2 2 23.2 2.4ZM9.6 2.4L0 20.8L1.6 21.6L10.4 4.8L19.2 21.6L20.8 20.8L11.2 2.4H9.6Z" />
                </svg>
              </span>
              <span title="Firebase"><i className="fas fa-fire-alt"></i></span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects – Click to Split */}
      <section id="projects" className="section">
        <div className="projects-minimal">
          <h2>My Projects</h2>
          <div className="projects-container">
            <div
              className={`project-deck ${isSplit ? "split" : ""}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsSplit((s) => !s);
              }}
            >
              <div className="project-card" id="card1">
                <div className="card-content">
                  <h3>Portfolio Website</h3>
                  <p>A soft, aesthetic personal site with smooth animations.</p>
                  <span className="tech">React • Vite • CSS</span>
                </div>
                <a
                  href="https://dakshinya-mohanraj.github.io/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  View Live
                </a>
              </div>
              <div className="project-card" id="card2">
                <div className="card-content">
                  <h3>Nail Glam Website</h3>
                  <p>Real-time todo app with drag & drop, Firebase sync.</p>
                  <span className="tech">React • Firebase • Tailwind</span>
                </div>
                <a
                  href="https://dakshinya-mohanraj.github.io/nail-glam/"
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-card">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-sub">I'm always open to collaboration & opportunities</p>
          <div className="contact-icons">
            <a href="mailto:dakshee02@gmail.com" className="contact-orb" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Dakshinya-mohanRaj"
              target="_blank"
              rel="noreferrer"
              className="contact-orb"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dakshinya-mohan-raj-6a311732b/"
              target="_blank"
              rel="noreferrer"
              className="contact-orb"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Background Name */}
      <div className="bg-name" aria-hidden="true">
        DAKSHINYA <br /> MOHAN RAJ
      </div>

      <footer>© 2025 Dakshinya — All Rights Reserved</footer>

      {/* All Styles - Only changed the hamburger part */}
      <style>{`
        :root {
          --peach:rgb(251, 230, 223);
          --peach2:rgb(242, 165, 137);
          --cream:rgb(241, 234, 230);
          --brown: #4d3c3c;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        *:focus { outline: none; }
        html, body, #root {
          overflow-x: hidden;
          background: var(--peach);
          font-family: "Poppins", sans-serif;
          scroll-behavior: smooth;
          width: 100%;
          min-height: 100vh;
        }
        /* Blobs */
        .blob { position: fixed; border-radius: 50%; filter: blur(70px); opacity: 0.6; z-index: -1; animation: float 12s infinite ease-in-out; }
        .b1 { width: 500px; height: 500px; background: var(--peach); top: -10%; left: -10%; }
        .b2 { width: 550px; height: 550px; background: #ffe1d7; bottom: -15%; right: -10%; animation-delay: 4s; }
        .b3 { width: 400px; height: 400px; background: var(--peach2); top: 40%; left: -10%; animation-delay: 8s; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-50px); } }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0; left: 0; width: 100%;
          padding: 8px 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(246, 245, 245, 0.8);
          backdrop-filter: blur(12px);
          z-index: 1000;
        }
        .logo {
          font-family: "Sacramento", cursive;
          font-size: 36px;
          background: linear-gradient(45deg, #ff8d75, #ffb19c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Desktop nav links */
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--brown);
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 20px;
          transition: 0.3s;
        }
        .nav-links a:hover { background:hsl(18, 46.50%, 63.30%); }

        /* Hamburger - THREE LINES (clean & minimal) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
        }
        .hamburger .line {
          width: 32px;
          height: 3px;
          background: var(--brown);
          border-radius: 3px;
          transition: all 0.35s ease;
        }
        .hamburger.open .line:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .hamburger.open .line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .line:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .nav-links {
            position: absolute;
            top: 64px;
            right: 5%;
            width: 220px;
            background: rgba(251, 206, 183, 0.95);
            backdrop-filter: blur(12px);
            border-radius: 14px;
            flex-direction: column;
            padding: 18px;
            gap: 14px;
            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .nav-links.open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
          .nav-links li { width: 100%; text-align: center; }
        }

        /* Rest of your styles - 100% unchanged */
        .section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 150px 5% 100px 5%;
          text-align: center;
          gap: 20px;
        }
        .hero-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2vw;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }
        .hero-content {
          flex: 1;
          min-width: 200px;
          text-align: left;
        }
        .hero-content h1 { font-size: clamp(60px, 7vw, 86px); color: var(--brown); }
        .hero-content h1:first-child {
          margin-bottom: 25px;
        }
        .hero-content span {
          font-family: "Sacramento", cursive;
          font-size: clamp(60px, 13vw, 90px);
          color: rgb(225, 106, 82);
          display: inline-block;
          position: relative;
          overflow: hidden;
          padding-bottom:12px;
        }
        .hero-content span::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background-color: var(--peach);
          transform: translateX(0);
          animation: reveal 5s ease forwards;
        }
        @keyframes reveal {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        .hero-content p {
          max-width: 900px;
          font-size: clamp(18px, 4vw, 22px);
          color: #6b5555;
          margin-top: 30px;
          line-height: 2;
        }
        .hero-img {
          flex: 0 0 clamp(250px, 40vw, 240px);
          aspect-ratio: 1/1;
          border-radius: 100%;
          background: linear-gradient(100deg, var(--peach2), var(--peach));
          padding: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-img img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
        .about-minimal h2, .projects-minimal h2, .contact-title {
          font-family: "Sacramento", cursive;
          font-size: clamp(56px, 10vw, 80px);
          color: rgb(231, 63, 30);
          margin-bottom: 50px;
        }
        .about-content {
          background: rgba(250, 250, 250, 0.94);
          backdrop-filter: blur(26px);
          border: 1.8px solid rgba(230, 103, 29, 0.6);
          border-radius: 100px;
          padding: 50px;
          max-width: 900px;
          width: 100%;
          box-shadow: 0 15px 40px rgba(255,145,120,0.2);
        }
        .lead { font-size: clamp(18px,5vw,20px); color: var(--brown); margin-bottom: 20px; }
        .soft-highlight {
          background: linear-gradient(120deg,#ff8d75,#ffb19c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
        .skills-minimal {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1.5px solid rgba(255,145,120,0.3);
        }
        .skills-minimal span {
          width: 70px; height: 70px;
          background: rgba(252, 137, 114, 0.15);
          color: rgb(233, 132, 112);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          transition: all 0.4s ease;
        }
        .skills-minimal span:hover {
          background: rgb(234, 136, 116);
          color: rgb(247, 244, 244);
          transform: translateY(-12px) scale(1.25);
          box-shadow: 0 20px 40px rgba(220, 20, 20, 0.43);
        }
        .projects-minimal h2 {
          font-family: "Sacramento", cursive;
          font-size: clamp(60px, 14vw, 77px);
          color: rgb(231, 63, 30);
          margin-bottom: 60px;
        }
        .projects-container {
          perspective: 1500px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100px;
        }
        .project-deck {
          position: relative;
          width: 300px;
          height: 500px;
          cursor: pointer;
          transition: all 0.6s ease;
        }
        .project-card {
          position: absolute;
          width: 300px;
          height: 380px;
          padding: 36px;
          border-radius: 42px;
          background: rgba(255, 255, 255, 0.97);
          border: 2.5px solid rgba(237, 146, 107, 0.7);
          box-shadow: 0 12px 35px rgba(255, 145, 120, 0.22);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: transform 1.0s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, border 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(6px);
        }
        #card1 { transform: translate(-50%, -50%) translateX(-12px) translateY(-18px) rotate(2deg); z-index: 10; }
        #card2 { transform: translate(-50%, -50%) translateX(14px) translateY(12px) rotate(-3deg); z-index: 9; }
        .project-deck.split #card1 { transform: translate(-20%, -50%) translateX(-200px) translateY(-50px) rotate(-9deg) scale(.9); z-index: 10; }
        .project-deck.split #card2 { transform: translate(-50%, -30%) translateX(220px) translateY(30px) rotate(8deg) scale(.9); z-index: 15; }
        .card-content h3 { font-size: 24px; color: #4d3c3c; margin-bottom: 20px; font-weight: 600; }
        .card-content p { font-size: 18px; color: #5a4545; line-height: 2; margin-bottom: 25px; }
        .tech {
          font-size: 13px;
          background: linear-gradient(135deg, #ff8d75, #ffb19c);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          align-self: flex-start;
          font-weight: 600;
        }
        .view-btn {
          align-self: flex-start;
          background: linear-gradient(135deg, #ff8d75, #ffb19c);
          color: white;
          padding: 12px 28px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .view-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.35);
        }
        .view-btn:focus { outline: none; }
        .view-btn:visited { color: white !important; }

        /* CONTACT SECTION STYLING */
        .contact-section {
          padding: 120px 20px;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .contact-card {
          background: rgba(255, 255, 255, 0.47);
          backdrop-filter: blur(25px);
          border-radius: 40px;
          padding: 60px;
          max-width: 700px;
          width: 100%;
          text-align: center;
          border: 2px solid rgba(255, 130, 100, 0.35);
          box-shadow: 0 20px 60px rgba(255, 125, 100, 0.25);
        }
        .contact-title {
          font-family: "Sacramento", cursive;
          font-size: clamp(60px, 10vw, 80px);
          color: rgb(231, 63, 30);
          margin-bottom: 10px;
        }
        .contact-sub {
          font-size: 20px;
          color: #5a3b3b;
          margin-bottom: 40px;
        }
        .contact-icons {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }
        .contact-orb {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(244, 206, 206, 0.46);
  backdrop-filter: blur(22px);
  border: 3px solid rgba(230, 110, 80, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #ff8d75;          /* default orb color */
  text-decoration: none;    /* removes underline */
  transition: all 0.4s ease;
}

/* Icon inherits orb color by default */
.contact-orb i {
  color: inherit;
  transition: color 0.4s ease;
}

/* Hover effect on orb */
.contact-orb:hover {
  transform: translateY(-12px) scale(1.1);
  background: rgb(244, 186, 186);
  box-shadow: 0 25px 50px rgba(255, 110, 95, 0.35);
}

/* Hover changes icon color too */
.contact-orb:hover i {
  color: #ff6b6b;
}

/* Remove default link colors for all states */
.contact-orb:link,
.contact-orb:visited,
.contact-orb:active,
.contact-orb:focus {
  color: #ff8d75;           /* keeps orb color */
}

        .bg-name {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotate(-10deg);
          font-size: clamp(90px, 10vw, 140px);
          font-weight: 900;
          color: rgba(227, 137, 109, 0.97);
          opacity: 0.11;
          pointer-events: none;
          z-index: 0;
          white-space: nowrap;
          animation: breathe 10s ease-in-out infinite;
        }
        @keyframes breathe {
          0%,100% { opacity: 0.09; transform: translate(-50%,-50%) rotate(-10deg) scale(1); }
          50% { opacity: 0.13; transform: translate(-50%,-50%) rotate(-10deg) scale(1.07); }
        }
        footer {
          text-align: center;
          padding: 10px;
          background: rgb(252, 249, 248);
          color: var(--brown);
          font-size: 18px;
        }
        @media (max-width: 1024px) { .project-deck { width: 85%; height: 60vh; } }
        @media (max-width: 800px) {
          .hero-wrapper { flex-direction: column-reverse; gap: 38px; text-align: center; }
          .hero-content { text-align: center; }
        }
      `}</style>
    </>
  );
}
