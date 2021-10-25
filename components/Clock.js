import React from "react";
import Source from "../assets/clock.svg";
import Image from "next/image";

const Clock = () => {
  return (
    <div>
      <Image className="w-10" src={Source} alt="Clock icon" />
    </div>
  );
};
export default Clock;
