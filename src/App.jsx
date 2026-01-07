import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-vh-100">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer/>
    </div>
  )
}
