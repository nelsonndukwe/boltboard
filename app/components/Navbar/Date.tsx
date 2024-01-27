"use client";
import React from "react";
import { CgCalendarDates } from "react-icons/cg";

const DateTime = () => {
  const date = new Date();

  return (
    <div className="hidden md:flex md:flex-row gap-2 items-center">
      <div className="">
        <CgCalendarDates size={20} />
      </div>

      <div className=" md:font-light md:text-sm">{`January, ${date.getDate()}th, ${date.getFullYear()}`}</div>
    </div>
  );
};

export default DateTime;
