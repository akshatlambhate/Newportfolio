import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canva, Figma, GithubNew, javscript, PostgreSQL, Postman, typescript, Vercel, vite , tailwind , html , css, threejs, redux,react,Express,Socket,FastApi, MySql,mongodb, firebase, MaterialUI,NextJS,nodejs } from "../assets/assest";
import starBg from "../assets/star-bg.jpg";
import starBg2 from "../assets/star-bg-2.jpg";
import starBg3 from "../assets/star-bg-3.jpg";
import SkillBox from "./SkillBox";
import Title from "./Title";


gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  useGSAP(() => {
    gsap.to("#frontend-skill-left", {
      x: "-30%",
      duration: 0.8,

      scrollTrigger: {
        trigger: "#frontend-skills",
        scrub: 3,
        start: "top 70%",
        end: "bottom 70%",
        ease:"power2.inOut",
    
    
        
      },
    });

    gsap.from("#front-end-skill-box", {
      opacity: 0.6,
      scale: 0.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#frontend-skills",
        scrub: 2,
        start: "top 70%",
        end: "bottom 50%",
      },
    });
    gsap.to("#frontend-skill-right", {
      x: "65%",
      duration: 0.6,

      scrollTrigger: {
        trigger: "#frontend-skills",
        scrub: 2,
        start: "top 70%",
        end: "bottom 70%",
        ease:"power2.inOut",
       
  
      },
    });

    gsap.to("#tools-skill-left", {
      x: "-30%",
      duration: 0.8,

      scrollTrigger: {
        trigger: "#tools-skills",
        scrub: 3,
        start: "top 70%",
        end: "bottom 70%",
        ease:"power2.inOut",
      },
    });

    gsap.from("#tools-skill-box", {
      opacity: 0.4,
      scale: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#tools-skills",
        scrub: 2,
        start: "top 70%",
        end: "bottom 50%",
      },
    });
    gsap.to("#tools-skill-right", {
      x: "65%",
      duration: 0.6,

      scrollTrigger: {
        trigger: "#tools-skills",
        scrub: 2,
        start: "top 70%",
        end: "bottom 70%",
        ease:"power2.inOut",
      },
    });


    gsap.to("#backend-skill-left", {
      x: "-65%",
      duration: 0.8,

      scrollTrigger: {
        trigger: "#backend-skills",
        scrub: 3,
        start: "top 70%",
        end: "bottom 70%",
        ease:"power2.inOut",
      },
    });


    gsap.from("#backend-skill-box", {
      opacity: 0.4,
      scale: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#backend-skills",
        scrub: 2,
        start: "top 70%",
        end: "bottom 50%",
      },
    });
    gsap.to("#backend-skill-right", {
      x: "30%",
      duration: 0.6,

      scrollTrigger: {
        trigger: "#backend-skills",
        scrub: 2,
        start: "top 70%",
        end: "bottom 70%",
        ease:"power2.inOut",
      },
    });



  });
  return (
    <div className="flex flex-col relative overflow-hidden" id="skills">
        <Title title={'Skill'} />
      {/* Skills Card */}
      <div className="flex flex-col gap-10 my-10">
        {/* frontend Skills */}
        <div className="flex" id="frontend-skills">
          <div
            className={` relative h-[55vh] bg-[#121212] shadow-lg shadow-primary r w-1/3  flex items-center justify-end text-7xl `}
            id="frontend-skill-left"
          >
            <h1 className="mr-4 text-white  ">Front End </h1>
          </div>
          <div
            className=" bg-bg h-[55vh] w-full absolute -z-10 flex items-center justify-center"
            id="Content"
          >
            <div className=" h-[58vh] w-[50vw]">
              <div className="grid grid-cols-5 my-10 space-y-6  text-center items-center justify-center">
                <img
                  src={starBg}
                  className="absolute  top-0 right-20  w-full h-[55vh] "
                  alt=""
                    id="star-bg"
                />
                <SkillBox label={"JavaScript"} image={javscript} background={'none'} id='front-end-skill-box' />
                <SkillBox label={"Material UI"} image={MaterialUI} background={'none'} id='front-end-skill-box' />
                <SkillBox label={"NextJS"} image={NextJS} background={'white'} id='front-end-skill-box' />
                <SkillBox label={"FastApi"} image={FastApi} background={'none'} id='front-end-skill-box' />
               <SkillBox label={"HTML"} image={html} background={'none'} id='front-end-skill-box' />
               <SkillBox label={"TypeScript"} image={typescript} background={'none'} id={'front-end-skill-box'} />
                <SkillBox label={"Tailwind"} image={tailwind} background={'none'} id='front-end-skill-box' />
                <SkillBox label={"CSS"} image={css} background={'none'} id='front-end-skill-box' />
                <SkillBox label={"React"} image={react} background={'none'} id='front-end-skill-box' />
                <SkillBox label={"Redux"} image={redux} background={'none'} id='front-end-skill-box' />
              </div>
            </div>
          </div>

          <div
            className="h-[55vh] bg-bg w-2/3  flex items-center justify-start text-7xl shadow-lg shadow-primary  "
            id="frontend-skill-right"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 2px, transparent 2px, transparent 20px)",
            }}
          >
            <h1 className="ml-4 text-gray">Skills</h1>
          </div>
        </div>
        {/* backend Skills */}
        <div className="flex" id="backend-skills">
          <div
            className={` h-[55vh] bg-bg shadow-lg shadow-primary r w-2/3 flex items-center justify-end text-7xl `}
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 2px, transparent 2px, transparent 20px)",
            }}
            id="backend-skill-left"
          >
            <h1 className="mr-4 text-gray ">Backend End </h1>
          </div>
          <div
            className=" bg-bg h-[55vh] w-full absolute -z-10 flex items-center justify-center"
            id="Content"
          >
            <div className=" h-[58vh] w-[50vw]">
              <div className="grid grid-cols-4 my-10 space-y-6  text-center items-center justify-center">
                <img
                  src={starBg2}
                  className="absolute  top-0 right-20  w-full h-[55vh] "
                  alt=""
                    id="star-bg"
                />
              <SkillBox label={"NodeJS"} image={nodejs} background={'none'} id='backend-skill-box' />
                <SkillBox label={"Express"} image={Express} background={'white'} id='backend-skill-box' />
                <SkillBox label={"PostgreSQL"} image={PostgreSQL} background={'none'} id='backend-skill-box' />
                <SkillBox label={"MongoDB"} image={mongodb} background={'none'} id='backend-skill-box' />
                <SkillBox label={"Socket.io"} image={Socket} background={'none'} id='backend-skill-box' />
                <SkillBox label={"Firebase"} image={firebase} background={'none'} id='backend-skill-box' />
                <SkillBox label={"MY SQL"} image={MySql} background={'white'} id='backend-skill-box' />
              </div>
            </div>
          </div>

          <div
            className="h-[55vh] bg-[#121212] w-1/3 flex items-center justify-start text-7xl shadow-lg shadow-primary relative"
            id="backend-skill-right"
          >
            <h1 className="ml-4 text-white">Skills</h1>
          </div>
        </div>


        {/* Tools and Liberaries */}

        <div className="flex" id="tools-skills">
          <div
            className={` relative h-[55vh] bg-[#121212] shadow-lg shadow-primary r w-1/3  flex items-center justify-end text-7xl `}
            id="tools-skill-left"
          >
      
            <h1 className="mr-4 text-white  ">Tools &</h1>
          </div>
          <div
            className=" bg-bg h-[55vh] w-full absolute -z-10 flex items-center justify-center"
            id="Content"
          >
            <div className=" h-[58vh] w-[50vw]">
              <div className="grid grid-cols-4  my-10 space-y-6  text-center items-center justify-center">
                <img
                  src={starBg3}
                  className="absolute  top-0 right-20  w-full h-[55vh] "
                  id="star-bg"
                  alt=""
                />
              <SkillBox label={"Vite"} image={vite} background={'none'} id={'tools-skill-box'} />
                <SkillBox label={"ThreeJS"} image={threejs} background={'white'} id={'tools-skill-box'} />
                <SkillBox label={"Figma"} image={Figma} background={'none'} id={'tools-skill-box'} />
                <SkillBox label={"Vercel"} image={Vercel} background={'white'} id={'tools-skill-box'} />
                <SkillBox label={"Postman"} image={Postman} background={'none'} id={'tools-skill-box'} />
                <SkillBox label={"Canva"} image={Canva} background={'none'} id={'tools-skill-box'} />
                   
              </div>
            </div>
          </div>

          <div
            className="h-[55vh] bg-bg w-2/3  flex items-center justify-start text-7xl shadow-lg shadow-primary  "
            id="tools-skill-right"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) 2px, transparent 2px, transparent 20px)",
            }}
          >
            <h1 className="ml-4 text-gray"> Libraries</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
