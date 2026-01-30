import { useEffect, useState } from "react"
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa"
import "./Navbar.css"
export default function Navbar() {
  const [theme, setTheme] = useState("light")
  const [active, setActive] = useState("home")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.body.setAttribute("data-bs-theme", savedTheme)

    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"]
      sections.forEach((sec) => {
        const el = document.getElementById(sec)
        if (el) {
          const top = el.offsetTop - 100
          const bottom = top + el.offsetHeight
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.body.setAttribute("data-bs-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm glass-nav">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-primary" href="#">
          Omar<span className="text-info"> Ashraf</span>
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto gap-2">
            {["home", "skills", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`nav-link btn btn-link px-3 ${
                    active === item ? "active-link" : ""
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3">
            <a href="https://linkedin.com/in/omarashraf22" target="_blank" className="icon-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/omarashra5" target="_blank" className="icon-link">
              <FaGithub />
            </a>

            <button onClick={toggleTheme} className="btn btn-sm theme-btn">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
