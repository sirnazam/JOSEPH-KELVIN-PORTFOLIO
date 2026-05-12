import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import ElevatorPitch from './components/sections/ElevatorPitch'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-900 overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ElevatorPitch />
        <Skills />
        <Projects />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
