import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

// Doctor Pages
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  // If no token, force to login
  if (!aToken && !dToken) {
    return (
      <>
        <Login />
        <ToastContainer />
      </>
    );
  }

  // Admin Section
  if (aToken) {
    return (
      <div className="bg-[#F8F9FD]">
        <ToastContainer />
        <Navbar />
        <div className="flex items-start">
          <Sidebar userType="admin" />
          <Routes>
            <Route path="/" element={<Navigate to="/admin-dashboard" />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointments" element={<AllAppointments />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorsList />} />
            {/* Redirect doctor routes */}
            <Route
              path="/doctor-dashboard"
              element={<Navigate to="/admin-dashboard" />}
            />
            <Route
              path="/doctor-appointments"
              element={<Navigate to="/admin-dashboard" />}
            />
            <Route
              path="/doctor-profile"
              element={<Navigate to="/admin-dashboard" />}
            />
            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/admin-dashboard" />} />
          </Routes>
        </div>
      </div>
    );
  }

  // Doctor Section
  if (dToken) {
    return (
      <div className="bg-[#F8F9FD]">
        <ToastContainer />
        <Navbar />
        <div className="flex items-start">
          <Sidebar userType="doctor" />
          <Routes>
            <Route path="/" element={<Navigate to="/doctor-dashboard" />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route
              path="/doctor-appointments"
              element={<DoctorAppointment />}
            />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            {/* Redirect admin routes */}
            <Route
              path="/admin-dashboard"
              element={<Navigate to="/doctor-dashboard" />}
            />
            <Route
              path="/all-appointments"
              element={<Navigate to="/doctor-dashboard" />}
            />
            <Route
              path="/add-doctor"
              element={<Navigate to="/doctor-dashboard" />}
            />
            <Route
              path="/doctor-list"
              element={<Navigate to="/doctor-dashboard" />}
            />
            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/doctor-dashboard" />} />
          </Routes>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
