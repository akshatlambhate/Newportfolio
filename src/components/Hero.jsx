import React from "react";
import { Typewriter ,Cursor} from 'react-simple-typewriter'
import HeroImg from '../assets/hero-img.png'
import OutlineImg from '../assets/outline.png'

const Hero = () => {
  return (
    <div className="w-[75vw]  mx-auto flex">
      <div id="hero-left" className="flex-1 flex flex-col gap-10">
        <div className="text-2xl text-white font-semibold leading-12">
          <p>
            Transforming <span className="text-primary"> ideas</span> into digital
             <span className="text-primary"> Interactive </span> 
             experiences.
          </p>
          <p className="text-lg text-gray mt-3">hi, I am <span className="text-primary text-5xl font-semibold">Akshat</span>  <span className="text-white text-3xl">Lambhate</span></p>
          <p className="text-sm mt-5 text-gray ">I have  a Proficiency in</p>
          <p className="text-gray">
          <Typewriter
            words={['FrontEnd Developer', 'MERN Developer', 'Full Stack Developer', 'UI / UX ']}
            cursor
            loop
            cursorStyle='||'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </p>
        </div>
        <div>
          <button className="border border-primary px-3 py-1 text-white">Contact me !!</button>
        </div>
      </div>
      <div className="flex-1 relative" id="hero-right">
        <div className="z-auto"><img src={OutlineImg} className="absolute w-40" alt="" /></div>
         <div className="z-[999]"><img src={HeroImg} className="" width={380} alt="" /></div>
      <div className="flex justify-around items-center gap-4 mt-2">
        <div className="w-5 h-5 flex text-center text-white bg-primary"><br /></div>
        <div className="text-lg text-white flex items-center justify-center"><p className="">Portfolio</p></div>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
