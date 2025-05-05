import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";



const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const loggedInUser = localStorage.getItem("username") || "Guest";

  return (
    <div className="h-full bg-[#f5f5ff] flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <DashboardHeader username={loggedInUser} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      <div className="flex flex-grow pt-[50px]">
        <div
          className={`fixed top-[57px] left-0 h-[calc(100vh-60px)] w-[60%] sm:w-[40%] md:w-[13%] overflow-y-auto bg-white shadow-md transform transition-transform z-50 ${
            isSidebarOpen ? " translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <SideBar />
        </div>
        <div className="md:ml-[13%] flex-grow p-4 " onClick={() => setIsSidebarOpen(false)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
