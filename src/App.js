import React from "react";
import Navbar from "./components/Navbar";
import Impression from "./components/Impression";
import Information from "./components/Information";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import StringMain from "./components/StringMain";

export default function App() {
  return (
    <div className=" h-screen w-full">
      <Navbar />
      <Impression />
      <StringMain />
      <Information />
      <Partners />
      <Reviews />
      <Footer />
    </div>
  );
}
