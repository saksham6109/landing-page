import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { IoIosTrendingUp } from "react-icons/io";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 70 },
  { name: "May", value: 85 },
  { name: "Jun", value: 100 },
];

const Graph = () => {
  return (
    <div className="bg-white p-4 relative">
      {/* Header Section */}
      <div className="flex justify-between items-center text-gray-600">
        <h3 className="text-lg font-semibold">Views</h3>
        <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Left Section (Text & Button) */}
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center gap-1">
            <h2 className="text-2xl font-bold text-gray-800">7.156</h2>
            <span className="text-green-500 text-xl"><IoIosTrendingUp /></span>
          </div>
          <p className="text-sm text-green-500">+7.2%</p>
          <button className="text-sm text-blue-600 border border-blue-600 font-semibold p-1 rounded-sm mt-4">
            See More
          </button>
        </div>

        {/* Right Section (Graph) */}
        <div className="w-3/5 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="name" axisLine={{ stroke: "gray-500" }} tick={false} />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#869cfa" strokeWidth={3} fill="#ccd5fd" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
