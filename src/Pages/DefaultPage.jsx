import React from "react";
import { FaTasks } from "react-icons/fa";
import {
    FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const StatCard = ({ label, value }) => {
  return (
    <div className="bg-[#F6FBFF] rounded-2xl border border-black bg-white p-4 shadow-md shadow-black">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#77C2FF] border border-black shadow-md shadow-black">
          <div className="bg-black p-[2px] rounded-md">
            <FaTasks className="text-[#77C2FF] text-sm" />
          </div>
        </div>

        <div className="leading-tight">
          <p className="text-xs font-semibold">{label}</p>
          <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
};
const TaskPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-xl font-bold text-black">Welcome Back! Fawas</h1>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#77C2FF] px-4 py-2 text-sm font-medium text-black shadow-md shadow-black border border-black"
          >
            Create new task
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Total Task" value="0" />
          <StatCard label="Ongoing Task" value="0" />
          <StatCard label="Completed Task" value="0" />
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <h2 className="text-xl font-bold text-black">Tasks In Progress</h2>

          <div className="mt-3 w-full md:max-w-xs rounded-2xl border border-black shadow-md shadow-black">
            <div className="flex items-center justify-center border-b  border-black rounded-2xl bg-[#F4F4F4] py-12">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#F4F4F4] border border-[#666666] shadow-md shadow-[#666666]">
                <div className="bg-[#666666] p-[2px] rounded-md">
                  <FaTasks className="text-[#F4F4F4] text-sm" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-6 px-6">
              <p className="mt-4 text-sm font-medium">
                No Task in Progress yet
              </p>

              <button
                type="button"
                className="mt-4 w-[7.5rem] inline-flex items-center gap-2 rounded-full bg-[#77C2FF] px-4 py-2 text-xs font-medium text-black shadow-md shadow-black border border-black"
              >
                Create new task
              </button>
            </div>
          </div>
        </div>

        <div className="py-[3rem] md:py-[5rem]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-black">All created tasks</h2>

            <div className="flex items-center gap-2">
              <span className="text-xs">Priority</span>
              <div className="relative">
                <select className="appearance-none rounded-full border border-black bg-white px-3 py-1.5 pr-8 text-xs shadow-sm">
                  <option>All</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <FiChevronDown/>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-2xl border border-black bg-white shadow-black shadow-md">
            <div className="grid grid-cols-12 gap-2 border-b border-black px-4 py-3 text-xs font-semibold">
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1 text-right">More action</div>
            </div>

            <div className="min-h-[360px] px-4 py-6">
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <p className="text-xs font-semibold">No Task Created yet</p>

                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#77C2FF] px-4 py-2 text-xs font-medium text-black shadow-md shadow-black border border-black"
                >
                  Create new task
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-black px-4 py-3">
              <p className="text-xs">
                Showing of <span className="font-semibold">0</span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="grid h-7 w-7 place-items-center rounded-full border border-black bg-white opacity-40"
                  aria-label="Previous page"
                >
                  <FiChevronLeft />
                </button>

                <div className="grid h-7 w-7 place-items-center rounded-full border border-black bg-white text-xs font-semibold">
                  1
                </div>

                <button
                  type="button"
                  className="grid h-7 w-7 place-items-center rounded-full border border-black bg-white opacity-40"
                  aria-label="Next page"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
