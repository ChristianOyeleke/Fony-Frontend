import React from "react";
import pen from "../assets/Pen.svg";
import del from "../assets/Del.svg";
import { useState } from "react";
import DropDown2 from "./UpdateModal";
import DropDown3 from "./SuccessModal";

const TaskRow = () => {
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const priorityClasses = {
    High: "border-[1px] border-[#FF0000] text-[#FF0000]",
    Medium: "border-[1px] border-[#FF0000] bg-[#FFE7E0] text-[#FF0000]",
    Low: "border-[1px] border-[#448AFF] bg-[#EEF4FF] text-[#448AFF]",
  };

  const allTasks = [
    {
      name: "Create my portfolio",
      priority: "High",
      date: "19 December, 2025",
      progress: 25,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Medium",
      date: "19 December, 2025",
      progress: 50,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 25,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Medium",
      date: "19 December, 2025",
      progress: 58,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 70,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "High",
      date: "19 December, 2025",
      progress: 100,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 25,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 25,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "High",
      date: "19 December, 2025",
      progress: 87,
    },
    {
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 25,
    },
  ];

  return (
    <div className="h-auto border-y-[1px] rounded-[20px]">
      {/* Mobile Card View */}
      <div className="md:hidden">
        {allTasks.map((task, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 gap-3 border-b-[1px] ${index % 2 === 0 ? "" : "bg-[#F6FBFF]"}`}
          >
            <p className="text-base font-semibold font-[Montserrat] tracking-[-3%]">
              {task.name}
            </p>
            <div className="flex justify-between items-center">
              <p
                className={`text-xs leading-[20px] flex items-center justify-center font-md rounded-[20px] px-[10px] pb-[4px] text-center ${priorityClasses[task.priority]}`}
              >
                {task.priority}
              </p>
              <p className="text-xs font-semibold font-[Montserrat] tracking-[-3%]">
                {task.date}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-[20px] border-[1px] flex items-center border-solid rounded-[170px] overflow-hidden">
                <div
                  className="bg-[#77C2FF] h-full rounded-[170px]"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <p className="font-md text-sm leading-[20px]">{task.progress}%</p>
            </div>
            <div className="flex gap-3 justify-end">
              <img
                onClick={() => setShowModal2(true)}
                src={pen}
                alt=""
                className="w-[20px] h-[20px] cursor-pointer"
              />
              <img
                src={del}
                alt=""
                className="w-[20px] h-[20px] cursor-pointer"
                onClick={() => {
                  // Add delete functionality here
                  console.log("Delete task");
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block h-[700px]">
        {allTasks.map((task, index) => (
          <div
            key={index}
            className={`flex h-[70px] items-center border-b-[1px] ${index % 2 === 0 ? "" : "bg-[#F6FBFF]"}`}
          >
            <p className="text-[20px] py-[21px] px-[30px] w-[390px] font-semibold font-[Montserrat] tracking-[-3%] leading-[20px]">
              {task.name}
            </p>
            <div className="py-[21px] px-[30px] flex justify-center w-[146px]">
              <p
                className={`leading-[20px] w-[86px] flex items-center justify-center font-md rounded-[20px] px-[10px] pb-[4px] text-center ${priorityClasses[task.priority]}`}
              >
                {task.priority}
              </p>
            </div>
            <p className="text-[20px] py-[21px] px-[30px] w-[237px] font-semibold font-[Montserrat] tracking-[-3%] leading-[20px]">
              {task.date}
            </p>
            <div className="py-[21px] px-[30px] w-[237px]">
              <div className="flex gap-[4px] w-[177px] h-[28px]">
                <div className="w-[134px] h-[26px] border-[1px] flex items-center border-solid rounded-[170px] overflow-hidden">
                  <div
                    className="bg-[#77C2FF] h-[24px] rounded-[170px]"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <p className="font-md text-[20px] leading-[20px]">
                  {task.progress}%
                </p>
              </div>
            </div>
            <div className="flex gap-[20px] py-[21px] px-[30px] w-[237px]">
              <img
                onClick={() => setShowModal2(true)}
                src={pen}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <img
                src={del}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={() => {
                  // Add delete functionality here
                  console.log("Delete task");
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {showModal2 && (
        <div className="fixed top-[100px] left-0 right-0 mx-auto z-50">
          <DropDown2
            closeModal={() => setShowModal2(false)}
            openNextModal={() => setShowModal3(true)}
          />
        </div>
      )}

      {showModal3 && (
        <div className="fixed top-[100px] left-0 right-0 mx-auto z-50">
          <DropDown3 closeModal={() => setShowModal3(false)} />
        </div>
      )}
    </div>
  );
};

export default TaskRow;
