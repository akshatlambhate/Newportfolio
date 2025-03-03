import React, { useEffect, useRef } from 'react';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import Project from './Project';
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import ProjectBg from '../assets/project-bg.mp4';

const Projects = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video (0.5x speed)
    }
  }, []);
   

  return (
    <Element name='project'>
      <div className="bg-black py-10 flex flex-col items-center justify-center relative z-[900]">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <video ref={videoRef} id="projectBg" autoPlay muted loop>
            <source src={ProjectBg} type="video/mp4" />
          </video>
        </div>

        <div className='flex w-[75vw] m-auto sm:pb-8 justify-around mt-6 sm:mt-8 items-start z-10'>
          <div className='flex items-center'>
            <div className='px-3 py-1 w-fit tracking-wider'>
              <p className='text-xl sm:text-2xl text-white border-none sm:border border-black'>
                <span className='text-primary'># </span>Projects 
              </p>
            </div> 
            <hr className='w-[40vw] text-primary hidden sm:inline' />
          </div>
          <div className='flex gap-2 mr-2 mt-2'>
            <Link to='/projects'  ><p className='text-sm sm:text-lg text-white'>View all</p></Link>   
            <div className='rotate-90 text-primary'><NavigationRoundedIcon /></div>
          </div>
        </div>

        {/* Project Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-50 gap-y-10 z-10'>
          <Project />
        </div>
      </div>
    </Element>
  );
}

export default Projects;
