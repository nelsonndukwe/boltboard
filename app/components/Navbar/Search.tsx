"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex flex-row gap-2 w-full p-4 ">
      <BiSearch size={20} />

      <input type="name" placeholder="Search..." />
    </div>
  );
};

export default Search;
