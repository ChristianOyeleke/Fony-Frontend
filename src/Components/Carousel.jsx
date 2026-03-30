import React from "react";
import man from "../assets/man.svg";
import lady from "../assets/lady.svg";
import cell from "../assets/cell.svg";
import wave from "../assets/wave.svg";
import pen from "../assets/Pen.svg";

const tasksData = [
  {
    img: man,
    title: "Create my portfolio responsiveness",
    priority: "High",
    progress: 75,
  },
  {
    img: lady,
    title: "Create my portfolio responsiveness",
    priority: "High",
    progress: 85,
  },
  {
    img: cell,
    title: "Create my portfolio responsiveness",
    priority: "High",
    progress: 95,
  },
  {
    img: wave,
    title: "Create my portfolio responsiveness",
    priority: "High",
    progress: 100,
  },
];

const Carousel = () => {
  return (
    <div className="Carousel font-[Caveat] w-full">
      <h3 className="text-xl sm:text-2xl md:text-[30px] leading-[100%] font-bold">
        Tasks In Progress
      </h3>
      <div className="flex w-full overflow-x-auto scrollbar-hidden scroll-smooth gap-4 sm:gap-6 lg:gap-[33px] pb-4">
        {tasksData.map((task, index) => (
          <div
            key={index}
            className="flex flex-col w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] shrink-0 gap-3 sm:gap-[17px] shadow-[0_4px_0_0_black] rounded-[22px] border-[1px] border-b-[4px]"
          >
            <img
              src={task.img}
              alt=""
              className="w-full h-[120px] sm:h-[140px] md:h-[150px] object-cover rounded-[22px]"
            />
            <div className="px-4 sm:px-[22px] flex flex-col gap-3 sm:gap-[17px] py-3 sm:py-[17px]">
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm leading-[20px] border-[1px] border-[#FF0000] rounded-[20px] text-[#FF0000] px-2 sm:px-[10px] py-1">
                  {task.priority}
                </p>
                <img
                  src={pen}
                  alt=""
                  className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] cursor-pointer"
                />
              </div>
              <p className="text-base sm:text-lg md:text-[22.5px] w-full font-semibold font-[Montserrat] tracking-[-3%] leading-tight sm:leading-[20px]">
                {task.title}
              </p>
              <div className="flex gap-[4px] items-center w-full">
                <div className="flex-1 h-[20px] sm:h-[26px] border-[1px] rounded-[170px] overflow-hidden">
                  <div
                    className="bg-[#77C2FF] h-full rounded-[170px]"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <p className="font-md text-sm sm:text-[20px] leading-[20px] whitespace-nowrap">
                  {task.progress}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
