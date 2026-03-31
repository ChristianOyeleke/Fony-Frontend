import React from "react";
import pen from "../assets/Pen.svg";
import del from "../assets/Del.svg";

const TaskRow = ({ tasks = [], onEdit, onDelete }) => {
  const priorityClasses = {
    high: "border-[1px] border-[#FF0000] text-[#FF0000] bg-[#FFE7E0]",
    medium: "border-[1px] border-[#FF8A00] text-[#FF8A00] bg-[#FFF1E5]",
    low: "border-[1px] border-[#448AFF] text-[#448AFF] bg-[#EEF4FF]",
  };

  const formatPriority = (priority) => {
    if (!priority) return "";
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="h-auto border-y-[1px] rounded-[20px]">
      <div className="md:hidden">
        {tasks.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No tasks available.
          </div>
        ) : (
          tasks.map((task, index) => (
            <div
              key={task._id || index}
              className={`flex flex-col p-4 gap-3 border-b-[1px] ${index % 2 === 0 ? "" : "bg-[#F6FBFF]"}`}
            >
              <p className="text-base font-semibold font-[Montserrat] tracking-[-3%]">
                {task.title}
              </p>
              <div className="flex justify-between items-center">
                <p
                  className={`text-xs leading-[20px] flex items-center justify-center font-md rounded-[20px] px-[10px] pb-[4px] text-center ${priorityClasses[task.priority?.toLowerCase()]}`}
                >
                  {formatPriority(task.priority)}
                </p>
                <p className="text-xs font-semibold font-[Montserrat] tracking-[-3%]">
                  {formatDate(task.dueDate)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-[20px] border-[1px] flex items-center border-solid rounded-[170px] overflow-hidden">
                  <div
                    className="bg-[#77C2FF] h-full rounded-[170px]"
                    style={{ width: `${task.progress || 0}%` }}
                  ></div>
                </div>
                <p className="font-md text-sm leading-[20px]">
                  {task.progress ?? 0}%
                </p>
              </div>
              <div className="flex gap-3 justify-end">
                <img
                  onClick={() => onEdit(task)}
                  src={pen}
                  alt="Edit"
                  className="w-[20px] h-[20px] cursor-pointer"
                />
                <img
                  src={del}
                  alt="Delete"
                  className="w-[20px] h-[20px] cursor-pointer"
                  onClick={() => onDelete(task._id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      <div className="hidden md:block">
        {tasks.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No tasks available.
          </div>
        ) : (
          tasks.map((task, index) => (
            <div
              key={task._id || index}
              className={`flex h-[70px] items-center border-b-[1px] ${index % 2 === 0 ? "" : "bg-[#F6FBFF]"}`}
            >
              <p className="text-[20px] py-[21px] px-[30px] w-[390px] font-semibold font-[Montserrat] tracking-[-3%] leading-[20px]">
                {task.title}
              </p>
              <div className="py-[21px] px-[30px] flex justify-center w-[146px]">
                <p
                  className={`leading-[20px] w-[86px] flex items-center justify-center font-md rounded-[20px] px-[10px] pb-[4px] text-center ${priorityClasses[task.priority?.toLowerCase()]}`}
                >
                  {formatPriority(task.priority)}
                </p>
              </div>
              <p className="text-[20px] py-[21px] px-[30px] w-[237px] font-semibold font-[Montserrat] tracking-[-3%] leading-[20px]">
                {formatDate(task.dueDate)}
              </p>
              <div className="py-[21px] px-[30px] w-[237px]">
                <div className="flex gap-[4px] w-[177px] h-[28px]">
                  <div className="w-[134px] h-[26px] border-[1px] flex items-center border-solid rounded-[170px] overflow-hidden">
                    <div
                      className="bg-[#77C2FF] h-[24px] rounded-[170px]"
                      style={{ width: `${task.progress || 0}%` }}
                    ></div>
                  </div>
                  <p className="font-md text-[20px] leading-[20px]">
                    {task.progress ?? 0}%
                  </p>
                </div>
              </div>
              <div className="flex gap-[20px] py-[21px] px-[30px] w-[237px]">
                <img
                  onClick={() => onEdit(task)}
                  src={pen}
                  alt="Edit"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
                <img
                  src={del}
                  alt="Delete"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={() => onDelete(task._id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskRow;
