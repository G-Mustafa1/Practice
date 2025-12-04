import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const menuRef = useRef(null)
  const contactRef = useRef(null)

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      const homeTop = homeRef.current.offsetTop
      const aboutTop = aboutRef.current.offsetTop - 100
      const menuTop = menuRef.current.offsetTop - 100
      const contactTop = contactRef.current.offsetTop - 100

      if (scrollY >= contactTop) setActiveSection("contact")
      else if (scrollY >= menuTop) setActiveSection("menu")
      else if (scrollY >= aboutTop) setActiveSection("about")
      else setActiveSection("home")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  const refs = { homeRef, aboutRef, menuRef, contactRef }

  return (
    <>
      <Navbar scrollTo={scrollTo} refs={refs} activeSection={activeSection} />

      <section ref={homeRef}><Hero scrollSection={scrollTo} refs={refs}/></section>
      <section ref={aboutRef}><About /></section>
      <section ref={menuRef}><Menu /></section>
      <section  ref={contactRef}><Contact /></section>

      <Footer scrollSection={scrollTo} refs={refs} />
    </>
  )
}

export default App
