import React from "react";

const ProgressSkeletonCard = () => {
  return (
    <div className="animate-pulse newgoal my-[48px] mx-25 flex items-start gap-5">
      <form className="new-forms text-left flex-1 flex flex-col gap-6">
        {/* Title */}
        <div className="w-1/3 h-10 bg-gray-300 rounded-md"></div>

        {/* Goal Title */}
        <div className="flex flex-col gap-2">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="w-48 h-5 bg-gray-300 rounded"></div>
        </div>

        {/* Goal Description */}
        <div className="flex flex-col gap-2">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Lower form */}
        <div className="flex flex-col items-start w-[656px] bg-[#0585cd05] p-[60px_50px] gap-[30px]">
          {/* Input */}
          <div className="w-[329px] h-12 bg-gray-300 rounded-md"></div>

          {/* Progress bar */}
          <div className="w-[368px] flex flex-col gap-2">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-3 bg-gray-300 rounded"></div>
          </div>

          {/* Update button */}
          <div className="w-[200px] h-12 bg-gray-300 rounded-lg"></div>
        </div>
      </form>

      {/* Image */}
      <div className="w-[300px] h-[300px] bg-gray-300 rounded-xl"></div>
    </div>
  );
};

export default ProgressSkeletonCard;
