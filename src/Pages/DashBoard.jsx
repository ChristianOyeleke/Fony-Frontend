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
import { AuthContext } from "../context/authContext.jsx";

const DashBoard = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const { tasks, getAllTasks, createTask, updateTask, deleteTask } =
    useContext(TasksContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowModal2(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      getAllTasks();
    } catch (error) {
      console.error("Task delete failed", error);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto flex flex-col gap-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="font-rackety font-bold text-xl md:text-2xl lg:text-3xl">
          Welcome back, {user?.name || "User"}
        </h3>

        <button
          onClick={() => setShowModal1(true)}
          className="px-4 py-2 rounded-full bg-[#77C2FF] shadow-[0_4px_0_0_black] text-sm md:text-base"
        >
          + Create Task
        </button>
      </div>

      {/* ================= SUMMARY + CAROUSEL ================= */}
      <TaskSummaryCard />

      <Carousel />
      {/* ================= TASK TABLE ================= */}
      <div className="flex flex-col gap-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <h2 className="font-rackety text-xl md:text-2xl font-bold">
            All Tasks
          </h2>

          <div className="flex items-center gap-2 border px-3 py-2 rounded-full">
            <span className="text-sm md:text-base">Priority</span>
            <img src={arr} alt="" className="w-4 h-4" />
          </div>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border shadow overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-5 bg-[#FBFBFB] p-4 font-semibold">
            <p>Name</p>
            <p>Priority</p>
            <p>Date</p>
            <p>Status</p>
            <p>Action</p>
          </div>

          {/* Task Rows */}
          <TaskRow tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-sm">
            <p>Showing {tasks?.length || 0} tasks</p>

            <div className="flex items-center gap-2">
              <MdOutlineKeyboardArrowLeft />
              {[1, 2, 3, 4].map((n) => (
                <span key={n}>{n}</span>
              ))}
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      {showModal1 && (
        <div className="fixed inset-0 flex justify-center items-start pt-10 bg-black/30 z-50">
          <CreateModal
            closeModal={() => setShowModal1(false)}
            openNextModal={() => {
              setShowModal1(false);
              setShowModal3(true);
              getAllTasks();
            }}
            createTask={createTask}
          />
        </div>
      )}

      {showModal2 && (
        <div className="fixed inset-0 flex justify-center items-start pt-10 bg-black/30 z-50">
          <UpdateModal
            closeModal={() => setShowModal2(false)}
            openNextModal={() => {
              setShowModal2(false);
              setShowModal3(true);
              setSelectedTask(null);
              getAllTasks();
            }}
            task={selectedTask}
            updateTask={updateTask}
          />
        </div>
      )}

      {showModal3 && (
        <div className="fixed inset-0 flex justify-center items-start pt-20 z-50">
          <DropDown3 closeModal={() => setShowModal3(false)} />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
