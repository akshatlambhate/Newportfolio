import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import Instagram from '../assets/instagram.png'

const Contact = () => {
  return (
    <div className='mt-5'>
           <div className="flex items-center">
        <div className=" px-3 py-1 w-fit tracking-wider">
          <p className="text-2xl text-white border border-black">
            <span className="text-primary"># </span>Contact{" "}
          </p>
        </div>
        <hr className="w-[40vw] text-primary" />
      </div>
      <div className="flex">
        <div className="flex-1" id="left">
          <p className="text-sm text-gray ml-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi
            praesentium nemo ipsa, nostrum expedita dolore enim obcaecati minima
            libero consectetur eos repellendus rerum incidunt. In labore
            quibusdam illo voluptatibus expedita voluptatem animi ipsa fugiat
            
          </p>
        </div>
        <div className="flex-1 " id="right">
            <div className='w-45 border border-gray ml-20'>
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
  )
}

export default Contact