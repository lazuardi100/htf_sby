import data from '../data/section_2.json'
import './section_2.css';

export default function Section2(){
  console.log(data);
  return <div className="bg-neutral-50 section_2 ">
    
    <div className="px-10 pt-4">

      <div className='rounded mx-auto flex items-center justify-center'>
        <h1 className="bg-gray-200 inline-block p-2 text-gray-700 mt-10">
          About Event
        </h1>
      </div>

      {/* <div className='rounded mx-auto'>
  <h1 className="bg-white inline-block text-center text-gray-700 mt-10 p-4">
    About Event
  </h1>
</div> */}

      {/* card container */}
      <div className="flex md:flex-row md:justify-center flex-col flex-wrap w-full md:mt-8 mt-2">
        {/* create white card with image in the left and in the right there is card title and body */}
        {data.about.map((item, index) => {
          return(<>
       
                <p className="text-black text-center">
                  {item.p1}
                </p>

                <p className="text-black text-center">
                  {item.p2}
                </p>
          </>
          )
        })}
        {/* end of card */}
      </div>
      {/* end card container */}

      <div className='rounded mx-auto flex items-center justify-center'>
        <h1 className="bg-gray-200 inline-block p-2 text-gray-700 mt-10 mb-8">
          Our Goals
        </h1>
      </div>



      <div className="w-full md:w-222 flex flex-row flex-wrap justify-center mt-3 mb-16 p-5">
  {data.contributor.map((item, index) => {
    return (
      <>
        <div className="md:w-1/4 px-1.5 w-1/2 flex flex-col justify-center mt-3 h-16">
          <div className='bg-white p-4 rounded mx-auto'>
            <div className="flex">
              <img src={item.img} alt="placeholder" />
              <h2 className="ml-2 font-bold text-base">Sharing</h2>
            </div>
            <div className="flex mb-5">
            </div>
            <h1 className="text-black mb-5">
              {item.desc}
            </h1>
          </div>
        </div>
      </>
    );
  })}
</div>


      <div className="w-full flex flex-row flex-wrap justify-center mt-10">
       
      </div>
 



      {/* <div className='separators'></div> */}
    </div>
  </div>
}