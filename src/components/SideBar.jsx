import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdCreditScore } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { FaRegCopy } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { IoMapSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { BsMenuDown } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const menuItems = [
    { path: "/dashboard/profile", icon: <CgProfile />, text: "Profile" },
    { path: "/dashboard/dashboard", icon: <IoMdHome />, text: "Dashboard" },
    { path: "/dashboard/ecommerce", icon: <FaCartShopping />, text: "E-commerce" },
    { path: "/dashboard/user", icon: <FaRegUser />, text: "User" },
    { path: "/dashboard/documentation", icon: <IoDocumentTextSharp />, text: "Documentation" },

    { path: "heading-template", text: "TEMPLATE", isHeading: true },

    { path: "/dashboard/core", icon: <MdCreditScore />, text: "Core" },
    { path: "/dashboard/tables", icon: <LiaTableSolid />, text: "Tables" },
    { path: "/dashboard/ui-elements", icon: <FaRegCopy />, text: "UI Elements" },
    { path: "/dashboard/forms", icon: <SiGoogleforms />, text: "Forms" },
    { path: "/dashboard/charts", icon: <IoStatsChartSharp />, text: "Charts" },
    { path: "/dashboard/grid", icon: <IoGrid />, text: "Grid" },
    { path: "/dashboard/maps", icon: <IoMapSharp />, text: "Maps" },
    { path: "/dashboard/extra", icon: <CiStar />, text: "Extra" },
    { path: "/dashboard/menu-levels", icon: <BsMenuDown />, text: "Menu Levels" },

    { path: "heading-help", text: "HELP", isHeading: true },

    { path: "/dashboard/library", icon: <MdLibraryBooks />, text: "Library" },
    { path: "/dashboard/support", icon: <MdOutlineSupportAgent />, text: "Support" },
  ];

  return (
    <div className="w-full bg-white text-gray-100  z-50 h-screen overflow-y-auto relative">
      <div className={`${isOpen ? "block" : "hidden"} md:block`}>
        {menuItems.map(({ path, icon, text, isHeading }, index) => (
          <React.Fragment key={index}>
            {isHeading && <hr className="my-2 border-gray-300" />}

            {isHeading ? (
              <div className="p-3 text-gray-500 font-semibold uppercase">{text}</div>
            ) : (
              <Link to={path} className="block">
                <div
                  className={`flex items-center gap-3 p-3 cursor-pointer ${
                    location.pathname === path || (path === "/dashboard/profile" && location.pathname === "/dashboard")
                      ? "bg-blue-100 font-semibold"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`${
                      location.pathname === path || (path === "/dashboard/profile" && location.pathname === "/dashboard")
                        ? "text-blue-500"
                        : "text-gray-500"
                    }`}
                  >
                    {icon}
                  </span>
                  <span className="text-gray-600">{text}</span>
                </div>
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="absolute top-22 left-24" >
        <button className="w-fit h-fit p-1 px-2 text-white text-xs font-bold bg-[#49cc9f] rounded-full">NodeJs</button>
      </div>
      <div className="absolute top-34 left-13" >
        <button className="w-fit h-fit p-1 px-2 text-white text-xs font-bold bg-[#fd5c93] rounded-full">New</button>
      </div>
    </div>
  );
};

export default SideBar;
