import React from 'react'
import Dots from '../assets/Dots.png'
import OutlineImg from '../assets/outline.png'
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    useGSAP(() => {
        gsap.to('#dots',{
            rotateZ:360,
            duration:0.5,
          scrollTrigger:{
            trigger:'#skills',
            scrub:2, 
            start:'top 50%'  
          }
        });
        gsap.to('#box',{
            rotateZ:-180,
            duration:1.2,
            scale:1.4,
          scrollTrigger:{
            trigger:'#skills',
            scrub:3,   
          }
        });
        gsap.to('#outline',{
            rotateZ:720,
            duration:0.6,
          scrollTrigger:{
            trigger:'#skills',
            scrub:3,   
          }
        });
      })
    
  return (
    <div className='sm:w-[75vw] m-auto py-10 flex flex-col items-center justify-center' id='skills'>
        <div className='flex sm:pb-8 mt-6 sm:mt-8 w-full items-start sm:justify-normal justify-center '>
        <div className='flex items-center'>
       <div className=' px-3 py-1 w-fit tracking-wider '><p className='text-xl sm:text-2xl text-white border-none sm:border border-black'><span className='text-primary'># </span>Skills </p></div> 
       <hr className='w-[40vw] text-primary hidden sm:inline' />
        </div>
      
    </div>
        <div className=' grid lg:grid-cols-2 '>
            <div id="left" className=' mt-6 w-[25vw] h-60 relative hidden sm:inline'>
               <div  id='box' className='w-20 h-20 border border-gray absolute top-0 right-5'><br /></div>
               <img src={Dots} id='dots' className='w-20 absolute top-10 left-0' alt="" />
               <img src={OutlineImg} id='outline' className='w-20 absolute bottom-0 left-10' alt="" />
               <img src={Dots} id='dots' className='w-15 absolute top-30 right-20' alt="" />
               <div id='box' className='w-10 h-10 border border-gray absolute -bottom-3 -right-2'><br /></div>

            </div>
            <div id="right" className='flex-1 grid w-[40vw]  md:grid-cols-2 lg:grid-cols-3 ml-10 mt-10'>
                <div className='text-white border border-gray w-40 h-fit mb-5 md:mb-0'>
                    <p className='text-center text-lg border-b border-gray'>Language</p>
                    <p className='text-lg text-center text-primary'> JavaScript, TypeScript, Python C++</p>
                </div>
                <div className='text-white border border-primary w-40 h-fit mb-5 md:mb-0'>
                    <p className='text-center text-lg text-primary border-b border-gray  row-start-1'>Databases</p>
                    <p className='text-lg text-center text-gray'> MongoDB, SQL, PostgreSQL</p>
                </div>
                <div className='text-white border border-gray w-40 h-fit mb-5 md:mb-0'>
                    <p className='text-center text-lg border-b border-gray'>Tools</p>
                    <p className='text-lg text-center text-primary'> VS Code, Figma, Canva, threeJS, Postman, StarUML, GoogleColab, MS-Office</p>
                </div>
                <div className='text-white border border-primary w-40 h-fit mb-5 md:mb-0 '>
                    <p className='text-center text-lg text-primary border-b border-gray '>FrameWorks</p>
                    <p className='text-lg text-center text-gray'> ReactJS , NextJS, Express, </p>
                </div>
                <div className='text-white border border-primary w-40 h-fit mb-5 md:mb-0'>
                    <p className='text-center text-lg text-white border-b border-primary'>Others</p>
                    <p className='text-lg text-center text-primary'> HTML , CSS, JavaScript, TailwindCSS </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills