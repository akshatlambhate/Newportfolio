import React from 'react'
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import Mail from '../assets/mail.png'

const NavSocial = () => {
  return (
    <div className='w-fit flex flex-col  gap- relative'>
    <hr className='w-40 text-white rotate-90 ' />
    <div className='absolute top-25 left-17.5 flex flex-col gap-4'>
        <img src={Github} width={22} alt="" />
    <img src={Linkdin} width={22} alt="" />
    <img src={Mail} width={22} alt="" />
    </div>
    
    </div>
  )
}

export default NavSocial