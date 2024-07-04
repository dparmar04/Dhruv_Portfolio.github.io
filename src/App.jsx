import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import MouseEffect from './components/MouseEffect/MouseEffect'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {

  return (
    <>
      <MouseEffect />
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
