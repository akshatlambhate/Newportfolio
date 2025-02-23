import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import Instagram from '../assets/instagram.png'
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name='contact'>
   <div className='mt-5 sm:w-[75vw] m-auto '>
           <div className="flex items-center">
           <div className='flex sm:pb-8 mt-6 sm:mt-8 w-full items-start sm:justify-normal justify-center '>
        <div className='flex items-center'>
       <div className=' px-3 py-1 w-fit tracking-wider '><p className='text-xl sm:text-2xl text-white border-none sm:border border-black'><span className='text-primary'># </span>Contact </p></div> 
       <hr className='w-[40vw] text-primary hidden sm:inline' />
        </div>
      
    </div>
        <hr className="sm:w-[40vw] hidden text-primary" />
      </div>
      <div className="sm:flex gap-8 justify-around">
        <div className="flex w-[30vw]" id="left">
          <p className="text-sm sm:text-lg text-gray ml-5 leading-11">
          I’d love to connect and discuss potential collaborations, projects, or opportunities. Whether you have a question, an idea, or just want to say hello, feel free to reach out!
       
📧 Email: akshatlambhate@gmail.com
<br />
📞 Phone: +91-6264078037
<br />
🔗 LinkedIn: linkedin.com/in/akshat-lambhate
<br />
💻 GitHub: github.com/akshatlambhate
<br />

Looking forward to hearing from you!
            
          </p>
        </div>
        <div className=" " id="right">
            <div className='w-45  border border-gray sm:ml-20 ml-10 mt-6'>
                <p className='text-center text-xl text-gray border-b border-gray '>Message me</p>
                <div className='flex gap-6 px-3 mt-4'>
                    <img src={Github} className='w-6 h-6' alt="" />
                    <p className='text-xl text-white'>GitHub</p>
                </div>
                <div className='flex gap-6 px-3 mt-4'>
                    <img src={Linkdin} className='w-6 h-6' alt="" />
                    <p className='text-xl text-white'>Instagram</p>
                </div>
                <div className='flex gap-6 px-3 mt-4'>
                    <img src={Instagram} className='w-6 h-6' alt="" />
                    <p className='text-xl text-white'>Linkdin</p>
                </div>
             

            </div>
        </div>
      </div>
    </div>
    </Element>
    
  )
}

export default Contact