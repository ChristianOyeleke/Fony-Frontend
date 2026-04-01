import React, { useContext, useEffect } from "react";
import { TasksContext } from "../context/tasksContext.jsx";
import pen from "../assets/Pen.svg";

const Carousel = () => {
  const { onGoingTasks, GetOngoingTasks } = useContext(TasksContext);

  useEffect(() => {
    GetOngoingTasks();
  }, [GetOngoingTasks]);

  return (
    <div className="Carousel font-raccket w-full">
      <h3 className="font-rackety text-xl sm:text-2xl md:text-[30px] leading-[100%] font-bold">
        Tasks In Progress
      </h3>
      <div className="flex w-full overflow-x-auto scrollbar-hidden scroll-smooth gap-4 sm:gap-6 lg:gap-[33px] pb-4">
        {onGoingTasks.slice(0, 4).map((task) => (
          <div
            key={task._id}
            className="flex flex-col w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] shrink-0 gap-3 sm:gap-[17px] shadow-[0_4px_0_0_black] rounded-[22px] border-[1px] border-b-[4px] "
          >
            <img
              src={
                task.image ||
                "https://via.placeholder.com/350x150?text=No+Image"
              }
              alt={task.title}
              className="w-full h-[120px] sm:h-[140px] md:h-[150px] object-cover rounded-[22px]"
            />
            <div className="px-4 sm:px-[22px] flex flex-col gap-3 sm:gap-[17px] py-3 sm:py-[17px]">
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm leading-[20px] border-[1px] border-[#FF0000] rounded-[20px] text-[#FF0000] px-2 sm:px-[10px] py-1 capitalize">
                  {task.priority}
                </p>
                <img
                  src={pen}
                  alt="Edit"
                  className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] cursor-pointer"
                />
              </div>
              <p className="text-base sm:text-lg md:text-[22.5px] w-full font-semibold font-[Montserrat] tracking-[-3%] leading-tight sm:leading-[20px] line-clamp-2">
                {task.title}
              </p>
              <div className="flex gap-[4px] items-center w-full">
                <div className="flex-1 h-[20px] sm:h-[26px] border-[1px] rounded-[170px] overflow-hidden">
                  <div
                    className="bg-[#77C2FF] h-full rounded-[170px]"
                    style={{ width: `${task.status || task.progress || 0}%` }}
                  ></div>
                </div>
                <p className="font-md text-sm sm:text-[20px] leading-[20px] whitespace-nowrap">
                  {task.status || task.progress || 0}%
                </p>
              </div>
            </div>
          </div>
        ))}
        {onGoingTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center w-[350px] h-[300px] shrink-0 text-center p-8 rounded-[22px] border border-gray-200">
            <p className="text-gray-500 font-semibold">No tasks in progress</p>
            <p className="text-sm text-gray-400 mt-2">
              Create your first task to see here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
