import { useTheme } from './ThemeContext'
import AuroraBackground from './components/AuroraBackground'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Skills from './components/Skills'
import Experience from './components/Experience'
import GitHubStats from './components/GitHubStats'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const { isDark } = useTheme()

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Experience />
        <GitHubStats />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
