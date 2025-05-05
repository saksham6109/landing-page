import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiShadowFollower } from "react-icons/gi";
import { SlUserFollow } from "react-icons/sl";

const Media = () => {
  return (
    <div className="bg-white p-3 ">
      <p className="text-gray-500 text-lg font-semibold ">Media</p>
      
      <div className="grid grid-cols-2 md:grid-flow-col md:grid-rows-2 gap-6 mt-2 mb-2 ">
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="rounded-full bg-green-200 text-green-500 p-2">
            <MdOutlinePostAdd className="text-xl " />
          </span>
          <p className="text-sm md:text-base">194</p>
          <p className="text-gray-500 text-xs ">Posts</p>
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <span className="rounded-full bg-blue-200 text-blue-900 p-2">
            <GiShadowFollower className="text-xl" />
          </span>
          <p className="text-sm md:text-base">12.8k</p>
          <p className="text-gray-500 text-xs ">Followers</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="rounded-full bg-pink-200 text-pink-500 p-2">
            <GrProjects className="text-xl" />
          </span>
          <p className="text-sm md:text-base">554</p>
          <p className="text-gray-500 text-xs ">Projects</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="rounded-full bg-yellow-200 text-yellow-500 p-2">
            <SlUserFollow className="text-xl" />
          </span>
          <p className="text-sm md:text-base">1.1k</p>
          <p className="text-gray-500 text-xs ">Following</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
