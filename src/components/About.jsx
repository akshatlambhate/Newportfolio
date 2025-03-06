import React from "react";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import { Link, Element } from "react-scroll";
import Lottie from "lottie-react";
import AboutLottie from "../assets/about_lotte.json";
import { useNavigate } from "react-router";
import Title from "./Title";


const About = () => {
 const navigate= useNavigate()
  return (
    <Element name="about-me">
      <div className=" bg-black py-10">
        <div className="sm:w-[80vw] mx-auto ">
         <Title title={'About Me'} />
          <div className="flex">
            <div className="sm:flex-1 sm:ml-5  mt-6 sm:mt-0 " id="left">
              <p className=" text-xl sm:text-lg text-gray  text-justify mx-7 sm:mx-0 ">
              Hi, I'm Akshat Lambhate, a Software Developer passionate about full-stack development, frontend, and AI. I hold a B.Tech in Computer Science Engineering from Shri Vaishnav Institute of Information Technology, Indore. Skilled in React, Next.js, MERN Stack, and Machine Learning, I've built projects like an E-Commerce Platform, a News Sentiment Analysis Website, and an iPhone Clone with 3D interactions. I love creating scalable, user-friendly applications and exploring new technologies. Open to collaborations and innovative ideas—let’s connect!
              </p>
              <button className="px-3 hidden sm:flex py-1 border border-primary text-white  items-center  mt-7 cursor-pointer hover:bg-white duration-400 hover:text-primary" onClick={()=>navigate('/about')}>
                Read More
                <div className="rotate-90 ml-3 text-primary">
                  <NavigationRoundedIcon />
                </div>
              </button>
            </div>
            <div className="flex-1 relative overflow-hidden" id="right">
              <div className="sm:flex hidden justify-center items-center">
                <Lottie
                  animationData={AboutLottie}
                  loop={true}
                  autoplay={true}
                  className="w-[600px] h-[300px] absolute top-0 left-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
