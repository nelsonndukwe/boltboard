import { Search } from "lucide-react";
import Image from "next/image";
import Profile from "./components/Navbar/Profile";
import { GoBell } from "react-icons/go";
import DateTime from "./components/Navbar/Date";
import Trends from "./components/Trends/Trends";
import Metrics from "./components/Metrics/Metrics";
import Orders from "./components/Navbar/Orders/Orders";
import Platform from "./components/Platform/Platform";

export default function Home() {
  return (
    <div className="fixed top-0 md:left-[5vw] left-[15vw] h-[78px] w-[95%] flex border-b-[1px] shadow-sm  flex-col bg-[#FAFAFA]">
      <div className="flex flex-row justify-between items-center pt-4 ml-3 ">
        <div className="md:text-lg font-semibold text-sm text-[1rem] line-clamp-3">Dashboard</div>

        <div className="flex items-center md:gap-8 gap-3 justify-evenly mr-14 md:mr-[4rem] ">
          <Search />
          <DateTime />

          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white shadow-md ">
            <GoBell size={20} />
          </div>

          <Profile />
        </div>
      </div>

      <div className="md:flex flex-col mt-[3rem] md:px-5 pr-11 gap-6">
      <div className="grid md:grid-cols-7 gap-5 grid-cols-1 ">
          <div className="col-span-4 rounded-md shadow-sm">
            <Trends/>
          </div>
          <div className="col-span-3 rounded-md shadow-sm ">
            <Metrics />
          </div>
        </div>
       


        <div className="grid md:grid-cols-7 gap-5 grid-cols-1 ">
          <div className="col-span-4 rounded-md shadow-sm">
            <Orders/>
          </div>
          <div className="col-span-3 rounded-md shadow-sm ">
            <Platform />
          </div>
        </div>
      </div>
    </div>
  );
}
