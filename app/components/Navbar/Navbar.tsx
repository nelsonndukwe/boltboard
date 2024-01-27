import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[100vh] bg-white md:w-[5vw] w-[15vw] pt-2">
      <div className="flex flex-col mb-4 items-center justify-between bg-[#FAFAFA] h-[95%]">
        <div className=" flex flex-col items-center gap-4">
          <div className="pt-[15px]">
            <Image alt="logo" width="40" height="40" src="/images/logo.png" />
          </div>

          <div className="flex gap-3 flex-col items-center">
            <Image
              alt="logo"
              width="55"
              height="55"
              src="/images/component8.png"
            />
            <Image
              alt="logo"
              width="70"
              height="70"
              src="/images/component10.png"
            />{" "}
            <Image
              alt="logo"
              width="70"
              height="70"
              src="/images/component9.png"
            />
            <Image
              alt="logo"
              width="70"
              height="70"
              src="/images/component13.png"
            />{" "}
            <Image
              alt="logo"
              width="70"
              height="70"
              src="/images/component11.png"
            />{" "}
            <Image
              alt="logo"
              width="70"
              height="70"
              src="/images/component12.png"
            />{" "}
            <div className="bg-white p-1 rounded-full shadow-md flex gap-2 flex-col  ">
              <Image
                alt="logo"
                width="20"
                height="20"
                src="/images/light.png"
              />
              <Image alt="logo" width="20" height="20" src="/images/moon.png" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col gap-5">
          <Image
            alt="logo"
            width="20"
            height="20"
            src="/images/arrow-right.png"
          />{" "}
          <Image
            alt="logo"
            width="20"
            height="20"
            src="/images/setting-2.png"
          />{" "}
          <Image
            alt="logo"
            width="20"
            height="20"
            src="/images/logout.png"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
