import data from '../data/section_4.json'
import './section_4.css';

export default function Section3(){
  console.log(data);
  return <div className="section_4 bg-white">
    <div className="px-32 py-36 h-276">

      {/* card container */}
      <div className="flex md:flex-row md:justify-center flex-col flex-wrap w-full md:mt-8 mt-2">
        {/* create white card with image in the left and in the right there is card title and body */}
        {data.calltoaction.map((item, index) => {
          return(<>
            <div className="flex flex-col md:flex-row items-center justify-center bg-white md:w-[100%] w-4/5 p-4 md:mx-4 mx-auto md:mt-0 mt-8 rounded md:h-72">
              
          <div class="flex flex-col md:flex-row w-full grid grid-cols-12 gap-4 justify-between">
            <div class="col-span-12 md:col-span-8 p-4">
              <b><h1 className="text-black headCTA mb-10">
                {item.head}
              </h1></b>
              <p className="text-black">
                {item.desc}
              </p>
            </div>

            <div class="flex items-center justify-center md:justify-end col-span-12 md:col-span-4">
              <button class="w-48 h-48 rounded-full bg-black hover:bg-gray-500 text-white text-base">
                Join Us
              </button>
            </div>
          </div>
            </div>
          </>
          )
        })}
        {/* end of card */}
      </div>
      {/* end card container */}

    </div>
   
  </div>
}