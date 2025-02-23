import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImg from "../assets/hero-img.png";
import OutlineImg from "../assets/outline.png";
import Myimg from "../assets/my-img.png";
import { Element } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import HeroBg from '../assets/hero-bg.json'
import Dots from '../assets/Dots.png'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const box = imgRef.current;

    const handleMouseEnter = () => {
      gsap.to("#hero-img", {
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
      });
      gsap.to("#my-img", {
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to("#hero-img", {
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
      });
      gsap.to("#my-img", {
        opacity: 0, // Ensure it fully hides again
        duration: 1.8,
        ease: "power2.out",
      });
    };

    box.addEventListener("mouseenter", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Element name="hero" > 
    <div className="relative overflow-hidden">
    <div className="sm:flex hidden justify-center items-center w-full">
            <Lottie 
	    animationData={HeroBg}
        loop={true}
        autoplay={true}
        className="w-full h-[80vh] absolute top-6 -right-60 opacity-60"
      />
            </div>

      <div className="w-[75vw] h-[80vh] items-center mx-auto grid grid-cols-1 md:grid-cols-2" id="hero">
        <div id="hero-left" className="flex-1 flex flex-col gap-10 mt-10 md:mt-0">
          <div className="text-2xl text-white font-semibold leading-12 text-center md:text-left">
            <p>
              Transforming <span className="text-primary">ideas</span> into
              digital <span className="text-primary">Interactive</span>{" "}
              experiences.
            </p>
            <p className="text-lg text-gray mt-3">
              hi, I am{" "}
              <span className="text-primary text-5xl font-semibold">Akshat</span>{" "}
              <span className="text-white text-3xl">Lambhate</span>
            </p>
            <p className="text-sm mt-5 text-gray">I have a Proficiency in</p>
            <p className="text-gray">
              <Typewriter
                words={[
                  "FrontEnd Developer",
                  "MERN Developer",
                  "Full Stack Developer",
                  "UI / UX ",
                ]}
                cursor
                loop
                cursorStyle="||"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>
          <div className="flex justify-center md:justify-normal">
            <button className="border border-primary px-3 py-1 text-white hover:bg-white duration-350 cursor-pointer hover:text-bg">
              Contact me !!
            </button>
          </div>
        </div>
        <div ref={imgRef} className="flex-1 justify-center relative hidden sm:block ml-20" id="hero-right">
          <div className="z-0">
            <img src={OutlineImg} className="absolute w-40 opacity-0 sm:opacity-100" alt="" />
          </div>
          <div className="z-[999]" id="hero-img">
            <img src={HeroImg} width={380} alt="" />
          </div>
          <div className="z-[999] absolute -top-3 opacity-0 rotate-y-180" id="my-img">
            <img src={Myimg} width={340} alt="" />
          </div>
          <div className="flex  items-center gap-4 mt-2">
            <div className="w-5 h-5 flex text-center text-white bg-primary"></div>
            <div className="text-lg text-white flex items-center justify-center">
              <p className="">Hover here to see the glimpse</p>
            </div>
          </div>
        </div>
      </div>
      {/* extra elements */}
      <img src={Dots} id='dots' className='w-20 absolute top-50 -left-7 sm:opacity-90 opacity-0' alt="" />
      <div  id='box' className='w-20 h-20 border border-gray absolute top-0 -right-10 sm:block sm:opacity-90 opacity-0'><br /></div>
    </div>
         
    </Element>
  );
};

export default Hero;
