import React from "react";
import Pages from "../Pages";
import Intro from "../Intro";
import Files from "../Files";
import Media from "../Media";
import Projects from "../Projects";
import Tasks from "../Tasks";
import Calendar from "../Calendar";
import StarterKits from "../StarterKits";
import Graph from "../Graph";
import { IoSettingsOutline } from "react-icons/io5";

const Profile = () => {
  const loggedInUser = localStorage.getItem("username") || "Guest";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-13 gap-4 bg-[#f5f5ff] min-h-full overflow-y-auto overflow-x-hidden relative">
      <div className="col-span-1 sm:col-span-13">
        <Pages />
      </div>
      <div className="col-span-1 sm:col-span-6">
        <Intro username={loggedInUser} />
      </div>
      <div className="col-span-1 sm:col-span-7">
        <Files />
      </div>
      <div className="col-span-1 sm:col-span-3 h-[260px] overflow-hidden flex-shrink-0">
        <Media />
      </div>
      <div className="col-span-1 sm:col-span-3 h-[260px] min-h-[260px] overflow-hidden flex-shrink-0">
        <Projects />
      </div>
      <div className="col-span-1 sm:col-span-4 row-span-2 flex flex-col h-[480px] overflow-y-auto">
        <Tasks />
      </div>
      <div className="col-span-1 sm:col-span-3 h-[260px] overflow-hidden flex-shrink-0">
        <Calendar />
      </div>
      <div className="col-span-1 sm:hidden">
        <Graph />
      </div>

      <div className="col-span-1 sm:col-span-6">
        <StarterKits />
      </div>
      <div className="col-span-1 sm:col-span-3 h-[200px] overflow-hidden flex-shrink-0 hidden sm:block">
        <Graph />
      </div>

      <div className="md:absolute md:top-8 md:left-293 hidden sm:block">
        <button className="w-fit h-fit p-2 px-3 pr-5 text-white text-lg font-bold bg-[#5172f9] rounded-full">
          <IoSettingsOutline />
        </button>
      </div>
    </div>
  );
};

export default Profile;
