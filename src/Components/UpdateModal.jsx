import React, { useState } from "react";
import pic from "../assets/Vector.svg";
import { MdCancel } from "react-icons/md";

const UpdateModal = ({ closeModal, openNextModal }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [progress, setProgress] = useState("");

  const isFormValid = taskName && taskDescription && priority && progress;

  const handleSubmit = () => {
    if (isFormValid) {
      openNextModal();
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-[#FBFBFB] w-full xs:w-[320px] sm:w-[375px] md:w-[425px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px] 3xl:w-[700px] p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border-2 border-black mt-2 sm:mt-4 md:mt-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="font-[Rackety-DEMO] text-[#000000] text-lg sm:text-xl md:text-[25px] lg:text-[28px] 3xl:text-[32px] font-bold">
              Update your Task
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[Montserrat] text-[#666666] font-medium">
              Update your task to keep you on the go.
            </p>
          </div>

          <div className="cursor-pointer" onClick={closeModal}>
            <MdCancel className="text-xl sm:text-2xl" />
          </div>
        </div>

        <div className="font-[Montserrat] mt-3 sm:mt-4">
          <form action="">
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0C0C0C]">
                Task Name <span className="text-[#A4003A]">*</span>
              </p>
              <input
                type="text"
                placeholder="Create my portfolio responsiveness"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full h-10 sm:h-12 text-[#000000] bg-[#FFFFFF] rounded-full px-3 sm:px-4 border border-gray-300 mt-1 text-sm sm:text-base font-semibold"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0C0C0C]">
                Task Description <span className="text-[#A4003A]">*</span>
              </p>
              <input
                type="text"
                placeholder="This should be done before next year"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full h-10 sm:h-12 text-[#000000] bg-[#FFFFFF] rounded-full px-3 sm:px-4 border border-gray-300 mt-1 text-sm sm:text-base font-semibold"
              />
            </div>
          </form>

          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0C0C0C]">
              Select Task Priority <span className="text-[#A4003A]">*</span>
            </p>

            <div className="grid grid-cols-3 mt-2 sm:mt-3 gap-1.5 sm:gap-2">
              <button
                onClick={() => setPriority("Low")}
                className={`h-10 sm:h-12 flex items-center justify-center text-xs sm:text-sm lg:text-base text-[#666666] bg-[#FFFFFF] rounded-full px-2 sm:px-4 border border-gray-300 ${priority === "Low" ? "bg-blue-100 border-blue-500" : ""}`}
              >
                Low
              </button>

              <button
                onClick={() => setPriority("Medium")}
                className={`h-10 sm:h-12 flex items-center justify-center text-xs sm:text-sm lg:text-base text-[#666666] bg-[#FFFFFF] rounded-full px-2 sm:px-4 border border-gray-300 ${priority === "Medium" ? "bg-blue-100 border-blue-500" : ""}`}
              >
                Medium
              </button>

              <button
                onClick={() => setPriority("High")}
                className={`h-10 sm:h-12 flex items-center justify-center text-xs sm:text-sm lg:text-base text-[#666666] bg-[#FFFFFF] rounded-full px-2 sm:px-4 border border-gray-300 ${priority === "High" ? "bg-blue-100 border-blue-500" : ""}`}
              >
                High
              </button>
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#666666]">
              Select Task Progress <span className="text-[#A4003A]">*</span>
            </p>

            <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setProgress("0")}
                className={`w-12 sm:w-14 md:w-16 h-9 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-[#000000] bg-[#FFFFFF] border ${progress === "0" ? "border-blue-500 bg-blue-100" : "border-[#D9D9D9]"}`}
              >
                0%
              </button>

              <button
                onClick={() => setProgress("25")}
                className={`w-12 sm:w-14 md:w-16 h-9 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-[#000000] bg-[#FFFFFF] border ${progress === "25" ? "border-blue-500 bg-blue-100" : "border-[#D9D9D9]"}`}
              >
                25%
              </button>

              <button
                onClick={() => setProgress("50")}
                className={`w-12 sm:w-14 md:w-16 h-9 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-[#000000] bg-[#FFFFFF] border ${progress === "50" ? "border-blue-500 bg-blue-100" : "border-[#D9D9D9]"}`}
              >
                50%
              </button>

              <button
                onClick={() => setProgress("75")}
                className={`w-12 sm:w-14 md:w-16 h-9 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-[#000000] bg-[#FFFFFF] border ${progress === "75" ? "border-blue-500 bg-blue-100" : "border-[#D9D9D9]"}`}
              >
                75%
              </button>

              <button
                onClick={() => setProgress("100")}
                className={`w-12 sm:w-14 md:w-16 h-9 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-[#000000] bg-[#FFFFFF] border ${progress === "100" ? "border-blue-500 bg-blue-100" : "border-[#D9D9D9]"}`}
              >
                100%
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`mt-4 sm:mt-6 w-full h-12 sm:h-14 lg:h-16 rounded-full py-2 sm:py-3 px-4 gap-2.5 border-2 text-sm sm:text-base lg:text-lg font-bold ${
            isFormValid
              ? "bg-[#77C2FF] border-black text-black cursor-pointer"
              : "bg-[#DDDCD9] border-[#666666] text-[#666666] cursor-not-allowed"
          }`}
        >
          Update Task
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
