import React from "react";
import { RiCameraAiLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineLockOpen } from "react-icons/md";
import ProfileImage from "../assets/FB_IMG_16265830618836469 1.png";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex justify-center items-center bg-gray-50 ">
      <form className="flex flex-col gap-6 bg-white p-10  w-full max-w-2xl ">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Personal Information
        </h2>

        <div className="flex items-center justify-between w-full mb-4">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-100 object-cover"
          />
          <button
            type="button"
            className="flex items-center gap-2 text-black cursor-pointer text-sm font-semibold hover:text-blue-600 transition"
          >
            <RiCameraAiLine size={20} /> Change Profile Image
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">First Name</label>
            <input
              type="text"
              placeholder="Cole"
              className="bg-gray-50 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Last Name</label>
            <input
              type="text"
              placeholder="Mudryk"
              className="bg-gray-50 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Email</label>
            <input
              type="email"
              placeholder="olafarid12@gmail.com"
              className="bg-gray-50 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Phone Number</label>
            <input
              type="text"
              placeholder="09025730919"
              className="bg-gray-50 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <button className="w-full bg-white border-2 border-black text-black py-4 rounded-2xl font-bold hover:bg-black-500 shadow-[0_4px_0px_rgba(0,0,0,1)]">
            Edit Profile information
          </button>

          <button
            type="button"
            onClick={() => navigate("/createpassword")}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-400 text-blue-500 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
          >
            <MdOutlineLockOpen /> Forgot Password
          </button>

          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-400 text-red-500 py-4 rounded-2xl font-semibold hover:bg-black-50 transition"
          >
            <AiOutlineLogout /> Log out
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
