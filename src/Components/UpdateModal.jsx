import React, { useEffect, useState } from "react";
import pic from "../assets/Vector.svg";
import { MdCancel } from "react-icons/md";

const UpdateModal = ({ closeModal, openNextModal, task, updateTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [progress, setProgress] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setTaskName(task.title || "");
      setTaskDescription(task.description || "");
      setPriority(
        task.priority
          ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
          : "",
      );
      setProgress(task.progress?.toString() || "0");
      setDueDate(
        task.dueDate
          ? new Date(task.dueDate).toISOString().substring(0, 10)
          : "",
      );
    }
  }, [task]);

  const isFormValid = taskName && taskDescription && priority && progress;

  const handleSubmit = async () => {
    if (!isFormValid || !task) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", taskName);
      formData.append("description", taskDescription);
      formData.append("priority", priority.toLowerCase());
      formData.append("dueDate", dueDate || new Date().toISOString());
      formData.append("progress", progress);
      if (image) {
        formData.append("image", image);
      }
      await updateTask(task._id, formData);
      openNextModal();
      closeModal();
    } catch (error) {
      console.error("Update task failed", error);
    } finally {
      setLoading(false);
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

          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0C0C0C]">
              Select Task Priority <span className="text-[#A4003A]">*</span>
            </p>

            <div className="grid grid-cols-3 mt-2 sm:mt-3 gap-1.5 sm:gap-2">
              {["Low", "Medium", "High"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPriority(value)}
                  className={`h-10 sm:h-12 flex items-center justify-center text-xs sm:text-sm lg:text-base text-[#666666] bg-[#FFFFFF] rounded-full px-2 sm:px-4 border border-gray-300 ${
                    priority === value ? "bg-blue-100 border-blue-500" : ""
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#666666]">
              Select Task Progress <span className="text-[#A4003A]">*</span>
            </p>
            <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {["0", "25", "50", "75", "100"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setProgress(value)}
                  className={`w-12 sm:w-14 md:w-16 h-9 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-[#000000] bg-[#FFFFFF] border ${
                    progress === value
                      ? "border-blue-500 bg-blue-100"
                      : "border-[#D9D9D9]"
                  }`}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
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
              <img src={pic} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 text-xs sm:text-sm lg:text-base font-semibold text-[#363636]">
              <p className="font-medium text-[#0C0C0C]">
                Replace task image (optional)
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="mt-2 w-full text-sm text-gray-700"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
          className={`mt-4 sm:mt-6 w-full h-12 sm:h-14 lg:h-16 rounded-full py-2 sm:py-3 px-4 gap-2.5 border-2 text-sm sm:text-base lg:text-lg font-bold ${
            isFormValid
              ? "bg-[#77C2FF] border-black text-black cursor-pointer"
              : "bg-[#DDDCD9] border-[#666666] text-[#666666] cursor-not-allowed"
          }`}
        >
          {loading ? "Updating..." : "Update Task"}
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
