"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { Button } from "./ui/MovingBorders";

const RecentProjects = () => {
  return (
    <div className="my-36 lg:my-0">
      <div className="py-24 text-center">
        <span className="gradient-text-accent">Projects</span>
        <h1 className="heading">Recent Work</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto pb-32 border-b border-white/10">
        {projects.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              glowColor="#84a98c"
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{ borderRadius: `calc(1.75rem * 0.96)` }}
              className="flex-1 text-white border-white/10"
              containerClassName="w-full"
            >
              <div className="flex flex-col w-full p-5 md:p-8">
                <div className="relative w-full overflow-hidden h-[25vh] lg:h-[35vh] mb-6 rounded-xl border border-white/20">
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>

                <h1 className="font-bold text-sm md:text-base lg:text-xl uppercase tracking-[0.2em] text-white line-clamp-1">
                  {item.title}
                </h1>

                <p className="text-xs md:text-sm tracking-wide leading-relaxed text-white/50 mt-2 mb-4">
                  {item.des}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/10 rounded-full bg-white/5 backdrop-blur-xl lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#84a98c]/70 hover:text-[#cad2c5] transition-colors">
                    Visit <FaLocationArrow className="text-[10px]" />
                  </div>
                </div>
              </div>
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
