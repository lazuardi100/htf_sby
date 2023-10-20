import data from '../data/section_4.json'
import './section_4.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from 'react';

import ReactGA from "react-ga4";

export default function Section4(){
  AOS.init();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const visitRegistration = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Join Now",
    });
    window.open("https://tally.so/r/npo4oJ");
  }

  
  return (
    <div id='join-now' className="section_4 bg-white px-4 md:px-0 py-16 md:py-36 border-t border-white">
      {/* card container */}
      <div className="flex md:flex-row flex-col w-full md:mt-8 mt-2">
        {/* create white card with image in the left and in the right there is card title and body */}
        {data.calltoaction.map((item, index) => (

          <div
            key={index}
            className="div-head flex flex-col md:flex-row items-center justify-center bg-white w-full md:w-[80%] mx-auto md:mt-0 mt-8 rounded md:h-72"
          >
            <div className="w-full md:w-8/12 p-4 m-0"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false"
            data-aos-offset="0" 
            data-aos-delay={index * 250}>
                <h1 className="text-black headCTA mb-6 lg:mb-10 text-left">
                  <b>{item.head}</b>
                </h1>
                <p className="text-black text-left">{item.desc}</p>
            </div>

            <div className="flex items-center lg:justify-end justify-center w-full md:w-4/12 custom-margin-top-inherit"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="false"
            >
                  <button
                    className="custom-button p-0 border-none bg-none" // Apply the className here
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={visitRegistration}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-48 h-48 rounded-full cursor-pointer button-join"
                      viewBox="0 0 100 100"
                    >
                      {isHovered ? (
                        <>
                          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#000000" strokeWidth="1" />
                          <text x="50%" y="50%" textAnchor="middle" fontSize="0.5rem" dy=".3em" fill="#000000">
                            Join Now
                          </text>
                        </>
                      ) : (
                        <>
                          <circle cx="50" cy="50" r="45" fill="#000000" />
                          <text x="50%" y="50%" textAnchor="middle" fontSize="0.5rem" dy=".3em" fill="#ffffff">
                            Register here
                          </text>
                        </>
                      )}
                    </svg>
                  </button>
            </div>
          </div>


        ))}
        {/* end of card */}
      </div>
      {/* end card container */}
    </div>
  );
}

