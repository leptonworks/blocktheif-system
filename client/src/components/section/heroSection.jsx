import React, { useState, useEffect } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
import ReadMore from "../buttons/readMore";
import landingPageLogo from "../../../images/landingPageLogo.png";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {

  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  {showToTopButton && (
    <button
      id="to-top-button"
      onClick={goToTop}
      title="Go To Top"
      className="fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold"
    >
      &uarr;
    </button>
  )}

  

  return (
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gradient-to-br from-gray-800 to-green-900 flex items-center justify-center">
        <img
          src={landingPageLogo}
          className="animate-spin-slow"
          alt="Landing Page Logo"
        />
      </div>
      <div className="col-span-1 w-full h-full text-center bg-[#141414] py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex-col md:mr-10">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                Secure Your Products <br /> With Block Thief
              </h1>
              <div className="flex items-center justify-center">
                <p className="mt-5 text-white font-light md:w-9/12 w-full text-base">
                  "Eliminate counterfeit products with our advanced
                  blockchain-based authentication system. Our tamper-proof and
                  easily verifiable solution ensures product authenticity.
                  Protect your brand, build consumer trust and secure your
                  supply chain with us."
                </p>
              </div>
              <div className="flex items-center justify-center">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToTopButton && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold"
        >
          &uarr;
        </button>
      )}
    </section>
  );
};

export default Welcome;