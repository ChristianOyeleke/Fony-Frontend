import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import profileImage from "../assets/FB_IMG_16265830618836469 1.png";
import ProfileDropDown from "./ProfileDropDown";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex relative z-10 justify-between h-auto md:h-[100px] px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 md:py-[30px] border-b-[1px] border-[#D9D9D9] w-full max-w-full">
      <img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/dashboard");
        }}
        className="w-[80px] xs:w-[100px] sm:w-[110px] md:w-[124px] h-auto cursor-pointer"
      />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span
          className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black ${isMobileMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex font-md font-[Montserrat] justify-between text-sm md:text-[16px] lg:w-[350px] xl:w-[377px] h-[40px] items-center text-center leading-[20px] z-10">
        <p
          className="bg-[#77C2FF] w-[100px] md:w-[124px] h-[40px] rounded-[22px] text-center py-[10px] px-[15px] md:px-[19px] cursor-pointer hover:bg-[#5bb3f0] transition-colors"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </p>
        <p
          className="bg-[#F1F1F180] w-[90px] md:w-[108px] h-[40px] rounded-[22px] text-center py-[10px] px-[15px] md:px-[19px] cursor-pointer hover:bg-[#e0e0e0] transition-colors"
          onClick={() => navigate("/dashboard")}
        >
          Ongoing
        </p>
        <p
          className="bg-[#F1F1F180] w-[100px] md:w-[125px] h-[40px] rounded-[22px] text-center py-[10px] px-[15px] md:px-[19px] cursor-pointer hover:bg-[#e0e0e0] transition-colors"
          onClick={() => navigate("/dashboard")}
        >
          Completed
        </p>
      </div>

      {/* Desktop Profile Section */}
      <div className="hidden md:block">
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-gray-100 shadow-sm"
          />
          <IoIosArrowDown
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {isOpen && (
          <div className="absolute right-4 sm:right-10 top-20 z-100 animate-in fade-in zoom-in duration-200">
            <ProfileDropDown />
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 flex flex-col gap-4 md:hidden">
          <div className="flex flex-col gap-2 font-md font-[Montserrat] text-sm sm:text-[16px]">
            <p
              className="bg-[#77C2FF] w-full h-[40px] rounded-[22px] text-center py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
                setIsMobileMenuOpen(false);
              }}
            >
              Dashboard
            </p>
            <p
              className="bg-[#F1F1F180] w-full h-[40px] rounded-[22px] text-center py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
                setIsMobileMenuOpen(false);
              }}
            >
              Ongoing
            </p>
            <p
              className="bg-[#F1F1F180] w-full h-[40px] rounded-[22px] text-center py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
                setIsMobileMenuOpen(false);
              }}
            >
              Completed
            </p>
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer select-none border-t pt-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <IoIosArrowDown
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
          {isOpen && <ProfileDropDown />}
        </div>
      )}
    </div>
  );
};

export default NavBar;
