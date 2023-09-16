import React from "react";
import { useState } from "react";
import PhoneIcon from "../assets/images/callicon.png";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Book,
  CircleDollarSign,
  Menu,
  Sparkle,
  ThumbsUp,
  X,
} from "lucide-react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="fixed top-0 z-20 w-full h-20 flex justify-around items-center bg-[#F6F6FF] shadow-xl ">
      <div className=" w-[85%] flex justify-between items-center">
        <h2 className=" tracking-wider uppercase text-2xl font-bold text-[#3174F3]">
          Vignam
        </h2>
        <section className=" flex items-center">
          <ul className="lg:flex items-center gap-10 hidden font-bold">
            <li className=" capitalize">our solutions</li>
            <li className=" capitalize">why vignam?</li>
            <li className=" capitalize">Pricing</li>
            <li className=" capitalize">blog</li>
          </ul>
          <section className=" flex items-center ml-10 gap-5">
            <button
              onClick={handleOpen}
              className=" ml-2 p-1 md:p-2 px-4 bg-[#3174F3] rounded text-white hover:text-[#3174f3] hover:bg-white transition"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileSidebar(!mobileSidebar)}
              className=" md:hidden block"
            >
              <Menu />
            </button>
            <a href="tel:+919650488030">
              <button className=" hidden ml-2 p-1 px-4 border border-[#3174F3] rounded md:flex justify-center items-center hover:bg-white hover:text-[#3174f3] transition">
                <img src={PhoneIcon} className=" mr-2" />
                <p className=" flex flex-col text-[10px]">
                  <span>+91 9650488030</span>
                  <span>Call to know More!</span>
                </p>
              </button>
            </a>
            {!mobileSidebar && (
              <div className="bg-black/80 fixed w-full h-screen z-5 top-0 left-0"></div>
            )}
            {!mobileSidebar && (
              <section
                className={
                  !mobileSidebar
                    ? "fixed flex flex-col font-bold items-center justify-start gap-14 top-0 right-0 w-[320px] h-screen bg-white z-10 transition duration-300"
                    : "fixed flex flex-col font-bold items-center justify-start gap-14 top-0 right-[-100%] w-[300px] h-screen bg-white transition z-10 duration-300"
                }
              >
                <h2 className=" mt-20 flex items-center flex-row gap-4 tracking-wider uppercase text-2xl font-bold text-[#3174F3]">
                  Vignam
                  <button
                    onClick={() => setMobileSidebar(!mobileSidebar)}
                    className="  block text-black"
                  >
                    <X />
                  </button>
                </h2>
                <span className=" capitalize flex items-center gap-2">
                  <Sparkle /> our solutions
                </span>
                <span className=" capitalize flex items-center gap-2 ">
                  <ThumbsUp />
                  why vignam?
                </span>
                <span className=" capitalize flex items-center gap-2">
                  <CircleDollarSign /> Pricing
                </span>
                <span className=" capitalize flex items-center gap-2">
                  <Book />
                  blog
                </span>
                <a href="tel:+919650488030">
                  <button className="  ml-2 p-1 px-4 border border-[#3174F3] rounded flex justify-center items-center hover:bg-white hover:text-[#3174f3] transition">
                    <img src={PhoneIcon} className=" mr-2" />
                    <p className=" flex flex-col text-[10px]">
                      <span>+91 9650488030</span>
                      <span>Call to know More!</span>
                    </p>
                  </button>
                </a>
              </section>
            )}
          </section>
        </section>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Get Started With Vignam
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Give a boost to your Studies!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
