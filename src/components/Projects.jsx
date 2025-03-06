import React, { useEffect, useRef } from 'react';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import Project from './Project';
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import ProjectBg from '../assets/project-bg.mp4';
import Title from './Title';

const Projects = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video (0.5x speed)
    }
  }, []);
   

  return (
    <Element name='project'>
      <div className=" py-5 flex flex-col items-center justify-center relative z-[900]">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <video ref={videoRef} id="projectBg" autoPlay muted loop>
            <source src={ProjectBg} type="video/mp4" />
          </video>
        </div>

        <div className=' sm:flex w-[80vw] m-auto sm:pb-8 justify-around mt-6 sm:mt-8 items-start z-10'>
           <Title title={'Projects'} />
          <div className=' hidden sm:flex items-center justify-center h-22 gap-2 mr-2 mt-2'>
            <Link to='/projects' ><p className='text-sm sm:text-lg text-white  w-20'>View all</p></Link>   
            <div className='rotate-90 text-primary'><NavigationRoundedIcon /></div>
          </div>
        </div>

        {/* Project Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 mx-6 sm:mx-0 gap-x-65 gap-y-10 z-10'>
          <Project />
        </div>

        <div className='flex items-center sm:hidden  h-10 mt-2 border border-white px-2 my-1'>
            <Link to='/projects' ><p className='text-sm sm:text-lg text-white  w-15'>View all</p></Link>   
            <div className='rotate-90 text-primary'><NavigationRoundedIcon /></div>
          </div>
      </div>
    </Element>
  );
}

export default Projects;
