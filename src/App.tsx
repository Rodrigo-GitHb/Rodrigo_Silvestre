import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlobalStyle from './styles/global'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      <GlobalStyle isDark={isDark} />
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App