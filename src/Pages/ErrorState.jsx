import { useState } from "react";
import Logo from "../assets/Frame.svg";
import Run from "../assets/run.svg";
import Google from "../assets/material.svg";
import Info from "../assets/Circle.svg";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ErrorState = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false); 

  const iconClass = "text-gray-700 hover:text-gray-900 w-5 h-5";

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Replace with real login logic
    const loginSuccessful = false; 

    if (!loginSuccessful) {
      setShowError(true); 
    } else {
      setShowError(false);
    
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex gap-[20px] w-[1440px] pl-25">
        {/* LEFT FORM */}
        <div className="flex flex-col pb-[48px] pt-[40px] w-[484px] h-[673px]">
          <div className="mb-6 flex items-center gap-2 mt-[70px]">
            <img src={Logo} alt="Logo" />
          </div>

          <h2 className="text-[30px] font-bold mb-6 text-black">
            Welcome Back
          </h2>
          <p className="mb-6">Enter your details to sign in to your account.</p>

          <form className="flex flex-col gap-[11px]" onSubmit={handleLogin}>
            {/* EMAIL */}
            <div>
              <label>Email</label>
              <span className="text-[#A4003A]">*</span>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-[484px] h-[56px] mt-1 px-4 py-3 border rounded-[48px] mb-[11px]"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-montserrat font-medium text-base leading-[142%] tracking-[-0.03em]">
                Password
              </label>
              <span className="text-[#A4003A]">*</span>

              <div className="relative mt-1 mb-[11px]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-[484px] h-[56px] px-4 py-3 border rounded-[48px] pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50"
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

            {/* ERROR MESSAGE */}
            {showError && (
              <div className="flex items-center gap-2 text-[#FF3737] bg-[#FF37370D] border border-[#FF373733] rounded-[48px] w-[484px] h-[56px] px-4 py-3 mb-[11px] font-medium">
                <img src={Info} alt="Error info" className="w-5 h-5" />
                <span>Password or Email incorrect</span>
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-[484px] h-[56px] bg-[#77C2FF] text-white py-2 rounded-[48px] border-[2px] border-black shadow-[0_4px_0_0_black] font-bold mb-[30px] mt-[24px]"
            >
              Login
            </button>

            {/* OR Divider */}
            <div className="relative my-6">
              <div className="border-t border-[#D9D9D9]" />
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 text-sm text-[#666666]">
                Or
              </span>
            </div>

            {/* GOOGLE LOGIN */}
            <button className="flex items-center justify-center w-[484px] h-[60px] border-[0.8px] border-[#D9D9D9] rounded-[48px] py-2 hover:bg-[#D9D9D9]">
              <img
                src={Google}
                alt="Google"
                className="w-[24px] h-[24px] mr-2"
              />
              <Link>Continue with Google</Link>
            </button>
          </form>

          {/* SIGNUP LINK */}
          <div className="flex items-center justify-center font-medium text-base leading-5 tracking-tight m-6">
            <p>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#77C2FF]">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-[30px]">
          <img
            src={Run}
            alt="Illustration"
            className="w-[904px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
