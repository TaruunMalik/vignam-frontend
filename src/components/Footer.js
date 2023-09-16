import React from "react";
import footerImg from "../assets/images/ftr-logo.png";
import { Mail, Phone } from "lucide-react";
import { MailCheck } from "lucide-react";
import locationImage from "../assets/images/location.png";
import linkedinImg from "../assets/images/linkedin.png";
import instaImg from "../assets/images/insta.png";
export default function Footer() {
  return (
    <>
      <div className="  font-[Poppins] w-full flex md:flex-row flex-col justify-between p-5 items-center bg-white md:p-24 ">
        <div className=" md:w-1/3 w-full  flex flex-col gap-3">
          <img src={footerImg} alt="Footer Image" className=" w-1/2" />
          <p className="">
            Transform your school with digital solutions provided by VIGNAM.
            Transform your school with digital solutions provided by VIGNAM.
            Transform your school with digital solutions provided by VIGNAM.
            Transform your school with digital solutions provided by VIGNAM.
          </p>
        </div>
        <div className=" flex md:flex-row flex-col w-full md:w-1/2 justify-center items-center md:p-2 md:gap-10 gap-5">
          <div className=" flex flex-col md:gap-3 mt-3 md:w-1/2 w-full  md:justify-center md:items-center  h-full ">
            <span className=" mb-2 md:ml-[-15rem] md:mt-[-3.5rem]  md:mb-5 md:text-left md:capitalize uppercase  font-semibold">
              Company
            </span>
            <ul className=" flex md:flex-col flex-row gap-2 w-full ">
              <li>About us</li>
              <li>Support</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-3 flex-grow w-full md:w-1/2  ">
            <span className=" font-semibold">Contact Us</span>
            <ul className=" flex flex-col gap-5">
              <li className=" flex items-center gap-2">
                <Phone height={20} width={20} />
                +91 9691663129
              </li>
              <li className=" flex items-center gap-2">
                <Mail height={20} width={20} />
                901.vignam@gmail.com
              </li>
              <li className=" flex items-start gap-2">
                <img src={locationImage} alt="Location" />
                28 , SSG Majesty Mall , Plot No. 2 Road No. 43, Guru Harikishan
                Marg,Pitam Pura,Delhi 10034
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-white md:px-24">
        <div className=" border-t-2 py-2 gap-2 flex md:flex-row flex-col  justify-center md:justify-between items-center">
          <div className=" flex gap-2">
            <img src={linkedinImg} />
            <img src={instaImg} />
          </div>
          <div className=" text-center text-sm">
            © 2023 Vignam . All rights reserved.
          </div>
          <span className=" text-sm">Policy Privacy</span>
        </div>
      </div>
    </>
  );
}
