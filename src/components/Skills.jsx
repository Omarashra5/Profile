import "./Skills.css"
import { useEffect } from "react"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPhp, FaLaravel, FaDatabase, FaNodeJs, FaJs, FaTasks, FaSearch, FaFileWord, FaComments } from "react-icons/fa"

export default function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.3 }
    )

    cards.forEach(card => observer.observe(card))
  }, [])

  const frontendSkills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "Javascript" },
  ]

  const backendSkills = [
    { icon: <FaPhp />, name: "PHP (Advanced)" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaDatabase />, name: "Database Management" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaJs />, name: "Express.js" },
  ]

  const otherSkills = [
    { icon: <FaTasks />, name: "Problem Solving" },
    { icon: <FaSearch />, name: "Searching" },
    { icon: <FaComments />, name: "Communication" },
    { icon: <FaFileWord />, name: "Microsoft Office" },
    { icon: <FaTasks />, name: "Testing" },
  ]

  function renderSkills(skills) {
    return skills.map((skill, index) => (
      <li key={index} className="skill-item">
        <span className="skill-icon">{skill.icon}</span> {skill.name}
      </li>
    ))
  }

  return (
    <section className="py-5 bg-body">
      <div className="container">
        <h2 className="skills-title mb-5">My Skills</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card skill-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <ul className="list-unstyled mt-3">{renderSkills(frontendSkills)}</ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card skill-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <ul className="list-unstyled mt-3">{renderSkills(backendSkills)}</ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card skill-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Other Skills</h5>
                <ul className="list-unstyled mt-3">{renderSkills(otherSkills)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
