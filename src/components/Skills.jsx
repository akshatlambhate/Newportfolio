import React from 'react'
import Dots from '../assets/Dots.png'
import OutlineImg from '../assets/outline.png'

const Skills = () => {
  return (
    <div className='w-[75vw] m-auto'>
        <div className=' flex items-center'>
       <div className=' px-3 py-1 w-fit tracking-wider'><p className='text-2xl text-white border border-black'><span className='text-primary'># </span>Skills </p></div> 
       <hr className='w-[40vw] text-primary' />
        
        </div>
        <div className='flex'>
            <div id="left" className=' mt-6 ml-3 w-[26vw] h-60 relative'>
               <div className='w-20 h-20 border border-gray absolute top-0 right-5'><br /></div>
               <img src={Dots} className='w-20 absolute top-10 left-0' alt="" />
               <img src={OutlineImg} className='w-20 absolute bottom-0 left-10' alt="" />
               <img src={Dots} className='w-15 absolute top-30 right-20' alt="" />
               <div className='w-10 h-10 border border-gray absolute -bottom-3 -right-2'><br /></div>

            </div>
            <div id="right" className='flex-1 grid grid-cols-3 ml-20'>
                <div className='text-white border border-gray w-40 h-fit'>
                    <p className='text-center text-lg border-b border-gray'>Language</p>
                    <p className='text-lg text-center text-primary'> JavaScript, TypeScript, Python C++</p>
                </div>
                <div className='text-white border border-primary w-40 h-fit'>
                    <p className='text-center text-lg text-primary border-b border-gray  row-start-1'>Databases</p>
                    <p className='text-lg text-center text-gray'> MongoDB, SQL, PostgreSQL</p>
                </div>
                <div className='text-white border border-gray w-40 h-fit'>
                    <p className='text-center text-lg border-b border-gray'>Tools</p>
                    <p className='text-lg text-center text-primary'> VS Code, Figma, Canva, threeJS, Postman, StarUML, GoogleColab, MS-Office</p>
                </div>
                <div className='text-white border border-primary w-40 h-fit '>
                    <p className='text-center text-lg text-primary border-b border-gray '>FrameWorks</p>
                    <p className='text-lg text-center text-gray'> ReactJS , NextJS, Express, </p>
                </div>
                <div className='text-white border border-primary w-40 h-fit '>
                    <p className='text-center text-lg text-white border-b border-primary'>Others</p>
                    <p className='text-lg text-center text-primary'> HTML , CSS, JavaScript, TailwindCSS </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills