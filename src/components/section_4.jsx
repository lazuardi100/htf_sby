import data from '../data/section_4.json'
import './section_4.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section4(){
  AOS.init();
  
  return (
    <div className="section_4 bg-white px-4 md:px-0 py-16 md:py-36">
      {/* card container */}
      <div className="flex md:flex-row flex-col w-full md:mt-8 mt-2">
        {/* create white card with image in the left and in the right there is card title and body */}
        {data.calltoaction.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center bg-white w-full md:w-[80%] mx-auto md:mt-0 mt-8 rounded md:h-72"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="false"
            data-aos-delay={index * 250}
          >
            <div className="w-full md:w-8/12 p-4">
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
              
                  <button class="p-0 border-none bg-none">
                    <svg class="w-48 h-48 rounded-full bg-black hover:bg-gray-500 text-white cursor-pointer">
                      <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="1rem" dy=".3em">Join Us</text>
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
