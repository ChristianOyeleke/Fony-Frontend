import React, { useContext } from "react";
import pic from "../assets/list.svg";
import { TasksContext } from "../context/tasksContext";

const TaskSummaryCard = () => {
  const { tasks, onGoingTasks, completedTasks } = useContext(TasksContext);

  const taskSummary = [
    { label: "Total Tasks", value: tasks.length, color: "bg-blue-100" },
    {
      label: "Ongoing Tasks",
      value: onGoingTasks.length,
      color: "bg-blue-100",
    },
    {
      label: "Completed Tasks",
      value: completedTasks.length,
      color: "bg-blue-100",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-[33px] w-full">
      {taskSummary.map((summary, key) => (
        <div
          key={key}
          className="w-full sm:w-auto md:flex-1 lg:w-auto h-auto sm:h-[111px] border-[1px] shadow-[0_4px_0_0_black] rounded-[22px] px-3 sm:px-4 md:px-[22px] py-4 sm:py-5 md:py-[35px] flex gap-[5px] items-center max-w-[391px]"
        >
          <div
            className={`w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-[12px] shrink-0 ${summary.color} flex items-center justify-center`}
          >
            <img src={pic} alt="" className="w-4 h-4" />
          </div>
          <div className="leading-[20px] h-[50px] flex-1 min-w-0">
            <p className="text-xs sm:text-sm md:text-base truncate font-normal">
              {summary.label}
            </p>
            <p className="font-bold w-[49px] h-[31px] leading-[120%] text-base sm:text-lg md:text-[20px]">
              {summary.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskSummaryCard;
