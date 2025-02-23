import React from 'react'
import Dots from '../assets/Dots.png'
import Project from '../components/Project'
import AboutPageLottie from "../assets/aboutpage.json";
import Lottie from "lottie-react";

const AboutPage = () => {
  return (
    <div className=' relative overflow-hidden ' >
    <div className='w-[75vw] m-auto py-10 '>
          <div className='flex flex-col gap-3 '>
        <p className='text-2xl font-semibold text-white tracking-widest'><span className='text-primary mr-1 text-4xl'>/</span>About Me</p>
        <p className='text-gray mt- tracking-widest'>who am i ?</p>
        <div className="sm:w-[75vw] m-auto ">
          <div className="flex items-center">
            <div className="flex sm:pb-8 mt-6 sm:mt-8 w-full sm:items-start sm:justify-normal justify-center ">
       
            </div>
            <hr className="sm:w-[40vw] hidden text-primary" />
          </div>
          <div className="flex">
            <div className="sm:flex-1 " id="left">
              <p className="text-lg text-gray ml-5">
              I’m Akshat Lambhate, a passionate Software Developer with expertise in full-stack development, machine learning, and deep learning. I specialize in React.js, Next.js, MERN Stack, and AI-driven applications, building scalable and user-friendly solutions.

With hands-on experience in web development, UI/UX, and deep learning models, I thrive on solving complex problems and continuously learning new technologies. Beyond coding, I enjoy playing guitar, cooking, and exploring aviation and politics.

Let’s connect and build something innovative! 🚀
              </p>
            
            
            </div>
            <div className="flex-1 relative overflow-hidden sm:h-[30vh]" id="right">
              <div className="sm:flex hidden justify-center  items-center">
                <Lottie
                  animationData={AboutPageLottie}
                  loop={true}
                  autoplay={true}
                  className="w-[400px] h-[400px] absolute -top-18 -rotate-20 "
                />
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="">
        <div className='flex sm:pb-8 mt-6 sm:mt-8 w-full items-start sm:justify-normal justify-center '>
        <div className='flex items-center'>
       <div className=' px-3 py-1 w-fit tracking-wider '><p className='text-xl sm:text-2xl text-white border-none sm:border border-black'><span className='text-primary'># </span>Skills </p></div> 
       <hr className='w-[40vw] text-primary hidden sm:inline' />
        </div>
      
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
   
    {/* extra elements */}
     <img src={Dots} id='dots' className='w-20 absolute top-60 -left-7 sm:opacity-90 opacity-0' alt="" />
    
</div>
    </div>
  
  )
}

export default AboutPage