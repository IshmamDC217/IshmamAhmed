"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="my-36 lg:my-0">
      <h1 className="heading py-24">
        Recent <span className="text-blue-300">Tech Projects</span>
      </h1>

      {/* Adjust grid for responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28 lg:gap-40 max-w-7xl mx-auto pb-32 border-slate-600 border-b-2">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] mb-10">
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover w-full h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 px-5">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Visit Site
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;