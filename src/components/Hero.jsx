import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImg from "../assets/hero-img.png";
import OutlineImg from "../assets/outline.png";
import Myimg from "../assets/my-img.png";
import { Element, Link } from "react-scroll";
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
    <div className="relative overflow-hidden sm:mt-12">
   
      <div className="w-[80vw] md:min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 mx-auto " id="hero">
        <div id="hero-left" className="flex flex-col items-center justify-between md:mt-0">
          <div className="text-2xl text-white flex gap-7  flex-col font-semibold my-5 leading-12 text-center md:text-left">
              <div className="leading-10">
                 <p>
            Passionate <span className="text-primary"> Full-stack</span>   developer
            creating  <span className="text-primary"> Impactful</span>{" "}
            digital experiences with <span className="text-primary"> AI</span> and <span className="text-primary">web tech </span>
            </p>
              </div>
              <div>

                <p className="text-lg flex flex-col sm:flex-row items-end gap-2 text-gray mt-3 ">
             <span className=" "> Hi, I am </span>  {" "}
              <span className="text-primary text-5xl  font-semibold"> AKSHAT</span>
              <span className="text-white text-3xl"> &nbsp;Lambhate</span>
            </p>
              </div>

              <div className="leading-10">
                
            <p className="text-[18px] mt-5 text-gray">I have a Proficiency in</p>
            <p className="text-gray hidden sm:block">
              <Typewriter
                words={[
                  "FRONTEND DEVELOPMENT",
                  "MERN DEVELOPMENT",
                  "FULL STACK DEVEL0PMENT",
                  "UI / UX ",
                ]}
                cursor
                loop
                cursorStyle="||"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              
              />
            </p>
              </div>


            <div className="">
            <Link to="contact" smooth={true} duration={1000}> 
            <button className="border text-xl border-primary px-3 py-1 text-white hover:bg-white cursor-pointer hover:text-bg">
              Contact me !!
            </button>
            
            </Link>
          </div>
           
          </div>

         
        </div>

        <div ref={imgRef} className="  sm:flex-col justify-end relative items-center mt-5 " id="hero-right">
        <div className="sm:flex hidden justify-center items-center">
            <Lottie 
           
	    animationData={HeroBg}
        loop={true}
        autoplay={true}
        className="w-[100%] h-[70vh] absolute -top-20 -right-20 -z-30 opacity-60"
      />
            </div>

          <div  className="z-[999] hidden  sm:flex items-center justify-end" id="hero-img">
            <img  src={HeroImg} width={360} alt="" />
          </div>
          <div className="z-[10] absolute -top-3 right-7 opacity-0 rotate-y-180" id="my-img">
            <img src={Myimg} width={340} alt="" />
          </div>
          <div className="flex items-center justify-end mr-22 gap-4 mt-5">
            <div className="text-md text-white hidden sm:flex items-center justify-center">
              <p className="">Hover here to see the glimpse</p>
            </div>
  


          </div>
        </div>
      </div>
    </div>
         
    </Element>
  );
};

export default Hero;
