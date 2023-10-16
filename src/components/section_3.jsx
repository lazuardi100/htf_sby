import Marquee from "react-fast-marquee";
import data from '../data/section_3.json'
import './section_3.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section3(){
  AOS.init();
  return <div className="bg-zinc-950 section_3 dot-bg">
    <div className="px-10 pt-4">
      
      <h1 className="text-[2rem] font-bold text-center text-white mt-10">
        Supported By
      </h1>

      {/* card container */}
      <div className="flex md:flex-row md:justify-center flex-col flex-wrap w-full md:mt-6 mt-2">
        {/* create white card with image in the left and in the right there is card title and body */}
        {data.support.map((item, index) => {
          let fadeMode = 'fade-up'
          if(index%2===0){
            fadeMode = 'fade-down'
          }
          return(<>
            <div 
              className="card" 
              data-aos={fadeMode}
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay={index*250}
            >
              <div className="w-full md:w-1/3 flex flex-row justify-center">
                <img src={item.img} alt="placeholder" className="rounded-sm" />
              </div>
              <div className="w-full md:w-2/3 md:pl-3 md:mt-0 mt-8">
                <h1 className="text-2xl font-bold text-black md:text-left text-center mb-3">
                  {item.title}
                </h1>
                <p className="text-black line-clamp-3 hover:line-clamp-none">
                  {item.description}
                </p>
                
                <div className='mt-3'>
                  <a href={item.link} className='text-orange-500 hover:underline' target='_blank' rel="noreferrer">
                    {"[   Visit "+item.title+"   ]"}
                  </a>
                </div>
              </div>
            </div>
          </>
          )
        })}
        {/* end of card */}
      </div>
      {/* end card container */}

      <h1 className="text-2xl font-bold text-center text-white mt-10">
        Contributor
      </h1>

      <div className='flex justify-center mt-3 mb-8'>
        <div className="w-full md:w-[48rem] h-[5.62rem] flex flex-col flex-wrap overflow-x-hidden justify-center">
          <Marquee>
            {data.contributor.map((item, index) => {
              return(<>
                <div 
                  className="contributor_item"
                >
                    <a href={item.link} target='_blank' rel="noreferrer" className="mx-8">
                      <img src={item.img} alt="placeholder" className='max-h-[4rem]' />
                    </a>
                  {/* <div className='bg-white p-4 rounded mx-auto'>
                  </div> */}
                </div>
              </>)
            })}
          </Marquee>
        </div>
      </div>

      <div className='separator'></div>
    </div>
  </div>
}