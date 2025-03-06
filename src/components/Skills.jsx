import React from 'react'
import Dots from '../assets/Dots.png'
import OutlineImg from '../assets/outline.png'
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from './Title';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    
  return (
    
      <div className='shadow-inner shadow-black'>

    <div className=' w-[90vw] mx-auto py-10 flex flex-col items-center justify-center' id='skill-cont'>
     <Title title={'Skills'} />
        <div className=' grid grid-cols-1'>
            <div id="right" className=' grid  grid-cols-1 gap-5  mt-10'>
                <div className='text-white border border-gray  h-fit mb-5 md:mb-0'>
                    <p className='text-center text-3xl border-b border-gray py-1'>Front End Skills</p>
                    <p className='text-2xl text-center text-primary px-4 py-3'> JavaScript,{' '}TypeScript,{' '} NextJs, {' '}Fast API, {' '} HTML, {' '} TailwindCSS,{' '} React, {' '} Redux, {' '} CSS</p>
                </div>
                <div className='text-white border border-gray  h-fit mb-5 md:mb-0 py-1'>
                    <p className='text-center text-3xl border-b border-gray'>Back End Skills</p>
                    <p className='text-2xl text-center text-primary px-4 py-3'> NodeJS,{' '}ExpressJS,{' '} PostgreSQL, {' '} MongoDB, {' '} Socket.io, {' '} Firebase,{' '} My SQL, {' '}</p>
                </div>
                <div className='text-white border border-gray  h-fit mb-5 md:mb-0 py-1'>
                    <p className='text-center text-3xl border-b border-gray'>Tools & Libraries</p>
                    <p className='text-2xl text-center text-primary px-4 py-3'> Vite,{' '}ThreeJS,{' '} Figma, {' '} Vercel, {' '} Postman, {' '} Canva,{' '} {' '}</p>
                </div>
               

            </div>
        </div>

        
      </div>
     
    </div>
  )
}

export default Skills