import React, { useEffect, useState, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";
import Logo from "../assets/Frame.svg";
import Run from "../assets/run.svg";
import Google from "../assets/material.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, googleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleGoogleResponse = useCallback(
    async (response) => {
      if (!response?.credential) {
        toast.error("Google signup failed. Please try again.");
        return;
      }

      setLoading(true);
      try {
        await googleAuth({ token: response.credential });
        navigate("/dashboard");
      } catch (err) {
        console.error("Google signup error:", err);
        toast.error(err.response?.data?.message || "Google signup failed");
      } finally {
        setLoading(false);
      }
    },
    [googleAuth, navigate],
  );

  const handleGoogleSignup = () => {
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

    if (!name || !email || !phone || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await register({ name, email, phone, password });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      const backendError =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Registration failed";
      toast.error(backendError);
    } finally {
      setLoading(false);
    }
  };

  const iconClass = "text-gray-700 hover:text-gray-900 w-5 h-5";

  return (
    <div className="flex gap-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col pl-[100px] pb-[48px] pt-[40px]">
        <div className="mb-6 mt-[70px] flex items-center gap-2">
          <img src={Logo} alt="Logo" />
        </div>

        <h2 className="mb-6 text-[30px] font-bold text-black">
          Create Account
        </h2>

        <p className="mb-6">Enter your details to create your account.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[11px]">
          {/* EMAIL */}
          <div>
            <label>Email</label>
            <span className="text-[#A4003A]">*</span>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-1 mb-[11px] h-[56px] w-[484px] rounded-[48px] border px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {/* NAME */}
          <div>
            <label>Name</label>
            <span className="text-[#A4003A]">*</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 mb-[11px] h-[56px] w-[484px] rounded-[48px] border px-4 py-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label>Phone Number</label>
            <span className="text-[#A4003A]">*</span>
            <input
              type="tel"
              placeholder="Enter phone number (e.g. 08012345678)"
              className="mt-1 mb-[11px] h-[56px] w-[484px] rounded-[48px] border px-4 py-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label>Password</label>
            <span className="text-[#A4003A]">*</span>

            <div className="relative mb-[11px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="mt-1 h-[56px] w-[484px] rounded-[48px] border px-4 py-3 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
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

          {/* CONFIRM PASSWORD */}
          <div>
            <label>Confirm Password</label>
            <span className="text-[#A4003A]">*</span>

            <div className="relative mb-[11px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="mt-1 h-[56px] w-[484px] rounded-[48px] border px-4 py-3 pr-12"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible className={iconClass} />
                ) : (
                  <AiOutlineEye className={iconClass} />
                )}
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-[24px] mb-[30px] h-[56px] w-[484px] rounded-[48px] border-[2px] border-black bg-[#77C2FF] px-[12px] py-[19px] text-white shadow-[0_4px_0_0_black] ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400"
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {/* OR */}
          <div className="relative my-6">
            <div className="border-t border-[#D9D9D9]" />
            <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 text-sm text-[#666666]">
              Or
            </span>
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex h-[60px] w-[484px] items-center justify-center rounded-[48px] border border-[#D9D9D9] hover:bg-[#D9D9D9]"
          >
            <img src={Google} alt="Google" className="mr-2 h-[24px] w-[24px]" />
            <span className="font-semibold text-gray-700">
              Continue with Google
            </span>
          </button>
        </form>

        <div className="m-6 flex items-center justify-center font-medium">
          <p>
            Have an account?{" "}
            <Link to="/signin" className="text-[#77C2FF]">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="mt-[30px]">
        <img
          src={Run}
          alt="Illustration"
          className="h-[724px] w-[836px] object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
