import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserCrud from "../components/UserCrud";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Nexera User Management
        </h2>
        <UserCrud />
      </div>
    </div>
  );
};

export default Dashboard;
