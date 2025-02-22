import React from "react";
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import { Link, Element } from 'react-scroll';
import Lottie from "lottie-react";
import AboutLottie from '../assets/about_lotte.json'

const About = () => {

  return (

    <Element name="about-me" >
  <div className="">
      <div className="flex items-center">
        <div className=" px-3 py-1 w-fit tracking-wider">
          <p className="text-2xl text-white  sm:border mt-10 sm:mt-3 border-black">
            <span className="text-primary"># </span>About Me{" "}
          </p>
        </div>
        <hr className="sm:w-[40vw] hidden text-primary" />
      </div>
      <div className="flex">
        <div className="sm:flex-1 " id="left">
          <p className="text-sm text-gray ml-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi
            praesentium nemo ipsa, nostrum expedita dolore enim obcaecati minima
            libero consectetur eos repellendus rerum incidunt. In labore
            quibusdam illo voluptatibus expedita voluptatem animi ipsa fugiat
            sit magnam, culpa reprehenderit. Quas. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam sequi velit inventore, dolor
            nobis consequatur quibusdam animi cum odio sint maiores pariatur
            praesentium aspernatur molestias amet sapiente. Est asperiores
            tempore recusandae ipsam labore inventore aspernatur iusto quisquam
            quaerat, ipsum saepe, consequatur odio iure veniam temporibus eum
            error, distinctio unde in.
          </p>
          <button className="px-3 py-1 border border-primary text-white flex  items-center ml-5 mt-7">
              Read More
            <div className="rotate-90 ml-3 text-primary"><NavigationRoundedIcon /></div>
            
          </button>
        </div>
        <div className="flex-1" id="right">
            <div className="sm:flex hidden justify-center items-center">
            <Lottie 
	    animationData={AboutLottie}
        loop={true}
        autoplay={true}
        className="w-[500px] h-[300px]"
      />
            </div>
        </div>
      </div>
    </div>

    </Element>
    
  );
};

export default About;
