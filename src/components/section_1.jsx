import "./section_1.css";
export default function Section1() {
  return (
    <div className="bg-zinc-950 section dot-bg">
      <div className="px-10 pt-4">
        <div className="flex justify-center py-12">
          <div className="w-11/12">
            <div className="typewriter">
              <p className="text-white lg:text-[4rem] md:text-[3rem] text-[2rem]">
                Surabaya Tech Community's{" "}
                <span className="underline underline-offset-8">
                  HactoberFest
                </span>{" "}
                2023: A Celebration of{" "}
                <span className="underline underline-offset-8">
                  Code and Collaboration
                </span>
              </p>
            </div>
            <div className="flex md:gap-10 gap-6 mt-10">
              <a
                href="/"
                className="flex justify-center items-center bg-white lg:px-[40px] lg:py-[15px] px-[20px] py-[10px] rounded-[4px] transition-all duration-300 ease-in-out hover:bg-transparent hover:border hover:border-white hover:text-white whitespace-nowrap"
              >
                Let's Join
              </a>
              <div className="relative flex justify-center md:px-[40px] md:py-[15px] px-[20px]">
                <svg
                  width="100%"
                  height="15"
                  viewBox="0 0 282 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0"
                >
                  <line
                    y1="-0.5"
                    x2="15"
                    y2="-0.5"
                    transform="matrix(-1 0 0 1 15 1)"
                    stroke="white"
                  />
                  <line
                    y1="-0.5"
                    x2="15"
                    y2="-0.5"
                    transform="matrix(0 -1 -1 0 0 15)"
                    stroke="white"
                  />
                  <line x1="267" y1="0.5" x2="282" y2="0.5" stroke="white" />
                  <line x1="281.5" y1="15" x2="281.5" stroke="white" />
                </svg>
                <a
                  href="/"
                  className="flex justify-center items-center text-white md:text-[20px] whitespace-nowrap"
                >
                  What is Hacktoberfest
                </a>
                <svg
                  width="100%"
                  height="15"
                  viewBox="0 0 282 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0"
                >
                  <line x1="15" y1="14.5" y2="14.5" stroke="white" />
                  <line x1="0.5" x2="0.5" y2="15" stroke="white" />
                  <line
                    y1="-0.5"
                    x2="15"
                    y2="-0.5"
                    transform="matrix(1 0 0 -1 267 14)"
                    stroke="white"
                  />
                  <line
                    y1="-0.5"
                    x2="15"
                    y2="-0.5"
                    transform="matrix(0 1 1 0 282 0)"
                    stroke="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="separator-1"></div>
      </div>
    </div>
  );
}
