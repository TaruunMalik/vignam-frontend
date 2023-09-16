import React, { useEffect, useState } from "react";
import invertedImg from "../assets/images/inverted.png";
import circleImg from "../assets/images/circle.png";
import yellowE from "../assets/images/yellowE.png";
import greenE from "../assets/images/greenE.png";
import redE from "../assets/images/redE.png";
import purpleE from "../assets/images/purpleE.png";
import maroonE from "../assets/images/maroonE.png";
import blueE from "../assets/images/blueE.png";
export default function Reviews() {
  const [reviewData, setReviewData] = useState([]);
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5050/getReviews", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        setReviewData(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  console.log(reviewData);
  return (
    <>
      <div className=" w-full lg:h-[110%] hidden lg:block mb-2 ">
        <div className=" text-center ">
          <h2 className=" text-2xl font-extrabold tracking-tight lg:text-4xl py-8 mb-10">
            What <span className=" text-[#3174f3]">People</span> Say{" "}
            <span className=" text-[#3174f3]">About</span> Us
          </h2>
        </div>
        <div className=" w-full px-4 lg:flex hidden lg:justify-evenly lg:gap-1 mt-5 relative">
          <img
            src={yellowE}
            className="  lg:absolute lg:left-[375px] lg:top-36 "
          />
          <img
            src={greenE}
            className="  lg:absolute lg:left-[160px] lg:top-[470px] "
          />
          <img
            src={redE}
            className="  lg:absolute lg:right-[120px] lg:top-[300px] "
          />
          <img
            src={purpleE}
            className="  lg:absolute lg:right-[120px] lg:top-[220px] "
          />
          <img
            src={maroonE}
            className="  lg:absolute lg:right-[160px] lg:top-[0px] "
          />
          <img
            src={blueE}
            className="  lg:absolute lg:left-[500px] lg:top-[300px] "
          />
          <div className=" p-5 flex flex-col  gap-2 bg-white shadow-sm w-[17%] lg:absolute lg:left-40 lg:top-48">
            <img src={invertedImg} className=" w-3" />
            <p className=" text-xl">{reviewData[0]?.review}</p>
            <div className=" flex gap-4 items-center">
              <img
                src={reviewData[0]?.userPhoto}
                alt="Review"
                className="w-10 rounded-full object-cover h-10"
              />
              <p>{reviewData[0]?.username}</p>
            </div>
          </div>
          <div className=" p-5 flex flex-col  gap-2 bg-white shadow-sm w-[17%] lg:absolute lg:left-[460px] lg:top-[40px]">
            <img src={invertedImg} className=" w-3" />
            <p className=" text-xl">{reviewData[1]?.review}</p>
            <div className=" flex gap-4 items-center">
              <img
                src={reviewData[1]?.userPhoto}
                alt="Review"
                className="w-10 rounded-full object-cover h-10"
              />
              <p>{reviewData[1]?.username}</p>
            </div>
          </div>
          <div className=" p-5 flex flex-col  gap-5 bg-white shadow-sm w-[17%] lg:absolute lg:left-[760px] lg:top-[-20px]">
            <img src={invertedImg} className=" w-3" />
            <p className=" text-xl">{reviewData[2]?.review}</p>
            <div className=" flex gap-4 items-center">
              <img
                src={reviewData[2]?.userPhoto}
                alt="Review"
                className="w-10 rounded-full object-cover h-10"
              />
              <p>{reviewData[2]?.username}</p>
            </div>
          </div>
          <div className=" p-5 flex flex-col  gap-5 bg-white shadow-sm w-[17%] lg:absolute lg:left-[760px] lg:top-[320px]">
            <img src={invertedImg} className=" w-3" />
            <p className=" text-xl">{reviewData[3]?.review}</p>
            <div className=" flex gap-4 items-center">
              <img
                src={reviewData[3]?.userPhoto}
                alt="Review"
                className="w-10 rounded-full object-cover h-10"
              />
              <p>{reviewData[3]?.username}</p>
            </div>
          </div>
          <div className=" p-5 flex flex-col  gap-2 bg-white shadow-sm w-[17%] lg:absolute lg:left-[1050px] lg:top-[-60px]">
            <img src={invertedImg} className=" w-3" />
            <p className=" text-xl">{reviewData[4]?.review}</p>
            <div className=" flex gap-4 items-center">
              <img
                src={reviewData[4]?.userPhoto}
                alt="Review"
                className="w-10 rounded-full object-cover h-10"
              />
              <p>{reviewData[4]?.username}</p>
            </div>
          </div>
          <div className=" p-5 flex flex-col  gap-2 bg-white shadow-sm w-[17%] lg:absolute lg:left-[1050px] lg:top-[280px]">
            <img src={invertedImg} className=" w-3" />
            <p className=" text-xl">{reviewData[5]?.review}</p>
            <div className=" flex gap-4 items-center">
              <img
                src={reviewData[5]?.userPhoto}
                alt="Review"
                className="w-10 rounded-full object-cover h-10"
              />
              <p>{reviewData[5]?.username}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full block md:hidden">
        <div className=" text-center ">
          <h2 className=" text-3xl font-extrabold tracking-tight lg:text-4xl py-8 px-2 mb-3">
            What <span className=" text-[#3174f3]">People</span> Say{" "}
            <span className=" text-[#3174f3]">About</span> Us
          </h2>
        </div>
        <div className=" w-full flex flex-col p-5 gap-10">
          {reviewData.map((review) => (
            <div className=" p-5 flex flex-col  gap-2 rounded-md bg-white shadow-sm w-full ">
              <img src={invertedImg} className=" w-3" />
              <p className=" text-xl">{review?.review}</p>
              <div className=" flex gap-4 items-center">
                <img
                  src={review?.userPhoto}
                  alt="Review"
                  className="w-10 rounded-full object-cover h-10"
                />
                <p>{review?.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
