import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import NavSocial from './NavSocial';
import { Link, Element } from 'react-scroll';
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Github from '../assets/Github.png'
import Linkdin from '../assets/linkdin.png'
import Mail from '../assets/mail.png'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [menuShown, setMenuShown] = useState(false);
    useEffect(()=>{
      console.log(menuShown);

    },[menuShown]);
 
  useGSAP(() => {
      gsap.from('#menu',{
        duration:1.4,
        x:50,
        opacity:0,
        delay:0.4,
        stagger:0.1,
        ease:'bounce.inOut'

      })
    

    gsap.to("#stickyNavbar", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#hero",
        start: "top 10px", 
        end:'bottom 200px',// Navbar appears after scrolling past hero section
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    

    <div className=" justify-center items-center flex " >

       {!menuShown && (
  <div
    className="absolute right-5 top-5 px-5 py-2 block md:hidden z-[1001] cursor-pointer"
    onClick={() => setMenuShown(true)}
  >
    <CategoryRoundedIcon className="text-white" />
  </div>
)}

       
       {/* //Hover Menu */}
      
          <div id="stickyNavbar" className=' gap-5 justify-center items-center fixed top-5 border  border-gray rounded-full px-6 py-2 z-[999] shadow-md opacity-0 hidden sm:flex '>
        <ul className='flex gap-3  items-center mb-1'>
          <Link to='hero' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary'  > <span className='text-primary'>#</span> Home</li></Link>
          <Link to='project' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary' > <span className='text-primary'>#</span> Work</li></Link>
          <Link to='contact' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary' > <span className='text-primary'>#</span> Contact</li></Link>
          <Link to='about-me' smooth={true} duration={600} offset={-5}><li className='text-white font-medium cursor-pointer hover:text-primary' > <span className='text-primary'>#</span> About-me</li></Link>
      </ul>

    </div>

        
 
   {/*  */}

    <div className='absolute top-0 left-[-30px] hidden sm:block'><NavSocial /></div>
          <nav className='w-[75vw] relative hidden md:flex justify-between mx-auto px-4'>
    <div id="logo" className='flex items-center'>
        <img src={Logo} width={100} height={100} alt="" className= 'mt-8 pl-2' />
        <p className='text-2xl text-white font-semibold mt-4'>Akshat Lambhate</p>
    </div>
    <div className='flex gap-5 items-center'>
        <ul className='flex gap-3 items-end h-12 mb-1'>
          <Link to='hero' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer  hover:text-primary ' id='menu'> <span className='text-primary'>#</span> Home</li></Link>
          <Link to='project' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary ' id='menu'> <span className='text-primary'>#</span> Work</li></Link>
          <Link to='contact' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary 'id='menu'> <span className='text-primary'>#</span> Contact</li></Link>
          <Link to='about-me' smooth={true} duration={600} offset={-5}><li className='text-white font-medium cursor-pointer hover:text-primary ' id='menu'> <span className='text-primary'>#</span> About-me</li></Link>
        
        </ul>
        <button className='text-gray px-3 mt-4 py-1 border border-gray flex items-center cursor-pointer hover:bg-white duration-400 hover:text-primary'>  <span className='w-5 mr-2.5 text-primary hover: hover:font-bold'><CloudDownloadIcon /></span>Resume</button>
    </div>

   </nav>
     {/* Hamburger Menu */}
     {menuShown &&  <div className={`w-full h-screen flex-col justify-between bg-bg z-[1000]  absolute top-0 right-0 `}>
        <div>
           <div id="logo" className='flex items-center justify-between px-5 border-b border-gray'>
        <div className='flex items-center justify-center'>
             <img src={Logo} width={60} height={60} alt="" className= 'mt-8 pl-2' />
            <p className='text-xl text-white font-semibold mt-4'>Akshat Lambhate</p>
        </div>
         <CloseRoundedIcon className='text-white cursor-pointer' onClick={()=>setMenuShown(false)} />
    </div>
    <div>
    <ul className='flex flex-col text-2xl gap-3 items-start ml-4 mt-4'>
          <Link to='hero' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer  hover:text-primary  ' id='menu'> <span className='text-primary'>#</span> Home</li></Link>
          <Link to='project' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary' id='menu'> <span className='text-primary'>#</span> Work</li></Link>
          <Link to='contact' smooth={true} duration={600} offset={-5} ><li className='text-white font-medium cursor-pointer hover:text-primary'id='menu'> <span className='text-primary'>#</span> Contact</li></Link>
          <Link to='about-me' smooth={true} duration={600} offset={-5}><li className='text-white font-medium cursor-pointer hover:text-primary' id='menu'> <span className='text-primary'>#</span> About-me</li></Link>
        
        </ul>
    </div> 
        </div>
    
    <div className=' flex justify-center gap-10 mt-16' >
          <img src={Github} width={32} alt=""  id='img'/>
        <img src={Linkdin} width={32} alt="" id='img' />
        <img src={Mail} width={32} alt="" id='img' />
        </div>
        
    </div> }
   


   {/*  */}
    </div>
 
  )
}

export default Navbar