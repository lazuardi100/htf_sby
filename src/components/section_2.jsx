import data from '../data/section_2.json';
import './section_2.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section2() {
  AOS.init();

  return (
    <div className="bg-white section_2">

      <div className="px-4 md:px-16 pt-4">

        <div className='rounded mx-auto flex items-center mt-8 justify-center'>
          <h1 className="bg-[#F6F6F6] inline-block rounded p-2 text-[#555555]">
            About Event
          </h1>
        </div>

        {/* card container */}
        <div className="flex  md:flex-row md:justify-center flex-col flex-wrap w-full md-6 mb-6 mt-8">
          {/* create white card with image on the left and card title and body on the right */}
          {data.about.map((item, index) => {
            let fadeMode = 'fade-up';
            if (index % 2 === 0) {
              fadeMode = 'fade-down';
            }
            return (
              <div
                key={index}
                className="event md:w-full  px-1.5 w-full mb-4"
                data-aos={fadeMode}
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={index * 250}
              >
                <p className="text-[#000000] font-bold text-center">{item.p1}</p>
                <p className="text-[#000000] font-bold text-center">{item.p2}</p>
              </div>
            );
          })}
          {/* end of card */}
        </div>
        {/* end card container */}

              <hr className="w-full border-t-2 border-gray-300" />

        <div className='rounded-s mx-auto flex items-center justify-center'>
          <h1 className="bg-[#F6F6F6] inline-block p-2 rounded text-[#555555] mt-8 ">
            Our Goals
          </h1>
        </div>

        <div className="flex flex-row flex-wrap drop-shadow-lg justify-center  md-6 mt-8 p-5">
          {data.contributor.map((item, index) => {
            let fadeMode = 'fade-up';
            if (index % 2 === 0) {
              fadeMode = 'fade-down';
            }
            return (
              <div
                key={index}
                className="goals md:w-1/3 w-full md:px-1.5 mb-4"
                data-aos={fadeMode}
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={index * 250}
              >
                <div className='bg-white p-4 rounded mx-3'>
                  <div className="flex">
                    <img src={item.img} className="resized-image" alt="placeholder" />
                    <h2 className="ml-2 font-bold text-base">{item.title}</h2>
                  </div>
                  <div className="flex mb-5"></div>
                  <h1 className="text-black text-xs mb-5">{item.desc}</h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center mt-10"></div>

      </div>
    </div>
  );
}
