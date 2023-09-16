import React from "react";
import partnerPhoto from "../assets/images/partners.png";
import "../assets/css/Partners.css";
import NumberComp from "./NumberComp";
import { useEffect, useState } from "react";

export default function Partners() {
  const [partnerData, setPartnerData] = useState([]);
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5050/getPartners", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        setPartnerData(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <div className=" w-full md:h-[80%] mb-5">
      <div className=" text-center ">
        <h2 className=" text-2xl font-extrabold tracking-tight lg:text-4xl py-8">
          Our <span className=" text-[#3174f3]">Partners</span>
        </h2>
      </div>
      <div className="marquee ml-8 mr-8 md:ml-[6rem] md:mr-[6rem]">
        <ul className="marquee__content">
          {partnerData.map((partner) => (
            <div
              className=" p-2 flex flex-col items-center m-3 gap-3"
              key={partner.id}
            >
              <img
                src={partner.schoolPhoto}
                className=" w-36 object-cover h-36 rounded-full"
              />
              <span className=" font-bold text-center">
                {partner.schoolName}
              </span>
            </div>
          ))}
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          {partnerData.map((partner) => (
            <div
              className=" p-2 flex flex-col items-center m-3  gap-3"
              key={partner.id}
            >
              <img
                src={partner.schoolPhoto}
                className=" w-36 object-cover h-36 rounded-full"
              />
              <span className=" font-bold">{partner.schoolName}</span>
            </div>
          ))}
        </ul>
      </div>
      <div className=" w-full flex md:flex-row partner-stats flex-col justify-center md:gap-0 gap-4 items-center mt-20">
        <div className=" shadow-sm bg-white flex flex-col items-center gap-1 w-[320px] py-8 rounded-xl  md:border-r-2  md:border-r-slate-200">
          <span className=" font-extrabold text-2xl flex text-[#524AE5]">
            <NumberComp num={1400} />+
          </span>
          <span className=" font-bold">Registered Institutes</span>
        </div>
        <div className="  shadow-sm bg-white flex flex-col items-center gap-1 w-[320px] py-8  rounded-xl  md:border-r-2  md:border-r-slate-200">
          <span className=" font-extrabold flex text-2xl text-[#E82B2B]">
            <NumberComp num={300} />+
          </span>
          <span className=" font-bold">No. of Users</span>
        </div>
        <div className="  shadow-sm bg-white flex flex-col items-center w-[320px] py-8  gap-1 rounded-xl   md:border-r-2  md:border-r-slate-200">
          <span className=" font-extrabold text-2xl flex text-[#1ABA16]">
            <NumberComp num={2} />X
          </span>
          <span className=" font-bold">Saves your time</span>
        </div>
        <div className="  shadow-sm bg-white flex flex-col items-center gap-1 w-[320px] py-8 rounded-xl  ">
          <span className=" font-extrabold text-2xl flex text-[#D296FA]">
            <NumberComp num={70} />+
          </span>
          <span className=" font-bold">No. of Simulations</span>
        </div>
      </div>
    </div>
  );
}
