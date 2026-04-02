import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./Pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import ErrorState from "./Pages/ErrorState";
import ProfilePage from "./Pages/ProfilePage";
import ProtectedLayout from "./Layout/ProtectedLayout";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/ErrorPage";
import ForgetPassword from "./Pages/ForgetPassword";
import CodeVerification from "./Pages/CodeVerification";
import CreatePassword from "./Pages/CreatePassword";
import DashBoard from "./Pages/DashBoard";
import DefaultPage from "./Pages/DefaultPage";
import AuthProvider from "./context/authContext";
import TasksProvider from "./context/tasksContext";
import AuthCallback from "./Pages/AuthCallback";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/codeverification" element={<CodeVerification />} />
            <Route path="/createpassword" element={<CreatePassword />} />
            <Route path="/errorstate" element={<ErrorState />} />
            <Route element={<ProtectedLayout />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/default" element={<DefaultPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
