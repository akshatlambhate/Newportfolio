import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import ParallaxSkills from '../../SkillCards'
import SkillCards from '../../SkillCards'
import Skill from '../components/Skill'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <div className='block sm:hidden'> 
      <Skills />

      </div>
      <div className='hidden sm:block'>
      <Skill />

      </div>
      <About />
      <Contact />

    </div>
  )
}

export default HomePage