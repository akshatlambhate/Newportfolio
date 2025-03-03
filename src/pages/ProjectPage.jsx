import React from 'react'
import Project from '../components/Project'
import Dots from '../assets/Dots.png'
import OutlineImg from "../assets/outline.png";

const ProjectPage = () => {
  return (
    <div className='relative overflow-hidden min-h-screen' >
        <div className='w-[75vw] m-auto'>
              <div className='flex flex-col gap-3 '>
            <p className='text-2xl font-semibold text-white tracking-widest'><span className='text-primary mr-1 text-4xl'>/</span>Projects</p>
            <p className='text-gray mt- tracking-widest'>list of all my projects</p>
        </div>
        <div className='mt-5'>
        <p className='text-2xl font-semibold text-white tracking-widest'><span className='text-primary mr-1 text-4xl'>#</span> Complete-apps</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3' id='projects'>
            <Project />
        </div>
        {/* extra elements */}
         <img src={Dots} id='dots' className='w-20 absolute top-60 -left-7 sm:opacity-90 opacity-0' alt="" />
         <img src={Dots} id='dots' className='w-20 absolute top-130 -right-4 rotate-45 sm:opacity-90 opacity-0' alt="" />
              <div  id='box' className='w-20 h-20 border border-gray absolute top-40 -right-5 sm:block sm:opacity-90 opacity-0'><br /></div>
                <img src={OutlineImg} className="absolute w-30 opacity-0 sm:opacity-100 bottom-20 left-3" alt="" />
        
    </div>
        </div>
      
  )
}

export default ProjectPage