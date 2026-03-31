import React, { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";
import Logo from "../assets/Frame.svg";
import Google from "../assets/material.svg";
import Run from "../assets/run.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, googleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleGoogleResponse = useCallback(
    async (response) => {
      if (!response?.credential) {
        toast.error("Google login failed. Please try again.");
        return;
      }

      setLoading(true);
      try {
        await googleAuth({ token: response.credential });
        navigate("/dashboard");
      } catch (err) {
        console.error("Google login error:", err);
        toast.error(err.response?.data?.message || "Google login failed");
      } finally {
        setLoading(false);
      }
    },
    [googleAuth, navigate],
  );

  const handleGoogleLogin = () => {
    if (!googleClientId || googleClientId === "your_google_client_id_here") {
      toast.error(
        "Google Client ID is not configured. Add VITE_GOOGLE_CLIENT_ID to .env.",
      );
      return;
    }

    if (!window.google) {
      toast.error("Google SDK is still loading. Please refresh the page.");
      return;
    }

    window.google.accounts.id.prompt();
  };

  useEffect(() => {
    if (!googleClientId) return;

    const initializeGoogle = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleGoogleResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });
      }
    };

    if (window.google?.accounts?.id) {
      initializeGoogle();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogle;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [googleClientId, handleGoogleResponse]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const iconClass = "text-gray-700 hover:text-gray-900 w-5 h-5";

  return (
    <div className="flex gap-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col pl-[100px]">
        <div className="flex items-center gap-2 mt-[70px] mb-4">
          <img src={Logo} alt="Logo" />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-[30px] text-[#000000]">
          Welcome Back
        </h2>
        <p className="mb-6">Enter your details to sign in to your account.</p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* EMAIL */}
          <div className="mb-[11px]">
            <label className="block font-medium">
              Email <span className="text-[#A4003A]">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-[484px] h-[56px] mt-1 px-4 py-3 border rounded-[48px] outline-none focus:border-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-[11px]">
            <label className="block font-medium">
              Password <span className="text-[#A4003A]">*</span>
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="w-[484px] h-[56px] px-4 py-3 border rounded-[48px] pr-12 outline-none focus:border-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10"
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
          <Link to="/forgetpassword" title="Reset password">
            <p className="text-sm font-medium mb-[20px] hover:underline">
              Forget password?
            </p>
          </Link>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-[484px] h-[56px] bg-[#77C2FF] text-white rounded-[48px] border-[2px] border-[#000000] shadow-[0_4px_0_0_black] mb-[30px] font-bold transition-all active:shadow-none active:translate-y-1 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400"
            }`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {/* OR divider */}
          <div className="relative my-4 w-[484px]">
            <div className="border-t border-[#D9D9D9]" />
            <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 text-sm text-[#666666]">
              Or
            </span>
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-[484px] h-[60px] border border-[#D9D9D9] rounded-[48px] py-2 hover:bg-gray-50 transition-colors"
          >
            <img src={Google} alt="" className="w-[24px] h-[24px] mr-2" />
            <span className="font-semibold text-gray-700">
              Continue with Google
            </span>
          </button>
        </form>

        {/* SIGN UP LINK */}
        <div className="flex items-center justify-center font-medium m-6 w-[484px]">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#77C2FF] font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="mt-[30px] hidden lg:block">
        <img
          src={Run}
          alt="Illustration"
          className="w-[836px] h-[724px] object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
};

export default Signin;
