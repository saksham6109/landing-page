import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "New", value: 400 },
  { name: "In Progress", value: 300 },
  { name: "Completed", value: 300 },
  { name: "Cancel", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Projects = () => {
  return (
    <div className="bg-white p-3 ">
      <div className="flex flex-col items-center space-y-1">
      
      <h2 className="text-lg text-gray-500 font-semibold self-start">Projects</h2>

      <div className="relative flex justify-center items-center w-[100px] h-[120px]">
        <PieChart width={110} height={140}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30} 
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute flex items-center justify-center">
          <p className="text-xs font-bold text-gray-700">121</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 mx-1 gap-y-3 text-xs ">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center space-x-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="text-gray-700">{entry.name}</span>
          </div>
        ))}
      </div>
      <button className=" mr-4 mb-1 px-3 py-1 text-blue-600 font-normal border border-blue-600 rounded-sm text-xs hover:bg-blue-700 hover:text-white transition self-end">
        DETAILS
      </button>
    </div>
    </div>
  );
};

export default Projects;
