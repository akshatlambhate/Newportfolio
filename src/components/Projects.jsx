import React from 'react'
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import Project from './Project';

const Projects = () => {
  return (
    <div className="w-[75vw] m-auto ">
       <div className='flex justify-between items-start'>
        <div className='flex items-center'>
       <div className=' px-3 py-1 w-fit tracking-wider'><p className='text-2xl text-white border border-black'><span className='text-primary'># </span>Projects </p></div> 
       <hr className='w-[40vw] text-primary' />
        </div>
        <div className='flex gap-2 mr-2 mt-2'>
            <p className='text-lg text-white'>View all</p>
            <div className='rotate-90 text-primary'><NavigationRoundedIcon /></div>
        </div>
        
    </div>
           <div className='grid grid-cols-1 sm:grid-cols-2'>
        <Project />
        </div>
    </div>
   
  )
}

export default Projects