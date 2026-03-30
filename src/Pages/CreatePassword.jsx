import React from "react";
import img from "../assets/run.svg";
import arrow from "../assets/Arrow.svg";
import eye from "../assets/eye.svg";

const CreatePassword = () => {
  return (
    <div className="flex h-screen font-[Montserrat]">
      <div className=" gap-8 flex flex-col w-1/2 px-[7%] pt-20">
        <div className="flex gap-2 items-center">
          <img src={arrow} alt="" className="w-4" />
          <p className="font-medium font-[Mona_Sans]">Back</p>
        </div>

        <div>
          <p className="text-[38px] font-bold ">Create your password?</p>
          <p className="font-[Mona_Sans]">
            Create new password by filling the form below
          </p>
        </div>

        <div className="flex flex-col gap-4 font-semibold">
          <p>
            Create New Password <span className="text-red-600">*</span>
          </p>

          <div className="border rounded-4xl  flex justify-between relative">
            <input
              className=" border rounded-4xl p-3 w-full "
              type="password"
              placeholder="    Enter new password"
            />
            <img
              className="cursor-pointer absolute right-3 top-3"
              src={eye}
              alt=""
            />
          </div>

          <div className="border rounded-4xl  flex justify-between relative">
            <input
              className=" border rounded-4xl p-3 w-full "
              type="password"
              placeholder="    Re-enter password"
            />
            <img
              className="cursor-pointer absolute right-3 top-3"
              src={eye}
              alt=""
            />
          </div>

          <p>
            Confirm Password <span className="text-red-600">*</span>
          </p>

          <button className="bg-[#77C2FF] p-3 border-b-5 rounded-4xl font-[Montserrat] font-bold cursor-pointer ">
            Confirm
          </button>
        </div>
      </div>

      <div className="w-[54.5%]">
        <img src={img} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default CreatePassword;
