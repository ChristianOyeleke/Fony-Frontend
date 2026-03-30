import { useState } from "react";
import Logo from "../assets/Frame.svg";
import Google from "../assets/material.svg";
import Run from "../assets/run.svg";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const iconClass = "text-gray-700 hover:text-gray-900 w-5 h-5"; // matches your SVG size & color

  return (
    <div className="flex gap-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col pl-[100px]">
        <div className="flex items-center gap-2 mt-[70px]">
          <img src={Logo} alt="Logo" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-[30px] text-[#000000]">
          Welcome Back
        </h2>
        <p className="mb-6">Enter your details to sign in to your account.</p>

        <form>
          {/* EMAIL */}
          <div className="mb-[11px]">
            <label>Email</label>
            <span className="text-[#A4003A]">*</span>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-[484px] h-[56px] mt-1 px-4 py-3 border rounded-[48px]"
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="mb-[11px]">
            <label>Phone Number</label>
            <span className="text-[#A4003A]">*</span>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-[484px] h-[56px] mt-1 px-4 py-3 border rounded-[48px]"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-[11px]">
            <label className="font-montserrat font-medium text-base leading-[142%] tracking-[-0.03em]">
              Password
            </label>
            <span className="text-[#A4003A]">*</span>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="w-[484px] h-[56px] px-4 py-3 border rounded-[48px] pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-12 top-1/2 -translate-y-1/2 z-50"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className={iconClass} />
                ) : (
                  <AiOutlineEye className={iconClass} />
                )}
              </button>
            </div>
          </div>

          {/* FORGOT PASSWORD */}

          <Link to="/forgetpassword">
            <p className="font-montserrat font-medium text-sm leading-[142%] tracking-[-0.03em] mb-[20px]">
              Forget password?
            </p>
          </Link>
          {/* LOGIN BUTTON */}
          <div className="text-center mt-2">
            <button
              type="submit"
              className="w-[484px] h-[56px] bg-[#77C2FF] text-white py-2 rounded-[48px] border-[2px] border-[#000000] mr-[25px] shadow-[0_4px_0_0_black] mb-[30px] font-bold"
            >
              Login
            </button>

            {/* OR divider */}
            <div className="relative my-6">
              <div className="border-t border-[#D9D9D9]" />
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 text-sm text-[#666666]">
                Or
              </span>
            </div>

            {/* GOOGLE */}
            <button className="flex items-center justify-center w-[484px] h-[60px] border-[0.8px] border-[#D9D9D9] rounded-[48px] py-2 hover:bg-[#D9D9D9]">
              <img src={Google} alt="" className="w-[24px] h-[24px] mr-2" />
              <Link>Continue with Google</Link>
            </button>
          </div>
        </form>

        {/* SIGN UP LINK */}
        <div className="flex items-center justify-center font-medium text-base leading-5 tracking-tight m-6">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup">
              <span className="text-[#77C2FF]">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="mt-[30px]">
        <img
          src={Run}
          alt="Illustration"
          className="w-[836px] h-[724px] object-cover"
        />
      </div>
    </div>
  );
};

export default Signin;
