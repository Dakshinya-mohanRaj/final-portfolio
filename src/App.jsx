// src/App.jsx
import React, { useState, useEffect } from "react";
import DaksheeImg from "./assets/Dakshee.png";
import TeddyGif from "./assets/teddy.gif";   // Place your teddy GIF here

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

      {/* Projects – Teddy now perfectly centered under cards */}
      <section id="projects" className="section">
        <div className="projects-minimal">
          <h2>My Projects</h2>

          <div className="deck-with-teddy">
            {/* Project Deck */}
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
                  <span className="tech">HTML / CSS • Firebase </span>
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

            {/* Teddy – always visible, centered, and clickable */}
            <img
              src={TeddyGif}
              alt="Click me to split cards!"
              className="single-teddy"
              onClick={handleTeddyClick}
            />
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

      <div className="bg-name" aria-hidden="true">
        DAKSHINYA <br /> MOHAN RAJ
      </div>

      <footer>© 2025 Dakshinya — All Rights Reserved</footer>

      {/* ALL STYLES – Updated for perfect teddy placement */}
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
          background: rgba(246, 235, 235, 0.55);
          backdrop-filter: blur(12px);
          z-index: 1000;
        }
        .logo {
          font-family: "Sacramento", cursive;
          font-size: 36px;
          background: linear-gradient(45deg,rgb(215, 57, 25), #ffb19c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links { display: flex; gap: 30px; list-style: none; }
        .nav-links a {
          text-decoration: none;
          color: var(--brown);
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 20px;
          transition: 0.3s;
        }
        .nav-links a:hover { background:hsl(9, 83.70%, 71.20%); }

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
          z-index: 1100;
        }
        .hamburger .line {
          width: 32px;
          height: 3px;
          background: var(--brown);
          border-radius: 3px;
          transition: all 0.35s ease;
        }
        .hamburger.open .line:nth-child(1) { transform: translateY(9px) rotate(45deg); }
        .hamburger.open .line:nth-child(2) { opacity: 0; }
        .hamburger.open .line:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

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
        }

        /* Sections */
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

        /* Hero */
        .hero-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2vw;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }
        .hero-content { flex: 1; min-width: 200px; text-align: left; }
        .hero-content h1 { font-size: clamp(60px, 7vw, 86px); color: var(--brown); }
        .hero-content h1:first-child { margin-bottom: 25px; }
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
          left: 0; top: 0;
          height: 100%; width: 100%;
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
        .hero-img img { width: 100%; height: 100%; border-radius: 100%; object-fit: cover; }

        /* Titles */
        .about-minimal h2, .projects-minimal h2, .contact-title {
          font-family: "Sacramento", cursive;
          font-size: clamp(56px, 10vw, 80px);
          color: rgb(231, 63, 30);
          margin-bottom: 50px;
        }

        /* About */
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
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 28px; margin-top: 40px; padding-top: 30px;
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

        
        /* NEW: Deck + Teddy perfectly together */
.deck-with-teddy {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  perspective: 1500px;
}

.project-deck {
  position: relative;
  width: 260px;
  height: auto;
  min-height: 380px;
  margin-bottom: 20px;
  cursor: default;
  transition: all 0.6s ease;
}

.project-card {
  position: absolute;
  width: 290px;
  height: 350px;
  padding: 20px;
  border-radius: 38px;
  background: rgba(255, 255, 255, 0.97);
  border: 2.3px solid rgba(237, 146, 107, 0.7);
  box-shadow: 0 10px 35px rgba(255, 145, 120, 0.22);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
              border 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(6px);
  z-index: 10;
}

#card1 {
  transform: translate(-50%, -50%) translateX(-12px) translateY(-18px) rotate(2deg);
  z-index: 20;
}
#card2 {
  transform: translate(-50%, -50%) translateX(12px) translateY(10px) rotate(-3deg);
  z-index: 10;
}

/* Split animation – smooth & clean */
.project-deck.split #card1 {
  transform: translate(-80%, -50%) translateX(-100px) translateY(-40px) rotate(-10deg) scale(0.94);
}
.project-deck.split #card2 {
  transform: translate(-30%, -50%) translateX(100px) translateY(20px) rotate(9deg) scale(0.92);
}

/* HOVER: Only subtle lift + slight scale — NO GLOW/SHADOW/SHAKE */
.project-deck.split #card1:hover {
  transform: translate(-80%, -50%) translateX(-100px) translateY(-60px) rotate(-10deg) scale(1.02);
  z-index: 50;
  border: 2.8px solid rgba(237, 146, 107, 0.9);
}
.project-deck.split #card2:hover {
  transform: translate(-30%, -50%) translateX(100px) translateY(0px) rotate(9deg) scale(1.0);
  z-index: 50;
  border: 2.8px solid rgba(237, 146, 107, 0.9);
}

/* Text styles */
.card-content h3 {
  font-size: 20px;
  color: #4d3c3c;
  margin-bottom: 45px;
  font-weight: 600;
}
.card-content p {
  font-size: 15px;
  color: #5a4545;
  line-height: 1.8;
  margin-bottom: 60px;
}
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
  padding: 12px 26px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}
.view-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.35);
}

/* Teddy – cute & perfectly placed */
.single-teddy {
  width: 90px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  animation: teddy-bounce 2s infinite ease-in-out;
  transition: transform 0.3s ease;
  margin-top: 35px;   /* 🆕 Moves teddy slightly down */
}

.single-teddy:hover {
  transform: scale(1.4) rotate(15deg);
}
@keyframes teddy-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

        /* Contact */
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
        .contact-sub { font-size: 20px; color: #5a3b3b; margin-bottom: 40px; }
        .contact-icons { display: flex; justify-content: center; gap: 50px; flex-wrap: wrap; }
        .contact-orb {
          width: 70px; height: 70px;
          border-radius: 50%;
          background: rgba(236, 116, 116, 0.87);
          backdrop-filter: blur(22px);
          border: 3px solid rgba(230, 110, 80, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color:rgba(233, 134, 114, 0.93);
          text-decoration: none;
          transition: all 0.4s ease;
        }
        .contact-orb:hover {
          transform: translateY(-12px) scale(1.1);
          background: rgba(231, 117, 117, 0.79);
          box-shadow: 0 25px 50px rgba(237, 183, 177, 0.35);
        }
        .contact-orb:hover i { color:rgb(245, 112, 82); }

        /* Background Name */
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

        /* Responsive */
        @media (max-width: 1024px) {
          .project-deck { width: 300px; }
        }
        @media (max-width: 768px) {
          .deck-with-teddy { min-height: 70vh; }
          .project-deck { width: 280px; }
          .single-teddy { width: 110px; height: 110px; }
          .hero-wrapper { flex-direction: column-reverse; text-align: center; }
          .hero-content { text-align: center; }
        }

        /* Link safety */
        .view-btn, .view-btn:link, .view-btn:visited,
        .view-btn:hover, .view-btn:active, .view-btn:focus {
          color: white !important;
          text-decoration: none !important;
        }
        .contact-orb, .contact-orb i { color: inherit !important; }
        a { color: inherit; text-decoration: none; }
      `}</style>
    </>
  );
}
