"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="my-36 lg:my-0">
      <div className="py-24 text-center">
        <span className="gradient-text-accent">Projects</span>
        <h1 className="heading">Recent Work</h1>
      </div>

      {/* Adjust grid for responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28 lg:gap-40 max-w-7xl mx-auto pb-32 border-b border-white/10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full"
            key={item.id}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <PinContainer
                title={item.title}
                href={item.link}
              >
                <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] mb-10 rounded-xl border border-white/20">
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 object-cover w-full h-full"
                  />
                </div>

                <h1 className="font-bold text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] text-white line-clamp-1">
                  {item.title}
                </h1>

                <p className="text-xs md:text-sm tracking-wide leading-relaxed text-white/50" style={{ margin: "1vh 0" }}>
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 px-5">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/10 rounded-full bg-white/5 backdrop-blur-xl lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex text-xs md:text-sm uppercase tracking-[0.2em] text-[#84a98c]/70 group-hover:text-[#cad2c5] transition-colors">
                      Visit
                    </p>
                  </div>
                </div>
              </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;