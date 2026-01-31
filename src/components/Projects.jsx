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
    link: "https://web-code-3wip.vercel.app/"
  },
  {
    title: "Shop Products",
    tech: "CSS, Bootstrap & JavaScript",
    img: "/ShopProducts.png",
    link: "https://fresh-market-nine.vercel.app/"
  },
  {
    title: "Tech Store",
    tech: "CSS, Bootstrap & JavaScript",
    img: "/TechStore.png",
    link: "https://tech-store-one-topaz.vercel.app/"
  },
  {
    title: "CodeMasters Academy",
    tech: "CSS, Bootstrap & JavaScript",
    img: "/Coding.png",
    link: "https://code-academy-drab-five.vercel.app/"
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

          {/* IN PROGRESS */}
          <div className="col-md-6 col-lg-4">
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
    </section>
  )
}
