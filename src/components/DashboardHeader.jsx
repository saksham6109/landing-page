import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom"; 

const DashboardHeader = ({ toggleSidebar, username }) => {
  const navigate = useNavigate(); 

  return (
    <div className="w-full max-w-full bg-[#5272f9] text-white flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-50">
      <div className="flex items-center gap-4 sm:gap-7">
        <button onClick={toggleSidebar} className="md:hidden mt-2 focus:outline-none">
          <GiHamburgerMenu className="text-2xl text-white" />
        </button>
        <IoMdArrowBack 
          className="text-lg sm:text-xl cursor-pointer" 
          onClick={() => navigate(-1)} 
        />
        <p className="text-sm sm:text-base truncate">React Material Admin Full</p>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <img 
          className="rounded-full object-cover h-8 w-8" 
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
          alt="Profile" 
        />
        <p className="text-sm whitespace-nowrap">Hi, {username}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
