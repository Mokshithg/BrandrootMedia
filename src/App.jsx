import React, { useState } from "react";
import FirstSection from "./sections/FirstSection";
import Portfolio from "./sections/Portfolio";
import Results from "./sections/Results";
import Faq from "./sections/Faq";
import Services from "./sections/Services";
import ContactPage from "./sections/ContactPage";
import ContactPage2 from "./sections/ContactPage2";
import Footer from "./sections/Footer";
import ham from "./assets/burger-bar.png";
import useScreenSize from "./utils/screenSize";
import Blogs from "./sections/Blogs";
import Clients from "./sections/Clients";

export default function App() {
  const screenSize = useScreenSize();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="md:mx-40 mx-4 my-6 mt-0 font-kanit text-white">
      <nav className="flex w-full justify-between items-center">
        <img
          src="https://ik.imagekit.io/7saglhzb5/Brandroot%20media.png?updatedAt=1716214538239"
          alt="GrowthRocketLogo"
          className="h-14 w-14"
        />
        {screenSize !== "small" ? (
          <div className="flex justify-between gap-8 text-[22px] items-center">
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        ) : (
          <div onClick={() => setShowMenu(!showMenu)}>
            <img className="h-8" src={ham} alt="" />
          </div>
        )}
      </nav>
      {showMenu ? (
        <div className="absolute backdrop-blur-md w-full text-left h-full top-0 flex right-0 flex-col text-2xl text-yellow-600 gap-5 justify-start px-5">
          <img
            onClick={() => setShowMenu(!showMenu)}
            src={ham}
            className="h-8 ml-[300px] mt-5 w-10 "
            alt=""
          />
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          
            {/* <a href="#services">Services</a>
            <a href="#clientwords">Client’s Words</a>
            <a href="#clientgrowth">Clients Growth</a>
            <a href="#blogs">Blogs</a>
            <a href="#contactus">Contact Us</a> */}
        </div>
      ) : null}

      <FirstSection />
      <Portfolio />
      <Services/>
      <Clients/>
      <Results />
      <Faq />
      <Blogs/>
      <ContactPage />
      <ContactPage2 />
      <Footer />
    </div>
  );
}
