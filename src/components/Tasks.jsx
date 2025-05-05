import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

const tasksData = {
  today: [
    { time: "09:00", color: "#FF5733", task: "Call conference with a new" },
    { time: "11:30", color: "#33A1FF", task: "Presentation demo Ecological" },
    { time: "03:00", color: "pink", task: "Call with pr manager" },
    { time: "04:00", color: "yellow", task: "Interview UI/UX" },
    { time: "05:00", color: "#28A845", task: "Call a conference" },
    { time: "09:00", color: "red", task: "Client call" },
    { time: "03:00", color: "pink", task: "Call with Client" },
    { time: "02:00", color: "yellow", task: "Interview " },
    { time: "01:00", color: "#28A845", task: "Call conference" },
    { time: "04:00", color: "yellow", task: "Interview UI/UX" },
    { time: "09:00", color: "red", task: "Client call" },
    { time: "04:00", color: "yellow", task: "Interview UI/UX" },
    { time: "05:00", color: "#28A845", task: "Call a conference" },
    { time: "09:00", color: "red", task: "Client call" },
    { time: "03:00", color: "pink", task: "Call with Client" },
    { time: "02:00", color: "yellow", task: "Interview " },
    { time: "01:00", color: "#28A845", task: "Call conference" },
  ],
  week: [
    { time: "Mon", color: "#FF5733", task: "Project Planning" },
    { time: "Wed", color: "#33A1FF", task: "Design Review" },
    { time: "Fri", color: "#28A745", task: "Deployment" },
    { time: "Wed", color: "#33A1FF", task: "Design" },
    { time: "Fri", color: "#28A745", task: "Deployment" },
    { time: "Mon", color: "#FF5733", task: "Project Review" },
    { time: "Mon", color: "#FF5733", task: "Project Planning" },
    { time: "Wed", color: "#33A1FF", task: "Design Review" },
    { time: "Fri", color: "#28A745", task: "Deployment" },
    { time: "Wed", color: "#33A1FF", task: "Design" },
    { time: "Fri", color: "#28A745", task: "Deployment" },
    { time: "Mon", color: "#FF5733", task: "Project Review" },
    { time: "Mon", color: "#FF5733", task: "Project Planning" },
    { time: "Wed", color: "#33A1FF", task: "Design Review" },
    { time: "Fri", color: "#28A745", task: "Deployment" },
  ],
  month: [
    { time: "Week 1", color: "#FF5733", task: "Research" },
    { time: "Week 2", color: "#33A1FF", task: "Prototype" },
    { time: "Week 3", color: "#28A745", task: "Testing" },
    { time: "Week 4", color: "#FF5733", task: "Strategy" },
    { time: "Week 5", color: "#33A1FF", task: "Development" },
    { time: "Week 6", color: "#28A745", task: "Feedback" },
    { time: "Week 3", color: "#28A745", task: "Testing" },
    { time: "Week 4", color: "#FF5733", task: "Strategy" },
    { time: "Week 5", color: "#33A1FF", task: "Development" },
    { time: "Week 4", color: "#FF5733", task: "Strategy" },
    { time: "Week 5", color: "#33A1FF", task: "Development" },
    { time: "Week 6", color: "#28A745", task: "Feedback" },
    { time: "Week 3", color: "#28A745", task: "Testing" },
    { time: "Week 4", color: "#FF5733", task: "Strategy" },
    { time: "Week 5", color: "#33A1FF", task: "Development" },
  ],
};

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="w-full bg-white p-3 rounded-md shadow-sm">
      <h2 className="text-gray-600 text-lg font-semibold mb-2">Tasks</h2>
      <div className="flex border-b border-gray-300 mb-3 ">
        {["today", "week", "month"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-gray-600 font-medium focus:outline-none relative ${
              activeTab === tab ? "text-gray-800 font-bold" : ""
            }`}
          >
            {tab === "today" ? "Today" : tab === "week" ? "This Week" : "This month"}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-pink-500 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
      <div className="divide-y divide-gray-200">
        {tasksData[activeTab].map((task, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <span className="text-xs text-gray-500 w-15">{task.time}</span>
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: task.color }}
            ></span>
            <span className="text-gray-600 font-semibold text-sm flex-grow pl-1">{task.task}</span>
            <MoreVertical className="text-gray-400 cursor-pointer" size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
