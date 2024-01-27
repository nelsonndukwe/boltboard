import React from "react";
import Avater from "./Avater";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Profile = () => {
  return (
    <div className="rounded-full bg-white shadow-md cursor-pointer flex flex-row gap-2 items-center p-1">
      <Avater />

      <div className="md:flex md:flex-col hidden">
        <p className="md:text-[15px] md:font-light  ">Nelson Ndukwe</p>
        <p className="md:text-[10px] md:font-light ">nelson@gmail.com</p>
      </div>

      <MdOutlineKeyboardArrowDown size={20} className=""/>
    </div>
  );
};

export default Profile;
