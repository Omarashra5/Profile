import { useEffect, useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Navbar() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.body.setAttribute("data-bs-theme", savedTheme)
  }, [])

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.body.setAttribute("data-bs-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">Omar Ashraf</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button onClick={() => scrollToSection("home")} className="nav-link btn btn-link">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection("skills")} className="nav-link btn btn-link">
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection("projects")} className="nav-link btn btn-link">
                Projects
              </button>
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-row align-items-center gap-3 me-3">
            <li className="nav-item">
              <a className="nav-link text-info" href="https://www.linkedin.com/in/omarashraf22" target="_blank" title="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/omarashra5" target="_blank" title="GitHub">
                <FaGithub />
              </a>
            </li>
          </ul>

          <button onClick={toggleTheme} className="btn btn-outline-secondary ms-3">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  )
}
