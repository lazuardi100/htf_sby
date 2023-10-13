import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import "./section_1.css";
import { useEffect } from "react";
export default function Section1() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const firstText = {
      strings: ["Surabaya"],
      typeSpeed: 100,
      showCursor: false,
      startDelay: 1100,
    };

    const secondText = {
      strings: ["HacktoberFest"],
      typeSpeed: 100,
      showCursor: false,
      startDelay: 1100,
    };

    const thirdText = {
      strings: ["Code and Collaboration"],
      typeSpeed: 100,
      showCursor: false,
      startDelay: 1100,
    };

    const typedFirst = new Typed(".typewriter1", firstText);
    const typedSecond = new Typed(".typewriter2", secondText);
    const typedThird = new Typed(".typewriter3", thirdText);

    return () => {
      typedFirst.destroy();
      typedSecond.destroy();
      typedThird.destroy();
    };
  }, []);

  useEffect(() => {});
  return (
    <div className="bg-zinc-950 section dot-bg">
      <div className="pt-4">
        <div className="flex justify-center px-10 md:py-12">
          <div className="w-11/12">
            <div
              className="fade-down"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay={500}
            >
              <p className="text-white lg:text-[3.8rem] md:text-[3rem] text-[2.2rem]">
                <span className="underline underline-offset-8 typewriter1"></span>{" "}
                Tech Community's{" "}
                <span className="underline underline-offset-8 typewriter2"></span>{" "}
                2023: A Celebration of{" "}
                <span className="underline underline-offset-8 typewriter3"></span>
              </p>
            </div>
            <div className="flex md:gap-10 gap-4 mt-10">
              <a
                href="/"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={750}
                className="flex justify-center items-center border bg-white lg:px-[40px] lg:py-[15px] px-[20px] py-[10px] rounded-[4px] transition-all duration-300 ease-in-out hover:bg-transparent hover:border-white hover:text-white whitespace-nowrap md:text-[20px] text-[11px] fade-left"
              >
                Let's Join
              </a>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={1000}
                className="relative flex justify-center md:px-[40px] md:py-[15px] px-[20px] fade-right"
              >
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
                  href="https://hacktoberfest.com/about/"
                  className="flex justify-center items-center text-white md:text-[20px] text-[11px] whitespace-nowrap transition-all duration-300 ease-in-out"
                  target="blank"
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
