import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route, Link } from "react-router";
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectPage from './pages/ProjectPage'

const App = () => {
  

  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    

     

        
    </div>
  )
}

export default App