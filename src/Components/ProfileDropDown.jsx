import React from "react";
import { HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import profileImage from "../assets/FB_IMG_16265830618836469 1.png";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-100 rounded-[30px] shadow-2xl p-5 w-80 flex flex-col">
      {/* User Info Header */}
      <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
        <img
          src={profileImage}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover shadow-sm"
        />
        <div className="flex flex-col">
          <p className="text-[22px] font-bold text-gray-900 leading-tight">
            Farid Ahmed
          </p>
          <p className="text-gray-500 text-sm">olafarid12@gmail.com</p>
        </div>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col pt-4 gap-1 ">
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all text-gray-800 group shadow-sm"
        >
          <HiOutlineUser className="text-2xl text-gray-700" />
          <span className="text-lg font-medium">View Profile</span>
        </button>

        <button
          onClick={() => navigate("/signin")}
          className="flex items-center gap-4 p-3 rounded-xl hover:bg-black-50 transition-all text-gray-800 group shadow-sm"
        >
          <HiOutlineLogout className="text-2xl text-black-100" />
          <span className="text-lg font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropDown;
