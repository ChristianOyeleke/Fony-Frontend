import React, { useContext, useEffect, useRef, useState } from "react";
import { RiCameraAiLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineLockOpen } from "react-icons/md";
import ProfileImage from "../assets/FB_IMG_16265830618836469 1.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

const ProfilePage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { user, updateProfile, logout } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileUrl, setProfileUrl] = useState(ProfileImage);
  const [selectedFile, setSelectedFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fullName = user?.name || "";
    const nameParts = fullName.split(" ");
    setFirstName(nameParts[0] || "");
    setLastName(nameParts.slice(1).join(" ") || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
    setProfileUrl(user?.profilePicture || ProfileImage);
    setSelectedFile(null);
  }, [user]);

  const resetForm = () => {
    const fullName = user?.name || "";
    const nameParts = fullName.split(" ");
    setFirstName(nameParts[0] || "");
    setLastName(nameParts.slice(1).join(" ") || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
    setProfileUrl(user?.profilePicture || ProfileImage);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", `${firstName} ${lastName}`.trim());
      formData.append("email", email);
      formData.append("phone", phone);

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      await updateProfile(formData);
      setEditMode(false);
      setMessage("Profile saved successfully.");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to save profile.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className=" w-full flex justify-center items-center bg-gray-50 ">
      <form className="flex flex-col gap-6 bg-white p-10  w-full max-w-2xl ">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Personal Information
        </h2>

        <div className="flex items-center justify-between w-full mb-4">
          <div className="relative">
            <img
              src={profileUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-100 object-cover"
            />
            {editMode && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 rounded-full bg-white p-1 shadow-lg"
                aria-label="Change profile image"
              >
                <RiCameraAiLine size={18} />
              </button>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 text-black cursor-pointer text-sm font-semibold hover:text-blue-600 transition"
            >
              <RiCameraAiLine size={20} /> Edit Profile Information
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setSelectedFile(file);
                setProfileUrl(URL.createObjectURL(file));
              }}
            />
            {editMode && (
              <button
                type="button"
                onClick={() => {
                  setEditMode(false);
                  setMessage("");
                  resetForm();
                }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              readOnly={!editMode}
              className={`border p-4 rounded-2xl outline-none focus:ring-2 transition ${
                editMode
                  ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              readOnly={!editMode}
              className={`border p-4 rounded-2xl outline-none focus:ring-2 transition ${
                editMode
                  ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={!editMode}
              className={`border p-4 rounded-2xl outline-none focus:ring-2 transition ${
                editMode
                  ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              readOnly={!editMode}
              className={`border p-4 rounded-2xl outline-none focus:ring-2 transition ${
                editMode
                  ? "bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {message && (
            <p className="text-sm text-center text-green-600">{message}</p>
          )}

          {editMode ? (
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition ${
                saving
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed border border-gray-400"
                  : "bg-white border border-gray-400 text-blue-500 hover:bg-gray-50"
              }`}
            >
              {saving ? "Saving..." : "Save Profile"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="w-full bg-white border-2 border-black text-black py-4 rounded-2xl font-bold hover:bg-black-500 shadow-[0_4px_0px_rgba(0,0,0,1)]"
            >
              Edit Profile information
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate("/createpassword")}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-400 text-blue-500 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
          >
            <MdOutlineLockOpen /> Forgot Password
          </button>

          <button
            type="button"
            onClick={() => {
              logout();
              navigate("/signin");
            }}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-400 text-red-500 py-4 rounded-2xl font-semibold hover:bg-black-50 transition"
          >
            <AiOutlineLogout /> Log out
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
