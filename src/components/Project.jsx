import React, { useEffect } from 'react'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import Github from '../assets/Github.png'
import { ProjectData } from '../ProjectData';
import { useLocation } from 'react-router-dom';

const Project = () => {
  let location= useLocation();
  useEffect(()=>{
  },[location])
  return (<>
  {location.pathname ==='/' 
  ?
  <>{ProjectData.slice(0,4).map((item,index)=>(
  <div key={index} className='border-2 rounded-xl sm:shadow-md hover:shadow-2xl duration-200 hover:scale-102 shadow-primary border-gray sm:w-[28vw]  mx-4 my-4 group '>
  <div className='relative'><img src={item.img} className='rounded-t-xl sm:h-[30vh]' alt="" />
  <div className='bg-primary w-full sm:h-[30vh] rounded-t-xl absolute top-0 opacity-50 group-hover:opacity-0 duration-500 ease-initial sm:block hidden ' 
style={{
 backgroundImage: "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 2px, transparent 2px, transparent 20px)"
}}
>
<br /></div>
  </div>
  <div id="tech" className='border border-s border-gray '>
     <p className='text-gray  text-center'>
        {item.tech.map((tech, index)=>(
         <span className='ml-1' key={index}>{tech} </span>
        ))}
         </p> </div>
  <div id="info" className='mb-8 sm:w-[28vw] px-4'>
         <p className='text-2xl text-white'>{item.title}</p>
     <p className='text-sm text-gray h-[20vh]  overflow-y-clip text-ellipsis'>{item.description}</p>
  </div>
  <div id='buttons' className='flex gap-2 justify-around mb-3'>
    <a href={item.live_link} target='_blank'>
     <button className='px-3 py-1 border text-lg border-gray rounded-sm text-primary hover:bg-white  hover:shadow-md hover:scale-110 duration-300 ease-in-out hover:shadow-white '><span className='hidden sm:inline'>Live</span> <span><BoltOutlinedIcon /></span> </button>
     </a> 
     <a href={item.github_link}  target='_blank'>
     <button className='px-3 py-2 rounded-sm sm:py-1  border text-lg border-primary text-gray flex gap-3 items-center hover:bg-primary hover:text-white hover:shadow-md hover:scale-106 duration-300 ease-in-out hover:shadow-primary  group'><span className='hidden sm:inline'>Source Code</span> <span className='rounded-full group-hover:text-white group-hover:bg-white hover:scale-106 duration-300 '><img src={Github} alt="" /></span> </button>

     </a>
  </div>
</div>
))}
</>
 :
  <>{ProjectData.map((item,index)=>(
  <div key={index} className='border-2 rounded-xl sm:shadow-md hover:shadow-2xl duration-200 hover:scale-102 shadow-primary border-gray sm:w-[20vw]  mx-4 my-4 group'>
  <div className='relative'><img src={item.img} className='rounded-t-xl sm:h-[25vh]' alt="" />
  <div className='bg-primary w-full sm:h-[25vh] rounded-t-xl absolute top-0 opacity-50 group-hover:opacity-0 duration-500 ease-initial sm:block hidden ' 
style={{
 backgroundImage: "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 2px, transparent 2px, transparent 20px)"
}}
>
<br /></div>
  </div>
  <div id="tech" className='border border-s border-gray '>
     <p className='text-gray text-center'>
        {item.tech.map((tech, index)=>(
         <span className='ml-1' key={index}>{tech} </span>
        ))}
         </p> </div>
  <div id="info" className='mb-8 sm:w-[20vw] px-4'>
         <p className='text-2xl text-white'>{item.title}</p>
     <p className='text-sm text-gray h-[15vh]  overflow-y-clip text-ellipsis'>{item.description}</p>
  </div>
  <div id='buttons' className='flex gap-2 justify-around mb-3'>
    <a href={item.live_link} target='_blank'>
     <button className='px-3 py-1 border text-lg border-gray rounded-sm text-primary hover:bg-white  hover:shadow-md hover:scale-110 duration-300 ease-in-out hover:shadow-white '><span className='hidden sm:inline'>Live</span> <span><BoltOutlinedIcon /></span> </button>
     </a> 
     <a href={item.github_link}  target='_blank'>
     <button className='px-3 py-2 rounded-sm sm:py-1  border text-lg border-primary text-gray flex gap-3 items-center hover:bg-primary hover:text-white hover:shadow-md hover:scale-106 duration-300 ease-in-out hover:shadow-primary  group'><span className='hidden sm:inline'>Source Code</span> <span className='rounded-full group-hover:text-white group-hover:bg-white hover:scale-106 duration-300 '><img src={Github} alt="" /></span> </button>

     </a>
  </div>
</div>
))}</>


  }</>
   
    
   
  )
}

export default Project