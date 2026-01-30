import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaReact, FaPhp, FaLaravel, FaBootstrap } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => { }, []);

  const skillsIcons = [<FaReact />, <FaPhp />, <FaLaravel />, <FaBootstrap />];

  return (
    <section className="hero-section">
     <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1
  }}
  options={{
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: { repulse: { distance: 120 }, push: { quantity: 4 } },
    },
    particles: {
      color: { value: ["#0d6efd", "#6610f2", "#6f42c1"] },
      links: { enable: true, distance: 120, color: "#0d6efd", opacity: 0.3, width: 1 },
      collisions: { enable: true },
      move: { enable: true, speed: 2, outModes: "bounce" },
      number: { value: 50 },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 3, max: 6 } },
    },
    detectRetina: true,
  }}
/>


      <div className="hero-content container">
        <h1 className="hero-title">
          Hi, I’m <span className="text-gradient">Omar Ashraf</span>
        </h1>
        <h4 className="hero-subtitle mt-3">Full Stack Web Developer</h4>
        <p className="hero-description mt-4">
          I build modern web applications using <strong>React</strong>, <strong>Laravel</strong>, <strong>PHP</strong>, and <strong>Bootstrap</strong>.
          I create responsive, high-performance websites and web apps with clean, maintainable code.
        </p>

        <div className="floating-icons mt-4">
          {skillsIcons.map((icon, idx) => (
            <span key={idx} className="floating-icon" style={{ animationDelay: `${idx * 0.2}s` }}>
              {icon}
            </span>
          ))}
        </div>
      </div>
    </section>

  );
}
