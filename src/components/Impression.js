import React from "react";
import LandingImg from "../assets/images/landing.png";
import frameImg from "../assets/images/FrameIR.png";
import LandingGif from "../assets/images/gif.gif";
import "../assets/css/Impression.css";
export default function Impression() {
  return (
    <div className=" mb-5 w-full md:h-[75%] md:flex md:flex-row justify-centerflex-col md:justify-evenly px-10 md:px-20 items-center gap-12 mt-5 ">
      <div className=" mt-24 flex flex-col md:p-5  impression-cont w-full  gap-10">
        <h2 className=" capitalize text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="relative ">
            Empowering Teachers,
            <p className=" absolute bg-yellow-300  md:w-full md:h-2 z-[-1] rounded-lg bottom-2 "></p>
          </span>
          <br />
          Inspiring Students
        </h2>
        <p className=" text-2xl text-slate-500">
          Elevate Education, Inspire Growth, Ignite Success: <br /> Vignam
          Transforms Learning.
        </p>
        <button className="md:py-3 p-2 md:px-4 bg-[#3174F3] md:w-[28%] w-1/2 shadow rounded-md text-white hover:text-[#3174f3] hover:bg-white transition">
          Get Started
        </button>
        <img src={frameImg} className=" md:w-1/2 w-full " />
      </div>
      <div className=" mt-24 flex w-full justify-center impression-img items-end  ">
        <img src={LandingGif} className=" md:w-[90%] w-full object-cover " />
      </div>
    </div>
  );
}
