import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";

const LandingNavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between py-7.5 px-25 ">
      <img src={logo} alt="" />
      <div className="flex gap-10 ">
        <p
          className="cursor-pointer hover:text-[#77C2FF]"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p
          className="cursor-pointer hover:text-[#77C2FF]"
          onClick={() => navigate("/signup")}
        >
          How to Get Started
        </p>
        <p
          className="cursor-pointer hover:text-[#77C2FF]"
          onClick={() => navigate("/#testimonials")}
        >
          Testimonial
        </p>
      </div>
    </div>
  );
};

export default LandingNavBar;
