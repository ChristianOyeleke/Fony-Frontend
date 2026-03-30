import React from "react";
import img from "../assets/run.svg";
import arrow from "../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen font-[Montserrat]">
      <div className=" gap-8 flex flex-col w-1/2 px-[7%] pt-30">
        <div className="flex gap-2 items-center">
          <img src={arrow} alt="" className="w-4" />
          <p className="font-medium font-[Mona_Sans]">Back</p>
        </div>

        <div>
          <p className="text-[38px] font-bold ">Forgot your password?</p>
          <p className="font-[Mona_Sans]">
            We will send instructions to your email to reset your password.
          </p>
        </div>

        <div className="flex flex-col gap-4 font-semibold">
          <p>Email</p>

          <input
            className="border rounded-4xl p-4"
            
            type="Email"
            placeholder=" Enter email used to create account"
          />


          <button onClick={() => {
            navigate("/codeverification");
          }}
           className="bg-[#77C2FF] p-2 border-b-5 rounded-4xl cursor-pointer font-[Montserrat] font-bold ">
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

export default ForgetPassword;
