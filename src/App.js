import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
// import SkillCard from './components/SkillCard/SkillCard'
import Portfolio from './components/Portfolio/Portfolio'
// import ProjectCard from './components/ProjectCard/ProjectCard'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <main className='main-grid'>
        <Hero />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
export default App