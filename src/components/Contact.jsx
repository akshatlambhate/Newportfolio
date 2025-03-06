import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import { Element } from 'react-scroll';
import backendimg from '../assets/backend-bg.jpg'
import instagram from '../assets/instagram.png'
import telegram from '../assets/telegram.png'
import Title from './Title';

const Contact = () => {
  return (
    <Element name='contact'>
      <div className='relative flex flex-col items-center justify-around'>
        
        {/* Header Section */}
     

        {/* Background Wrapper */}
        <div className='relative flex flex-col items-center justify-center w-full bg-bg -z-50'>
          <div className='pb-3 sm:pb-0'>
               <Title  title ={'Contact'} />

          </div>

          <div 
            className="absolute inset-0 bg-cover bg-center -z-10" 
            style={{ 
              backgroundImage: `url(${backendimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4  // Applied opacity only to background
            }}
          ></div>

          {/* Contact Form */}
          <div className='w-[80vw] sm:w-[55vw] bg-black z-50 mb-15 py-5 mx-auto flex flex-col items-center justify-center '>
            <div className=' '>
              <p className='text-white text-2xl sm:text-3xl text-center sm:mr-10 hidden sm:block '>Contact Me</p>
              <p className='text-white text-sm sm:text-lg w-[35vw] text-justified py-2.5 px-10 md:text-center hidden sm:block'>
                Feel free to reach out to me for any queries or collaborations. I am always open to new opportunities and challenges.
              </p>
              <form action="" className='flex flex-col justify-center items-center  sm:mr-0 mt-5 gap-4'>
                <input type="text" placeholder='Email Address' required className='bg-white w-60 sm:w-48  lg:w-80  px-2 py-1 rounded-xs' />
                <input type="text" placeholder='Name ' required className='bg-white w-60 sm:w-48 lg:w-80 px-2 py-1 rounded-xs' />
                <textarea name="" id="" placeholder='Message' className='bg-white w-60 sm:w-48 lg:w-80 px-2 py-1 rounded-xs'></textarea>
                <button className='border border-primary px-3 py-1 w-40 sm:w-20 lg:w-30 text-white hover:bg-primary duration-100 cursor-pointer hover:text-white'>Send</button>
              </form>
            </div>

            {/* Social Links */}
            <div className='w-1/3 flex mt-5 ml-4 sm:ml-0 sm:mt-0 flex-col py-5 gap-5 items-center border-0 sm:border  mr-5'>  
              <p className='text-white text-md  sm:text-2xl hidden  sm:block '>Connect me through...</p>

              <div className='flex  gap-2  sm:gap-5 items-center'>
                 <button className='px-3 py-1 w-10 sm:w-12  justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-md shadow-primary shadow-sm flex items-center '>
     
                <span><img src={instagram} width={40} className='bg-white rounded-xl' alt="" /></span> 
              </button>
              <button className='px-3 py-1 w-10 sm:w-12 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-md shadow-primary shadow-sm flex items-center'>
               
                <span><img src={Github} width={40} className='rounded-xl' alt="" /></span> 
              </button>
              <button className='px-3 py-1  w-10 sm:w-12 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-md shadow-primary shadow-sm flex items-center'>
               
                <span><img src={Linkdin} width={40} className='rounded-xl' alt="" /></span> 
              </button>
              <button className='px-3 py-1 w-10 sm:w-12 justify-between text-xl gap-3 rounded-sm text-white hover:scale-105 cursor-pointer hover:shadow-m shadow-primary shadow-sm flex items-center'>
              
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
