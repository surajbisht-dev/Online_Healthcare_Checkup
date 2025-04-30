import React, { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import Login from "./pages/Login";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  if (aToken) {
    // Admin Logged In
    return (
      <div className="bg-[#F8F9FD]">
        <ToastContainer />
        <Navbar />
        <div className="flex items-start">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointments" element={<AllAppointments />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorsList />} />
          </Routes>
        </div>
      </div>
    );
  } else if (dToken) {
    // Doctor Logged In
    return (
      <div className="bg-[#F8F9FD]">
        <ToastContainer />
        <Navbar />
        <div className="flex items-start">
          <Sidebar />
          <Routes>
            <Route path="/" element={<DoctorDashboard />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route
              path="/doctor-appointments"
              element={<DoctorAppointment />}
            />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    // No one logged in
    return (
      <>
        <Login />
        <ToastContainer />
      </>
    );
  }
};

export default App;
