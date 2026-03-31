import React, { useState, useEffect, useContext } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import TaskSummaryCard from "../Components/TaskSummaryCard";
import TaskRow from "../Components/TaskRow";
import Carousel from "../Components/Carousel";
import arr from "../assets/AltArrow.svg";
import CreateModal from "../Components/CreateModal";
import UpdateModal from "../Components/UpdateModal";
import DropDown3 from "../Components/SuccessModal";
import { TasksContext } from "../context/tasksContext.jsx";

const DashBoard = () => {
  const [showModal1, setShowModal1] = useState(false); // Create New Task
  const [showModal2, setShowModal2] = useState(false); // Update Task
  const [showModal3, setShowModal3] = useState(false); // Task Success
  const [selectedTask, setSelectedTask] = useState(null);

  const { tasks, getAllTasks, createTask, updateTask, deleteTask } =
    useContext(TasksContext);

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowModal2(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
    } catch (error) {
      console.error("Task delete failed", error);
    }
  };

  return (
    <div className="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 flex flex-col overflow-hidden w-full max-w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative">
      {/* Header */}
      <div className="flex flex-col xs:flex-row items-start xs:items-center py-4 sm:py-5 md:py-[30px] justify-between gap-3 sm:gap-4 xs:gap-0 w-full">
        <h3 className="font-[Caveat] font-bold text-lg xs:text-xl sm:text-2xl md:text-[30px] lg:text-[35px] 3xl:text-[40px] leading-[100%]">
          Welcome back! Fawas
        </h3>
        <button
          className="w-full xs:w-[140px] sm:w-[163px] lg:w-[180px] flex h-[40px] lg:h-[45px] font-[Caveat] rounded-[22px] px-2 sm:px-3 md:px-[10px] py-2 md:py-[19px] bg-[#77C2FF] border-[1px] shadow-[0_4px_0_0_black] items-center justify-center text-sm xs:text-base"
          onClick={() => setShowModal1(true)}
        >
          Create new task
        </button>
      </div>

      {/* Task Summary Cards */}
      <TaskSummaryCard />

      {/* Tasks Carousel */}
      <Carousel />

      {/* All Created Tasks Table */}
      <div className="flex flex-col gap-4 md:gap-[20px]">
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-[Caveat] font-bold leading-[100%]">
            All Created Tasks
          </h2>
          <div className="flex gap-[10px] h-[44px] justify-center items-center">
            <p className="font-md leading-[20px] text-sm md:text-base">
              Priority
            </p>
            <div className="border-[1px] flex justify-center items-center w-[86px] h-[44px] rounded-[22px]">
              <p className="text-sm md:text-base">All</p>
              <img src={arr} alt="" className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>

        <div className="h-auto md:h-[842px] rounded-[30px] border-[1px] border-b-[4px] mb-10 md:mb-[94px] shadow-[0_4px_0_0_black] overflow-hidden">
          {/* Table Header - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex bg-[#FBFBFB]">
            <p className="w-[403px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
              Name
            </p>
            <p className="w-[146px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
              Priority
            </p>
            <p className="w-[236px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
              Date
            </p>
            <p className="w-[236px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
              Status
            </p>
            <p className="w-[237px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
              More Action
            </p>
          </div>

          {/* Task Rows */}
          <TaskRow tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between px-4 md:px-[30px] py-3 md:py-[10px] items-center gap-2 sm:gap-0">
            <p className="text-sm md:text-base">Showing 10 of 20</p>
            <div className="flex items-center gap-[10px]">
              <div className="border-[1px] rounded-[20px] p-1">
                <MdOutlineKeyboardArrowLeft className="w-[24px] h-[24px]" />
              </div>
              {[1, 2, 3, 4].map((num) => (
                <p key={num} className="text-sm md:text-base">
                  {num}
                </p>
              ))}
              <div className="border-[1px] rounded-[20px] p-1">
                <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal1 && (
        <div className="fixed top-0 left-0 right-0 mx-auto z-50">
          <CreateModal
            closeModal={() => setShowModal1(false)}
            openNextModal={() => setShowModal3(true)}
            createTask={createTask}
          />
        </div>
      )}
      {showModal2 && (
        <div className="fixed top-0 left-0 right-0 mx-auto z-50">
          <UpdateModal
            closeModal={() => setShowModal2(false)}
            openNextModal={() => setShowModal3(true)}
            task={selectedTask}
            updateTask={updateTask}
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

export default DashBoard;
