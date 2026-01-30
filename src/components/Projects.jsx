import "./Projects.css"
import { useEffect } from "react"
import { FaHourglassHalf } from "react-icons/fa"

const projects = [
  {
    title: "Web Project WeSchool",
    tech: "React & Bootstrap",
    img: "/Screenshot 2026-01-03 051439.png",
    link: "https://we-school-assuit.vercel.app/"
  },
  {
    title: "Syntax Academy",
    tech: "Bootstrap & JavaScript",
    img: "/Screenshot 2026-01-07 075036.png",
    link: "https://omarashra5.github.io/Syntax_Academy/"
  },
  {
    title: "Shop Products",
    tech: "CSS, Bootstrap & JavaScript",
    img: "/ShopProducts.png",
    link: "https://fresh-market-psmyxihe2-omarashra5s-projects.vercel.app/"
  },
  {
    title: "Tech Store",
    tech: "CSS, Bootstrap & JavaScript",
    img: "/TechStore.png",
    link: "https://tech-store-3t1xy2ilj-omarashra5s-projects.vercel.app/"
  },
  {
    title: "CodeMasters Academy",
    tech: "CSS, Bootstrap & JavaScript",
    img: "/Coding.png",
    link: "https://code-academy-g1ykjn98d-omarashra5s-projects.vercel.app"
  },
  {
    title: "GYM ELITE",
    tech: "React, TypeScript & Bootstrap",
    img: "/ELITE.png",
    link: "https://gym-elite.vercel.app/"
  },
  {
    title: "SHOW FIRE",
    tech: "React, TypeScript & Bootstrap",
    img: "/SHOW-FIRE.png",
    link: "https://show-fire-web.vercel.app/"
  }
]

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.2 }
    )
    cards.forEach(card => observer.observe(card))
  }, [])

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="projects-title text-center">Projects</h2>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="project-card">
                <img src={p.img} alt={p.title} />

                <div className="project-overlay">
                  <h5>{p.title}</h5>
                  <span>{p.tech}</span>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Project without link (gallery) */}
          <div className="col-md-6">
            <div className="card project-card shadow-sm">
              <img src="/Screenshot 2026-01-07 075036.png" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Syntax Academy</h5>
                <p className="card-text">Bootstrap & Javascript</p>
                <a href="https://omarashra5.github.io/Syntax_Academy/" className="btn btn-primary w-100">
                  View Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card project-card shadow-sm">
              <img src="/ShopProducts.png" className="card-img-top" alt="Shop Products Project" />
              <div className="card-body">
                <h5 className="card-title">Shop Products</h5>
                <p className="card-text">CSS, Bootstrap & JavaScript</p>
                <a
                  href="https://fresh-market-psmyxihe2-omarashra5s-projects.vercel.app/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card project-card shadow-sm">
              <img src="/TechStore.png" className="card-img-top" alt="Tech Store Project" />
              <div className="card-body">
                <h5 className="card-title">Tech Store</h5>
                <p className="card-text">CSS, Bootstrap & JavaScript</p>
                <a
                  href="https://tech-store-3t1xy2ilj-omarashra5s-projects.vercel.app/"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card project-card shadow-sm">
              <img src="/public/Coding.png" className="card-img-top" alt="CodeMasters Project" />
              <div className="card-body">
                <h5 className="card-title">CodeMasters Academy</h5>
                <p className="card-text">CSS, Bootstrap & JavaScript</p>
                <a
                  href="https://code-academy-g1ykjn98d-omarashra5s-projects.vercel.app"
                  className="btn btn-primary w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>
          {/* Project In Progress */}
          <div className="col-md-12">
            <div className="card project-card shadow-sm position-relative">
              <img src="/load.webp" className="card-img-top opacity-50" />
              <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <FaHourglassHalf size={40} className="mb-2 text-warning" />
                <h5 className="text-white fw-bold">In Progress</h5>
                <p className="text-white text-center">This project is under development and will be available soon.</p>
                {/* In Progress */}
                <div className="col-lg-8 col-md-12 mx-auto">
                  <div className="project-card in-progress">
                    <img src="/load.webp" alt="Loading" />
                    <div className="project-overlay">
                      <FaHourglassHalf size={40} />
                      <h5>In Progress</h5>
                      <span>Coming Soon...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}