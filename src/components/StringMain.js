import React from "react";
import stringImg from "../assets/images/stringImg2.png";
import sunImg from "../assets/images/sunImg.png";
import earthImg from "../assets/images/earthImg.png";
import satelliteImg from "../assets/images/satelliteImg.png";
export default function StringMain() {
  return (
    <div className="relative md:block hidden z-[-1] ">
      <img
        alt="String Image"
        src={stringImg}
        className="absolute object-contain w-full"
      />
      <img alt="Sun Image" src={sunImg} className=" absolute top-0 left-12" />
      <img
        alt="Sun Image"
        src={earthImg}
        className=" absolute top-[950px] right-10"
      />
      <img
        alt="Satellite Image"
        src={satelliteImg}
        className=" absolute top-[1700px] left-5"
      />
    </div>
  );
}
