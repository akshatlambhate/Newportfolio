import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import Instagram from '../assets/instagram.png'
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name='contact'>
   <div className='mt-5'>
           <div className="flex items-center">
        <div className=" px-3 py-1 w-fit tracking-wider">
          <p className="text-2xl text-white sm:border border-none border-black">
            <span className="text-primary"># </span>Contact{" "}
          </p>
        </div>
        <hr className="sm:w-[40vw] hidden text-primary" />
      </div>
      <div className="sm:flex flex-col">
        <div className="flex-1" id="left">
          <p className="text-sm text-gray ml-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi
            praesentium nemo ipsa, nostrum expedita dolore enim obcaecati minima
            libero consectetur eos repellendus rerum incidunt. In labore
            quibusdam illo voluptatibus expedita voluptatem animi ipsa fugiat
            
          </p>
        </div>
        <div className="flex-1 " id="right">
            <div className='w-45 border border-gray sm:ml-20 ml-10 mt-6'>
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