import React from "react";
import img from "../assets/Frame-2.svg";
import arrow from "../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";

const CodeVerification = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className=" gap-8 flex flex-col w-1/2 px-[7%] pt-30">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={arrow} alt="" className="w-4" />
          <p className="font-medium font-[Mona_Sans]">Back</p>
        </div>

        <div>
          <p className="text-[38px] font-bold ">Enter 6-Digit Code</p>
          <p className="font-[Montserrat]">
            Enter 6-digit code sent to your olaagwj@gmail.com.
          </p>
        </div>

        <div className=" flex items-center gap-2">
          <input
            className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300"
            type="text"
          />
          <input
            className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300"
            type="text"
          />
          <input
            className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300"
            type="text"
          />
          <input
            className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300"
            type="text"
          />
          <input
            className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300"
            type="text"
          />
          <input
            className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300"
            type="text"
          />
        </div>

        <button
          onClick={() => {
            navigate("/createpassword");
          }}
          className="bg-[#77C2FF] p-2 border-b-5 rounded-4xl font-[Montserrat] font-bold cursor-pointer "
        >
          Login
        </button>

        <p className=" mt-4  font-[Montserrat]">
          Didn't receive the code?{" "}
          <span className="text-blue-500 cursor-pointer">Resend</span>
        </p>
        <p className=" font-[Montserrat]">
          Remember your password?{" "}
          <span className="text-blue-500 cursor-pointer">Sign In</span>
        </p>
      </div>

      <div className="w-[54.5%]">
        <img src={img} alt="" className="" />
      </div>
    </div>
  );
};

export default CodeVerification;
