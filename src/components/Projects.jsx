import React from 'react'
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import Project from './Project';
import { Element } from 'react-scroll';


const Projects = () => {
  return (
    <Element name='project'>
         <div className=" bg-black py-10 flex flex-col items-center justify-center">
       <div className='flex w-[75vw] m-auto sm:pb-8 justify-around mt-6 sm:mt-8 items-start '>
        <div className='flex items-center'>
       <div className=' px-3 py-1 w-fit tracking-wider '><p className='text-xl sm:text-2xl text-white border-none sm:border border-black'><span className='text-primary'># </span>Projects </p></div> 
       <hr className='w-[40vw] text-primary hidden sm:inline' />
        </div>
        <div className='flex gap-2 mr-2 mt-2'>
            <p className='text-sm sm:text-lg text-white'>View all</p>
            <div className='rotate-90 text-primary'><NavigationRoundedIcon /></div>
        </div>
        
    </div>
           <div className='grid grid-cols-1 sm:grid-cols-2'>
        <Project />
        </div>
    </div>
    </Element>
   
   
  )
}

export default Projects