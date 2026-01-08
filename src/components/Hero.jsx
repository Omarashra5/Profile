import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Hero.css";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, [])

  return (
    <section className="hero-section">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: "#f8f9fa" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: ["#0d6efd", "#6610f2", "#6f42c1"] },
            links: { enable: true, distance: 120, color: "#0d6efd", opacity: 0.3, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: "bounce", speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 3, max: 6 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Text + Floating Initials */}
      <div className="hero-content container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold">
              Hi, I’m <span className="text-primary">Omar Ashraf</span>
            </h1>
            <h4 className="text-body-secondary mt-3">
              Full Stack Web Developer
            </h4>
            
            <p className="mt-4">
              I build modern web applications using React, Laravel, PHP, and Bootstrap.
              I create responsive, high-performance websites and web apps with clean,
              maintainable code. I enjoy problem-solving, integrating APIs and databases,
              and delivering real-world projects that make an impact.
            </p>
          </div>

      <div className="col-md-6 d-flex justify-content-center">
  <div className="hero-illustration-wrapper">
    <div className="hero-illustration">
      <span className="hero-initials">
        <img src="/2.jpeg" className="img-fluid" alt="Omar" />
      </span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
