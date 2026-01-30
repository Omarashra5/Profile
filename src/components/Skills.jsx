import "./Skills.css"
import { useEffect } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaNodeJs,
  FaJs,
  FaTasks,
  FaSearch,
  FaFileWord,
  FaComments,
} from "react-icons/fa"

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaPhp />, name: "PHP (Advanced)" },
      { icon: <FaLaravel />, name: "Laravel" },
      { icon: <FaDatabase />, name: "Database" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaJs />, name: "Express.js" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { icon: <FaTasks />, name: "Problem Solving" },
      { icon: <FaSearch />, name: "Research" },
      { icon: <FaComments />, name: "Communication" },
      { icon: <FaFileWord />, name: "Microsoft Office" },
      { icon: <FaTasks />, name: "Testing & Debugging" },
    ],
  },
]

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
      { threshold: 0.2 }
    )

    cards.forEach(card => observer.observe(card))
  }, [])

  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="skills-title text-center">My Skills</h2>

        <div className="row g-4">
          {skillsData.map((group, i) => (
            <div className="col-md-4" key={i}>
              <div className="skill-card h-100">
                <h5 className="skill-card-title">{group.title}</h5>

                <ul className="skill-list">
                  {group.skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
