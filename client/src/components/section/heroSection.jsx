import React, { useState, useEffect } from "react";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
// import { Loader } from "./";
import ReadMore from "../buttons/readMore";
// import landingPageLogo from "../../../images/landingPageLogo.png";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollY / maxScroll) * 100;
    setScrollProgress(progress);

    if (scrollY > 100) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="nav-spacing bg-gradient-to-br from-[#04141f] to-[#0c2b4e]">
      <section className="h-screen grid md:grid-cols-2">
        <div className="mx-auto container relative z-0 px-4 xl:px-0 flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl lg:text-2xl xl:text-5xl font-black text-green-400 tracking-tighter f-f-i leading-tight text-heading-color">
              Secure Your Products With Block Theif
            </h1>
            <div className="mx-auto md:mx-0 md:w-8/12">
              <h2 className="py-4 md:py-8 text-white text-lg lg:text-2xl text-center text-cyan-500">
                Eliminate counterfeit products with our advanced
                blockchain-based authentication system. Our tamper-proof and
                easily verifiable solution ensures product authenticity. Protect
                your brand, build consumer trust and secure your supply chain
                with us
              </h2>
              <div className="w-full flex justify-center md:block">
                <div className="text-center md:text-right">
                  <div style={{ display: "inline-block" }}>
                    <ReadMore />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <img
            src="./images/landingPageLogo.png"
            alt="Your logo"
            className="absolute object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-300">
        <div
          className="bg-green-400 h-1"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      {showToTopButton && (
        <div className="fixed bottom-10 right-10 z-50">
          <div style={{ marginBottom: "10px" }}>
            <button
              onClick={goToTop}
              title="Go to top"
              className="bg-white rounded-full w-14 h-14 flex items-center justify-center border-none text-4xl font-bold text-gray-600 shadow-lg hover:shadow-xl focus:outline-none relative"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
          <div
            className="bg-gray-400 h-1 relative"
            style={{ height: "1px", marginBottom: "10px" }}
          >
            <div
              className="bg-green-500 h-1 rounded-full absolute left-0 top-0"
              style={{ width: `${scrollProgress}%`, borderRadius: "9999px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
