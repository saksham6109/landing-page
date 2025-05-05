import React, { useState } from "react";
import { BiFolder, BiImage, BiLock } from "react-icons/bi";
import { BsEye } from "react-icons/bs"; 

const allCategories = [
  { name: "UI/UX", iconColor: "bg-[#5a79f9]", color: "bg-[#a7b5f9]", icon: <BiFolder size={18} /> },
  { name: "Design", iconColor: "bg-[#ed2a70]", color: "bg-[#ed578f]", icon: <BsEye size={18} /> },
  { name: "Mobile", iconColor: "bg-[#3fcb9b]", color: "bg-[#6edeb8]", icon: <BiImage size={18} /> },
  { name: "Illustration", iconColor: "bg-[#fe982f]", color: "bg-[#f9c777]", icon: <BiLock size={18} /> },
];

const fileCounts = {
  Work: [178, 154, 98, 154],
  Private: [120, 100, 75, 50],
  Social: [60, 40, 90, 30],
};

const Files = () => {
  const [activeTab, setActiveTab] = useState("Work");

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white ">
      <div className="text-gray-400 font-bold text-xl">Files</div>
      
      <div className="flex space-x-8 border-b pl-5 pt-4 overflow-x-auto">
        {["Work", "Private", "Social"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[16px] font-bold whitespace-nowrap ${
              activeTab === tab ? "text-gray-500 text-lg font-extrabold border-b-2 border-pink-500" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-7 mb-4">
        {allCategories.map((category, index) => (
          <div
            key={category.name}
            className={`relative ${category.color} text-white text-xs p-4 rounded-lg flex flex-col justify-between shadow-lg`}
            style={{ height: "80px", width: "115px", minWidth: "90px" }}
          >
            <div className={`absolute -top-1 left-0 w-10 h-6 ${category.color} rounded-t-md`}></div>
          
            <div className="flex flex-col justify-center gap-2 items-center text-xs font-light">
              <span className={`self-end w-5 h-5 p-1 flex items-center justify-center rounded-full ${category.iconColor}`}>
                {category.icon}
              </span>

              <div className="self-start">
                <h3 className="text-[10px] font-bold">{category.name}</h3>
                <p className="text-[7px]">{fileCounts[activeTab][index]} files</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
