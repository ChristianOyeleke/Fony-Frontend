import React from "react";
import pic from "../assets/list.svg";

const TaskSummaryCard = () => {
  const taskSummary = [
    { label: "Total Task", value: 429 },
    { label: "Ongoing Task", value: 9 },
    { label: "Completed Task", value: 420 },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-[33px] w-full">
      {taskSummary.map((summary, key) => (
        <div
          key={key}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-[391px] h-auto sm:h-[111px] border-[1px] shadow-[0_4px_0_0_black] rounded-[22px] px-3 sm:px-4 md:px-[22px] py-4 sm:py-5 md:py-[35px] flex gap-[5px] items-center"
        >
          <img
            src={pic}
            alt=""
            className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-[12px] shrink-0"
          />
          <div className="leading-[20px] h-[50px]">
            <p className="text-xs sm:text-sm md:text-base">{summary.label}</p>
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
