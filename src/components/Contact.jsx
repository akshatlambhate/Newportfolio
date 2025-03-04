import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import { Element } from 'react-scroll';
import backendimg from '../assets/backend-bg.jpg'
import instagram from '../assets/instagram.png'
import telegram from '../assets/telegram.png'

const Contact = () => {
  return (
    <Element name='contact'>
      <div className='relative flex flex-col items-center justify-around'>
        
        {/* Header Section */}
        <div className="flex items-center mt-5 sm:w-[75vw] m-auto">
          <div className='flex sm:pb-8 mt-6 sm:mt-8 w-full items-start sm:justify-normal justify-center '>
            <div className='flex items-center'>
              <div className='px-3 py-1 w-fit tracking-wider'>
                <p className='text-xl sm:text-2xl text-white border-none sm:border border-black'>
                  <span className='text-primary'># </span>Contact
                </p>
              </div> 
              <hr className='w-[40vw] text-primary hidden sm:inline' />
            </div>
          </div>
          <hr className="sm:w-[40vw] hidden text-primary" />
        </div>

        {/* Background Wrapper */}
        <div className='relative flex items-center justify-center w-full'>
          <div 
            className="absolute inset-0 bg-cover bg-center -z-10" 
            style={{ 
              backgroundImage: `url(${backendimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.5  // Applied opacity only to background
            }}
          ></div>

          {/* Contact Form */}
          <div className='w-[70vw] bg-black z-50 mx-auto my-10 py-5 flex flex-col items-center md:items-start sm:flex-row'>
            <div className='w-2/3 ml-10'>
              <p className='text-white text-2xl sm:text-3xl text-center md:text-start mr-10 '>Contact Me</p>
              <p className='text-white text-sm sm:text-lg text-center md:text-start mr-10'>
                Feel free to reach out to me for any queries or collaborations. I am always open to new opportunities and challenges.
              </p>
              <form action="" className='flex flex-col justify-center items-center md:items-start mr-6 sm:mr-0 mt-5 gap-4'>
                <input type="text" placeholder='Email Address' required className='bg-white w-40 sm:w-48 lg:w-72 px-2 py-1 rounded-xs' />
                <input type="text" placeholder='Name ' required className='bg-white w-40 sm:w-48 lg:w-72 px-2 py-1 rounded-xs' />
                <textarea name="" id="" placeholder='Message' className='bg-white w-40 sm:w-48 lg:w-72 px-2 py-1 rounded-xs'></textarea>
                <button className='border border-primary px-3 py-1 w-40 sm:w-48 lg:w-72 text-white hover:bg-primary duration-100 cursor-pointer hover:text-white'>Send</button>
              </form>
            </div>

            {/* Social Links */}
            <div className='w-1/3 flex mt-5 ml-4 sm:ml-0 sm:mt-0 flex-col py-5 gap-5 items-center border-0 sm:border  mr-5'>  
              <p className='text-white text-lg  sm:text-2xl  sm:block '>Connect with me...</p>

              <div className='flex sm:flex-col gap-2  sm:gap-5 items-center'>
                 <button className='px-3 py-1 w-12 sm:w-48 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-md shadow-primary shadow-sm flex items-center '>
                <span className='hidden sm:inline'>Instagram</span> 
                <span><img src={instagram} width={40} className='bg-white rounded-xl' alt="" /></span> 
              </button>
              <button className='px-3 py-1 w-12 sm:w-48 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-md shadow-primary shadow-sm flex items-center'>
                <span className='hidden sm:inline'>GitHub</span> 
                <span><img src={Github} width={40} className='rounded-xl' alt="" /></span> 
              </button>
              <button className='px-3 py-1 w-12 sm:w-48 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-md shadow-primary shadow-sm flex items-center'>
                <span className='hidden sm:inline'>LinkedIn</span> 
                <span><img src={Linkdin} width={40} className='rounded-xl' alt="" /></span> 
              </button>
              <button className='px-3 py-1 w-12 sm:w-48 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-m shadow-primary shadow-sm flex items-center'>
                <span className='hidden sm:inline'>Telegram</span> 
                <span><img src={telegram} width={40} className='bg-white rounded-full' alt="" /></span> 
              </button>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Contact
