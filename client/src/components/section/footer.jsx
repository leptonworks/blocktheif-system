import React from "react";
import logo from "../../../images/landingPageLogo.png";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col p-6 bg-gradient-to-r from-[#0c2b4e] to-[#04141f] text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center my-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="landingPageLogo" className="w-8 mr-2" />
            <p className="font-bold text-xl">BLOCK THIEF</p>
          </div>

          <button
            id="to-top-button"
            onClick={goToTop}
            title="Go To Top"
            className="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold"
          >
            &uarr;
          </button>

          <div className="flex justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full md:w-auto">
            <a
              href="/scanqr"
              className="text-base text-center mx-2 cursor-pointer"
            >
              ScanQR
            </a>
            <a
              href="/manufacturer"
              className="text-base text-center mx-2 cursor-pointer"
            >
              Manufacturer
            </a>
            <a
              href="/reviews"
              className="text-base text-center mx-2 cursor-pointer"
            >
              Reviews
            </a>
            <a
              href="/aboutus"
              className="text-base text-center mx-2 cursor-pointer"
            >
              About Us
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
          <p className="text-center">
            Discover the unexpected potential of security and authenticity with
            our blockchain-based product authentication system.
          </p>
          <p className="font-medium mt-2">leptonworks@gmail.com</p>
        </div>

        <div className="w-full h-px bg-gray-400 mt-5 opacity-60" />

        <div className="w-full flex justify-between items-center mt-3">
          <p className="text-xs">@BlockThief2022</p>
          <p className="text-xs">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
