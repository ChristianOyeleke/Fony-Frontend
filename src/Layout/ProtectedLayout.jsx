import React, { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import NavBar from "../Components/NavBar";

const ProtectedLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
