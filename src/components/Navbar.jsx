import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import NavSocial from "./NavSocial";
import { Link, Element } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Github from "../assets/Github.png";
import Linkdin from "../assets/linkdin.png";
import Mail from "../assets/mail.png";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { Link as RouterLink, useLocation } from "react-router";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const [menuShown, setMenuShown] = useState(false);
  useEffect(() => {
    console.log(menuShown);
  }, [menuShown]);

  useGSAP(() => {
    gsap.from("#menu", {
      duration: 1.4,
      x: 50,
      opacity: 0,
      delay: 0.4,
      stagger: 0.1,
      ease: "bounce.inOut",
    });
    gsap.to("#stickyNavbar", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#hero",
        start: "top -30px",
        end: "bottom 100px", // Navbar appears after scrolling past hero section
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className=" justify-center items-center flex ">
      {!menuShown && (
        <div
          className="absolute right-0 top-4 px-5 py-2 block md:hidden z-[1001] cursor-pointer"
          onClick={() => setMenuShown(true)}
        >
          <MenuRoundedIcon className="text-white" />
        </div>
      )}

      {/* //Hover Menu */}

      <div
        id="stickyNavbar"
        className=" gap-5 justify-center items-center fixed top-5 border  border-gray rounded-full px-6 py-2 z-[999] shadow-md opacity-0 hidden sm:flex  bg-black/80 "
      >
        <ul className="flex gap-3  items-center mb-1">
          {path === "/" ? (
            <Link to="hero" smooth={true} duration={600} offset={-5}>
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> Home
              </li>
            </Link>
          ) : (
            <RouterLink to="/">
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> Home
              </li>
            </RouterLink>
          )}
          {path === "/" ? (
            <Link to="project" smooth={true} duration={600} offset={-5}>
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> Work
              </li>
            </Link>
          ) : (
            <RouterLink to="/projects">
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> Work
              </li>
            </RouterLink>
          )}
          {path === "/" ? (
            <Link to="contact" smooth={true} duration={600} offset={-5}>
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> Contact
              </li>
            </Link>
          ) : (
            <RouterLink to="/">
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> Contact
              </li>
            </RouterLink>
          )}
          {path === "/" ? (
            <Link to="about-me" smooth={true} duration={600} offset={-5}>
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> About-me
              </li>
            </Link>
          ) : (
            <RouterLink to="/about">
              <li className="text-white font-medium cursor-pointer hover:text-primary">
                {" "}
                <span className="text-primary">#</span> About-me
              </li>
            </RouterLink>
          )}
        </ul>
      </div>

      {/*  */}

      <div className="absolute top-0 left-[-40px] hidden sm:block">
        <NavSocial />
      </div>
      <nav className="w-[80vw] relative hidden md:flex gap-10 justify-between items-center mx-auto ">
        <div id="logo" className="flex items-center">
          <img
            src={Logo}
            width={100}
            height={60}
            
            alt=""
            className="mt-1"
          />
          <p className="text-2xl text-white text-center font-semibold ">
            Akshat Lambhate
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-3 items-center h-12 mb-1">
            <Link to="hero" smooth={true} duration={600}>
              <li
                className="text-white font-medium cursor-pointer  hover:text-primary "
                id="menu"
              >
                {" "}
                <span className="text-primary">#</span> Home
              </li>
            </Link>
            <Link to="project" smooth={true} duration={600} offset={-5}>
              <li
                className="text-white font-medium cursor-pointer hover:text-primary "
                id="menu"
              >
                {" "}
                <span className="text-primary">#</span> Work
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={600} offset={-5}>
              <li
                className="text-white font-medium cursor-pointer hover:text-primary "
                id="menu"
              >
                {" "}
                <span className="text-primary">#</span> Contact
              </li>
            </Link>
            <Link to="about-me" smooth={true} duration={600} offset={-5}>
              <li
                className="text-white font-medium cursor-pointer hover:text-primary "
                id="menu"
              >
                {" "}
                <span className="text-primary">#</span> About-me
              </li>
            </Link>
          </ul>
          <RouterLink
            to="https://drive.google.com/file/d/1BG22jy8VFv4mtJcSG8pusKFCyEbTaImt/view?usp=sharing"
            target="_blank"
          >
            <button className="text-gray px-3 py-1 mb-1 border border-primary flex items-center cursor-pointer :bg-white duration-400 hover:border-none group hover:bg-white hover:text-bg">
              {" "}
              <span className="w-5 mr-2.5 group-hover:text-bg ">
                <CloudDownloadIcon />
              </span>
              Resume
            </button>
          </RouterLink>
        </div>
      </nav>
      {/* Hamburger Menu */}
      {menuShown && (
        <div
          className={`w-full h-screen flex-col justify-between bg-bg z-[1000]  absolute top-0 right-0 `}
        >
          <div>
            <div
              id="logo"
              className="flex items-center justify-between px-5 border-b border-gray"
            >
              <div className="flex items-center justify-center">
                <img
                  src={Logo}
                  width={60}
                  height={60}
                  alt=""
                  className="mt-8 pl-2"
                />
                <p className="text-xl text-white font-semibold mt-4">
                  Akshat Lambhate
                </p>
              </div>
              <CloseRoundedIcon
                className="text-white cursor-pointer"
                onClick={() => setMenuShown(false)}
              />
            </div>
            <div>
              <ul className="flex flex-col text-2xl gap-3 items-start ml-4 mt-4">
                <Link to="hero" smooth={true} duration={600} offset={-5}>
                  <li
                    className="text-white font-medium cursor-pointer  hover:text-primary  "
                    id="menu"
                  >
                    {" "}
                    <span className="text-primary">#</span> Home
                  </li>
                </Link>
                <Link to="project" smooth={true} duration={600} offset={-5}>
                  <li
                    className="text-white font-medium cursor-pointer hover:text-primary"
                    id="menu"
                  >
                    {" "}
                    <span className="text-primary">#</span> Work
                  </li>
                </Link>
                <Link to="contact" smooth={true} duration={600} offset={-5}>
                  <li
                    className="text-white font-medium cursor-pointer hover:text-primary"
                    id="menu"
                  >
                    {" "}
                    <span className="text-primary">#</span> Contact
                  </li>
                </Link>
                <Link to="about-me" smooth={true} duration={600} offset={-5}>
                  <li
                    className="text-white font-medium cursor-pointer hover:text-primary"
                    id="menu"
                  >
                    {" "}
                    <span className="text-primary">#</span> About-me
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className=" flex justify-center gap-5 mt-16">
            <img src={Github} width={32} alt="" id="img" />
            <img src={Linkdin} width={32} alt="" id="img" />
            <img src={Mail} width={32} alt="" id="img" />
          </div>
        </div>
      )}

      {/*  */}
    </div>
  );
};

export default Navbar;
