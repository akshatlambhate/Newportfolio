import React from "react";
import Logo from "../assets/logo.png";
import Mail from '../assets/mail.png'
import Linkdin from '../assets/linkdin.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/Github.png'

const Footer = () => {
  return (
    <div>
      <div className="sm:flex border-t border-gray mt-5">
        <div className="flex-1 flex-col mb-5">
            <div className="flex items-center ">
            <img src={Logo} width={80} alt="" />
                    <p className="text-xl text-white">Akshat Lambhate</p>
            </div>
          <div className="flex gap-2 items-center ml-5">
            <img src={Mail} className="w-5 h-3" alt="" />
          <p className="text-gray">akshatlambhate@gmail.com</p>
        </div>
        </div>
        
        <div className="flex-1 mt-5 sm:ml-5 ">
          <p className="text-xl text-gray text-center sm:text-left">Media</p>
          <div className="mt-3 flex gap-4 justify-center sm:justify-normal mb-4" >
            <img src={Linkdin} className="" alt="" />
            <img src={Instagram} width={28} className="" alt="" />
            <img src={Github} width={28} className="" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center mt-2 text-white pb-10">
        <p>© Copyright 2025. made by <span className="text-primary">Akshat</span>  Lambhate</p>
      </div>
    </div>
  );
};

export default Footer;
