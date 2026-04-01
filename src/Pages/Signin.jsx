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
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const newErrors = {};
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
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
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-0 lg:gap-[20px] min-h-screen items-center justify-center py-8">
      {/* LEFT SIDE */}
      <div className="flex flex-col w-full lg:pl-[100px] max-w-md mx-auto lg:mx-0 order-2 lg:order-1 px-4 lg:px-0">
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
              className="w-full h-[56px] mt-1 px-4 py-3 border rounded-[48px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
                className="w-full h-[56px] px-4 py-3 border rounded-[48px] pr-12 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
                maxLength={128}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
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
            className={`w-full h-[56px] bg-[#77C2FF] text-white rounded-[48px] border-[2px] border-[#000000] shadow-[0_4px_0_0_black] mb-[30px] font-bold transition-all active:shadow-none active:translate-y-1 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400"
            }`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {/* OR divider */}
          <div className="relative my-4 w-full max-w-md mx-auto">
            <div className="border-t border-[#D9D9D9]" />
            <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 text-sm text-[#666666]">
              Or
            </span>
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full h-[60px] border border-[#D9D9D9] rounded-[48px] py-2 hover:bg-gray-50 transition-colors"
          >
            <img src={Google} alt="" className="w-[24px] h-[24px] mr-2" />
            <span className="font-semibold text-gray-700">
              Continue with Google
            </span>
          </button>
        </form>

        {/* SIGN UP LINK */}
        <div className="flex items-center justify-center font-medium m-6 w-full max-w-md mx-auto">
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
      <div className="w-full lg:w-auto order-1 lg:order-2 mt-8 lg:mt-[30px] lg:block max-w-4xl mx-auto lg:mx-0">
        <img
          src={Run}
          alt="Illustration"
          className="w-full h-96 lg:w-[836px] lg:h-[724px] object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Signin;
