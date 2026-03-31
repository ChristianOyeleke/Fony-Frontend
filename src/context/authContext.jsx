import { useEffect, useState, createContext } from "react";
import api from "../api/axios.js";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  //REGISTER
  const register = async (formData) => {
    try {
      const { data } = await api.post("/api/auth/register", formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      toast.success("ACCOUNT CREATED SUCCESSFULLY");
      return data;
    } catch (err) {
      console.error(
        "Register error:",
        err.response?.status,
        err.response?.data || err.message || err,
      );
      throw err;
    }
  };

  //LOGIN
  const login = async (formData) => {
    try {
      const { data } = await api.post("/api/auth/login", formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      toast.success("LOGIN SUCCESSFUL");
      return data;
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message || err);
      throw err;
    }
  };

  //GOOGLE AUTH
  const googleAuth = async ({ token }) => {
    try {
      const { data } = await api.post("/api/auth/google-auth", { token });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      toast.success("LOGIN SUCCESSFUL");
      return data;
    } catch (err) {
      console.error(
        "Google auth error:",
        err.response?.data || err.message || err,
      );
      throw err;
    }
  };

  //LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("LOGOUT SUCCESSFUL");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        googleAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
