import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Decode the JWT payload to get user info
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const userData = {
          _id: payload.id,
          role: payload.role || "user",
          name: payload.name,
          email: payload.email,
          phoneNumber: payload.phoneNumber || "",
        };
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        toast.success("Login successful!");
        navigate("/dashboard", { replace: true });
      } catch (error) {
        console.error("Token decode error:", error);
        toast.error("Invalid token");
        navigate("/signin", { replace: true });
      }
    } else {
      toast.error("No token found");
      navigate("/signin", { replace: true });
    }
  }, [navigate, setUser]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <p className="text-lg text-gray-600">Logging you in...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
