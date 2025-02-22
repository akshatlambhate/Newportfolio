import React from "react";
import Logo from "../assets/logo.png";
import Mail from '../assets/mail.png'
import Linkdin from '../assets/linkdin.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/Github.png'

const Footer = () => {
  return (
    <div>
      <div className="flex border-t border-gray mt-5">
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
        
        <div className="flex-1 mt-5 ml-5">
          <p className="text-xl text-gray ">Media</p>
          <div className="mt-3 flex gap-4">
            <img src={Linkdin} className="" alt="" />
            <img src={Instagram} width={28} className="" alt="" />
            <img src={Github} width={28} className="" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center text-white ml-">
        <p> Copyright 2025. made by Akshat Lambhate</p>
      </div>
    </div>
  );
};

export default Footer;
