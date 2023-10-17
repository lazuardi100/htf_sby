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
      <div className="flex md:flex-row md:justify-center flex-col flex-wrap w-full md:mt-6 mt-2 mb-16">
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
              <div className="flex flex-row justify-center">
                <img src={item.img} alt="placeholder" className="rounded-sm h-[103px] object-contain" />
              </div>
              
            </div>
          </>
          )
        })}
        {/* end of card */}
      </div>
      {/* end card container */}

      <div className='separator'></div>
    </div>
  </div>
}