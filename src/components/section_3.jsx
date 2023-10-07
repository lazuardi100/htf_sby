import data from '../data/section_3.json'
import './section_3.css';

export default function Section3(){
  return <div className="bg-zinc-950 section_3 dot-bg">
    <div className="px-10 pt-4">
      
      <h1 className="text-2xl font-bold text-center text-white mt-10">
        Supported By
      </h1>

      {/* card container */}
      <div className="flex md:flex-row md:justify-center flex-col flex-wrap w-full md:mt-8 mt-2">
        {/* create white card with image in the left and in the right there is card title and body */}
        {data.support.map((item, index) => {
          return(<>
            <div className="flex flex-col md:flex-row items-center justify-center bg-white md:w-[45%] w-4/5 p-4 md:mx-4 mx-auto md:mt-0 mt-8 rounded md:h-72">
              <div className="w-full md:w-1/3 flex flex-row justify-center">
                <img src={item.img} alt="placeholder" />
              </div>
              <div className="w-full md:w-2/3 md:pl-3 md:mt-0 mt-8">
                <h1 className="text-2xl font-bold text-black md:text-left text-center mb-3">
                  {item.title}
                </h1>
                <p className="text-black">
                  {item.description}
                </p>
                
                <div className='mt-3'>
                  <a href={item.link} className='text-orange-500' target='_blank' rel="noreferrer">
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

      <div className="w-full flex flex-row flex-wrap justify-center mt-3 mb-8">
        {data.contributor.map((item, index) => {
          return(<>
            <div className="md:w-1/5 px-1.5 w-1/2 flex flex-col justify-center mt-3 h-16">
              <div className='bg-white p-4 rounded mx-auto'>
                <a href={item.link} target='_blank' rel="noreferrer">
                  <img src={item.img} alt="placeholder" />
                </a>
              </div>
            </div>
          </>)
        })}
        
      </div>

      <div className='separator'></div>
    </div>
  </div>
}