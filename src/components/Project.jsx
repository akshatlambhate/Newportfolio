import React from 'react'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import Github from '../assets/Github.png'
import { ProjectData } from '../ProjectData';

const Project = () => {
  return (
    ProjectData.map((item,index)=>(
         <div key={index} className='border border-gray w-[30vw] mx-4 my-4'>
         <div><img src={item.img} alt="" /></div>
         <div id="tech" className='border border-s border-gray h-7'>
            <p className='text-gray  text-center'>
               {item.tech.map((tech, index)=>(
                <span className='ml-1' key={index}>{tech} </span>
               ))}
                </p> </div>
         <div id="info" className='mb-8 w-[28vw] px-4'>
                <p className='text-2xl text-white'>{item.title}</p>
            <p className='text-sm text-gray'>{item.description}</p>
         </div>
         <div id='buttons' className='flex gap-2 justify-around mb-3'>
           <a href={item.live_link} target='_blank'>
            <button className='px-3 py-1 border text-lg border-gray text-primary '>Live <span><BoltOutlinedIcon /></span> </button>
            </a> 
            <a href={item.github_link}  target='_blank'>
            <button className='px-3 py-1 border text-lg border-primary text-gray flex gap-3 items-center '>Souce Code <span><img src={Github} alt="" /></span> </button>

            </a>
         </div>
    </div>
    ))
   
  )
}

export default Project