import React, { useEffect, useState } from "react";
import megaPhone from "../assets/images/mic.png";
import devPhoto from "../assets/images/dev.png";
import timePhoto from "../assets/images/care.png";
import "../assets/css/Information.css";
export default function Information() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const isInViewport = () => {
    const element = document.querySelector(".info-cont");
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    if (!animationPlayed && isInViewport()) {
      setAnimationPlayed(true);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationPlayed]);

  return (
    <div className=" w-full md:h-4/5 ">
      <div className=" text-center ">
        <h2 className=" text-2xl font-extrabold tracking-tight lg:text-4xl py-8">
          Get the <span className=" text-[#3174f3]">VIGNAM</span> Edge <br />{" "}
          Elevate Teaching and Inspire Minds
        </h2>
      </div>
      <div className=" w-full flex md:flex-row flex-col p-5 justify-center gap-7 mt-7 items-center">
        <div
          className={`info-cont ${
            animationPlayed ? "animate-blur-to-clear " : ""
          } md:w-1/4 w-full justify-center items-center md:items-stretch p-7 flex flex-col gap-4 rounded-xl bg-white shadow-sm  hover:bg-[#3174f3] hover:text-white transition`}
        >
          <img
            src={megaPhone}
            className=" bg-[#D4E2FD] object-cover w-14 md:w-[20%] rounded-full p-2 mb-4"
          />
          <h2 className=" font-extrabold text-xl text-center md:text-left">
            Power Up Your Brand
          </h2>
          <p className="text-left text-lg">
            Establish a strong presence of your institute and attract more
            students and parents with our tailored solutions and effective
            marketing.
          </p>
        </div>

        <div
          className={`info-cont ${
            animationPlayed ? "animate-blur-to-clear" : ""
          } md:w-1/4 w-full justify-center items-center md:items-stretch p-7 flex flex-col gap-4 rounded-xl bg-white shadow-sm  hover:bg-[#3174f3] hover:text-white transition`}
        >
          <img
            src={devPhoto}
            className=" bg-[#D4FFE0] object-cover w-14 md:w-[20%] rounded-3xl p-2 mb-4"
          />
          <h2 className=" font-extrabold text-xl">Modernise Teaching</h2>
          <p className="text-left text-lg">
            Empower educators with 3D interactive content, AI-based testing, and
            hands-on activity boxes for experiential learning experiences.
          </p>
        </div>

        <div
          className={`info-cont ${
            animationPlayed ? "animate-blur-to-clear" : ""
          } md:w-1/4 w-full justify-center items-center md:items-stretch p-7 flex flex-col gap-4 rounded-xl bg-white shadow-sm  hover:bg-[#3174f3] hover:text-white transition`}
        >
          <img
            src={timePhoto}
            // className=" bg-[#FF00004A] object-cover w-[20%] rounded-full p-2 mb-4"
            className=" bg-[#FF00004A] object-cover w-14 md:w-[20%] rounded-full p-2 mb-4"
          />
          <h2 className=" font-extrabold text-xl">Save Teacher's Time</h2>
          <p className="text-left text-lg">
            Vignam provide teachers lesson plans, automated test creation, and
            result analysis allowing teachers to allocate more time on students
          </p>
        </div>
      </div>
      <div className=" flex w-full justify-center mt-10">
        <button className="p-2 px-10 bg-[#3174F3] rounded-lg font-bold text-white">
          Get Free Demo
        </button>
      </div>
    </div>
  );
}
