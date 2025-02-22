import React from 'react'
import Logo from '../assets/logo.png'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import NavSocial from './NavSocial';

const Navbar = () => {
  return (
    <div className="">

    <div className='absolute top-0 left-[-30px]'><NavSocial /></div>
          <nav className='w-[75vw] flex relative justify-between mx-auto px-4'>
    <div id="logo" className='flex items-center'>
        <img src={Logo} width={100} height={100} alt="" className= 'mt-8 pl-2' />
        <p className='text-2xl text-white font-semibold mt-4'>Akshat Lambhate</p>
    </div>
    <div id="menu" className='flex gap-5 items-center'>
        <ul className='flex gap-3 items-end h-12 mb-1'>
         <li className='text-white font-medium '> <span className='text-primary'>#</span> Home</li>
         <li className='text-[#ABB2BF] font-medium '> <span className='text-[#C778DD]'>#</span> Work</li>
         <li className='text-[#ABB2BF] font-medium '> <span className='text-[#C778DD]'>#</span> Contact</li>
         <li className='text-[#ABB2BF] font-medium '> <span className='text-[#C778DD]'>#</span> About-me</li>
        </ul>
        <button className='text-gray px-3 mt-4 py-1 border border-gray flex items-center'>  <span className='w-5 mr-2.5 text-primary'><CloudDownloadIcon /></span>Resume</button>
    </div>

   </nav>
    </div>
 
  )
}

export default Navbar