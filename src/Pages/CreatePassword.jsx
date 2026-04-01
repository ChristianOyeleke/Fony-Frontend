import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import { toast } from "react-toastify";
import img from "../assets/run.svg";
import arrow from "../assets/Arrow.svg";
import eye from "../assets/eye.svg";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("forgotEmail");
  const otp = localStorage.getItem("forgotOtp");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!email || !otp) {
      toast.error("Session expired. Please start forgot password again.");
      navigate("/forgetpassword");
      return;
    }
    setLoading(true);
    try {
      await api.post("/api/auth/reset-password", { email, otp, newPassword });
      toast.success("Password reset successful!");
      localStorage.removeItem("forgotEmail");
      localStorage.removeItem("forgotOtp");
      navigate("/signin");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed. OTP expired?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen font-[Montserrat]">
      <div className="gap-8 flex flex-col w-1/2 px-[7%] pt-12">
        <div
          onClick={() => navigate("/codeverification")}
          className="flex gap-2 items-center cursor-pointer w-fit"
        >
          <img src={arrow} alt="Back" className="w-4" />
          <p className="font-medium font-[Mona_Sans]">Back</p>
        </div>

        <div>
          <p className="text-[38px] font-bold">Create new password</p>
          <p className="font-[Mona_Sans]">
            Create new password by filling the form below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-semibold"
        >
          <label>
            New Password <span className="text-red-600">*</span>
          </label>
          <div className="border rounded-4xl flex justify-between relative">
            <input
              className="border-none rounded-4xl p-3 w-full outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
              required
            />
            <img
              className="cursor-pointer absolute right-3 top-3 w-5"
              src={eye}
              alt="Toggle password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <label>
            Confirm Password <span className="text-red-600">*</span>
          </label>
          <div className="border rounded-4xl flex justify-between relative">
            <input
              className="border-none rounded-4xl p-3 w-full outline-none"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={6}
              required
            />
            <img
              className="cursor-pointer absolute right-3 top-3 w-5"
              src={eye}
              alt="Toggle password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] p-3 border-b-5 rounded-4xl font-[Montserrat] font-bold cursor-pointer disabled:opacity-50"
          >
            {loading ? "Resetting..." : "Confirm"}
          </button>
        </form>
      </div>

      <div className="w-[54.5%]">
        <img src={img} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default CreatePassword;
