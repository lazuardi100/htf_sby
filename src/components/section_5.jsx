import Marquee from "react-fast-marquee"

import data from '../data/section_3.json'

export default function Section5(){
  return <div className="bg-zinc-950 section_3 dot-bg py-20">
    <h1 className="text-2xl font-bold text-center text-white">
        Contributor
      </h1>

      <div className='flex justify-center pt-6'>
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
  </div>
}