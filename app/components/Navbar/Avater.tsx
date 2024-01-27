import React from "react";
import Image from "next/image";

const Avater = () => {
  return (
    <Image
      className="rounded-full"
      height="35"
      width="35"
      alt="avater"
      src="/images/placeholder.png"
    />
  );
};

export default Avater;
