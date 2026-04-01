import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import { toast } from "react-toastify";
import img from "../assets/Frame-2.svg";
import arrow from "../assets/Arrow.svg";

const CodeVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("forgotEmail") || "");
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!email) {
      toast.error("No email found. Please go to forgot password page first.");
      navigate("/forgetpassword");
      return;
    }
    inputRefs.current[0]?.focus();
  }, [email, navigate]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = otp.split("");
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter full 6-digit code");
      return;
    }
    localStorage.setItem("forgotOtp", otp);
    toast.success("Code verified successfully!");
    navigate("/createpassword");
  };

  const handleResend = async () => {
    setLoading(true);
    try {
      await api.post("/api/auth/forgot-password", { email });
      toast.success("New OTP sent to your email!");
      setOtp("");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to resend OTP. Check email exists.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="flex">
      <div className="gap-8 flex flex-col w-1/2 px-[7%] pt-12">
        <div
          onClick={() => {
            navigate("/forgetpassword");
          }}
          className="flex gap-2 items-center cursor-pointer w-fit"
        >
          <img src={arrow} alt="Back" className="w-4" />
          <p className="font-medium font-[Mona_Sans]">Back</p>
        </div>

        <div>
          <p className="text-[38px] font-bold">Enter 6-Digit Code</p>
          <p className="font-[Montserrat]">
            Enter 6-digit code sent to{" "}
            <span className="font-semibold">{email}</span>
          </p>
        </div>

        <div className=" flex items-center gap-2">
          {Array.from("______").map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-15 h-15 rounded-[50px] bg-white border-3 border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              type="text"
              maxLength={1}
              value={otp[index] || ""}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button
          onClick={verifyOtp}
          disabled={loading || otp.length !== 6}
          className="bg-[#77C2FF] p-2 border-b-5 rounded-4xl font-[Montserrat] font-bold cursor-pointer disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Continue"}
        </button>

        <p className=" mt-4  font-[Montserrat]">
          Didn't receive the code?{" "}
          <span onClick={handleResend} className="text-blue-500 cursor-pointer">
            Resend
          </span>
        </p>
        <p className=" font-[Montserrat]">
          Remember your password?{" "}
          <span onClick={handleSignIn} className="text-blue-500 cursor-pointer">
            Sign In
          </span>
        </p>
      </div>

      <div className="w-[54.5%]">
        <img src={img} alt="" className="" />
      </div>
    </div>
  );
};

export default CodeVerification;
