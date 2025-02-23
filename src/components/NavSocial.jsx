import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import Mail from '../assets/mail.png'
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
const NavSocial = () => {
  useGSAP(() => {
    
    gsap.from('#img',{
      y:-100,
      opacity:0,
      duration:1.2,
      stagger:0.4,
      ease:'elastic.inOut',
      delay:0.2,




    })
  })

  return (
    <div className='w-fit flex flex-col relative'>
    <hr className='w-40 text-white rotate-90 ' />
    <div className='absolute top-25 left-17.5 flex flex-col gap-4'>
      <img src={Github} width={22} alt="" className='hover:w-6 cursor-pointer hover:bg-primary rounded-full'  id='img'/>
    <img src={Linkdin} width={22} className='hover:w-7 cursor-pointer ' alt="" id='img' />
    <img src={Mail} width={22} alt="" id='img' className='hover:w-6 cursor-pointer ' />
    </div>
    
    </div>
  )
}

export default NavSocial