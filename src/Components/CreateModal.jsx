import React, { useState } from "react";
import pic from "../assets/Vector.svg";
import { MdCancel } from "react-icons/md";

const CreateModal = ({ closeModal, openNextModal, createTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFormValid = taskName && taskDescription && priority;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", taskName);
      formData.append("description", taskDescription);
      formData.append("priority", priority.toLowerCase());
      formData.append("dueDate", dueDate || new Date().toISOString());
      formData.append("progress", "0");
      if (image) {
        formData.append("image", image);
      }
      await createTask(formData);
      openNextModal();
      closeModal();
    } catch (error) {
      console.error("Create task failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 backdrop-blur-sm">
      <div
        className="bg-[#FBFBFB] w-full xs:w-[320px] sm:w-[450px] md:w-[550px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] 3xl:w-[1100px] 
        rounded-3xl border-2 border-black mt-4 md:mt-8 max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
      >
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-100 shrink-0">
          <div>
            <h1 className="font-[Rackety-DEMO] text-[#000000] text-lg sm:text-xl md:text-[25px] lg:text-[28px] 3xl:text-[32px] font-bold">
              Create New Task
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[Montserrat] text-[#000000] font-medium">
              Enter description about this task
            </p>
          </div>
          <MdCancel
            className="cursor-pointer text-2xl sm:text-3xl text-gray-400 hover:text-black transition-colors"
            onClick={closeModal}
          />
        </div>

        <div className="font-[Montserrat] p-4 md:p-6 overflow-y-auto custom-scrollbar flex-grow">
          <form className="space-y-4 md:space-y-6">
            <div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#666666]">
                Task Name <span className="text-[#A4003A]">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter your task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full h-10 sm:h-12 text-[#666666] bg-[#FFFFFF] rounded-full px-4 border border-gray-300 mt-1 focus:ring-2 focus:ring-[#77C2FF] outline-none transition-all"
              />
            </div>

            <div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#666666]">
                Task Description <span className="text-[#A4003A]">*</span>
              </p>
              <textarea
                placeholder="What is this task about?"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full min-h-[100px] py-3 text-[#666666] bg-[#FFFFFF] rounded-2xl px-4 border border-gray-300 mt-1 focus:ring-2 focus:ring-[#77C2FF] outline-none transition-all"
              />
            </div>

            <div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#666666]">
                Select Task Priority <span className="text-[#A4003A]">*</span>
              </p>
              <div className="grid grid-cols-3 mt-2 gap-2">
                {["Low", "Medium", "High"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`h-10 sm:h-12 flex items-center justify-center text-xs sm:text-sm lg:text-base rounded-full border transition-all ${
                      priority === p
                        ? "bg-[#77C2FF] border-black text-black font-bold shadow-inner"
                        : "bg-white border-gray-300 text-[#666666] hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#666666] mb-2">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full h-10 sm:h-12 text-[#666666] bg-[#FFFFFF] rounded-full px-4 border border-gray-300 focus:ring-2 focus:ring-[#77C2FF] outline-none transition-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300 gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#FFFFFF] rounded-xl p-3 border border-gray-300 shrink-0 flex items-center justify-center">
                <img
                  src={pic}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-xs sm:text-sm lg:text-base font-semibold text-[#363636]">
                <p className="font-medium text-[#0C0C0C]">
                  Task image (optional)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="mt-2 w-full text-sm text-gray-700"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="p-4 md:p-6 border-t border-gray-100 shrink-0 bg-[#FBFBFB]">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || loading}
            className={`w-full h-12 lg:h-14 flex items-center justify-center rounded-full border-2 text-sm sm:text-base lg:text-lg font-bold transition-all transform active:scale-[0.98] ${
              isFormValid
                ? "bg-[#77C2FF] border-black text-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                : "bg-[#DDDCD9] border-[#000000] text-[#000000] cursor-not-allowed opacity-60"
            }`}
          >
            {loading ? "Creating..." : "Create New Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
