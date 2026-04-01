import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import { toast } from "react-toastify";
import img from "../assets/run.svg";
import arrow from "../assets/Arrow.svg";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter email");
      return;
    }
    setLoading(true);
    try {
      await api.post("/api/auth/forgot-password", { email });
      localStorage.setItem("forgotEmail", email);
      toast.success("OTP sent to your email!");
      navigate("/codeverification");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen font-[Montserrat]">
      <div className="gap-8 flex flex-col w-1/2 px-[7%] pt-12">
        <div
          onClick={() => navigate("/signin")}
          className="flex gap-2 items-center cursor-pointer w-fit"
        >
          <img src={arrow} alt="Back" className="w-4" />
          <p className="font-medium font-[Mona_Sans]">Back</p>
        </div>

        <div>
          <p className="text-[38px] font-bold">Forgot your password?</p>
          <p className="font-[Mona_Sans]">
            We will send instructions to your email to reset your password.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-semibold"
        >
          <label>Email</label>
          <input
            className="border rounded-4xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="email"
            placeholder="Enter email used to create account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] p-2 border-b-5 rounded-4xl cursor-pointer font-[Montserrat] font-bold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Confirm"}
          </button>
        </form>
      </div>

      <div className="w-[54.5%]">
        <img src={img} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default ForgetPassword;
