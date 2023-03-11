import React, { useContext } from "react";
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
  return (
    <section className="h-screen grid md:grid-cols-2">
      {/* <div className="w-full h-full bg-gray-300 text-center md:h-screen display-flex flex-center items-center">
        <img src={landingPageLogo} alt="logo" className="w-1/2" />
      </div> */}
      <div className="bg-gray-300 flex items-center justify-center ">
        <img src={landingPageLogo}/>
      </div>
      {/* <div className="w-full h-full bg-black text-center md:h-screen"> */}
      <div className="col-span-1 w-full h-full text-center bg-[#1E1E1E] py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex-col md:mr-10">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                Block Thief <br /> Secure Your Products
              </h1>
              <div className = "flex items-center justify-center">
              <p className="mt-5 text-white font-light md:w-9/12 w-full text-base">
                "Eliminate counterfeit products with our advanced
                blockchain-based authentication system. Our tamper-proof and
                easily verifiable solution ensures product authenticity. Protect
                your brand, build consumer trust and secure your supply chain
                with us."
              </p>
              </div>
              <div className = "flex items-center justify-center">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
