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
    <section>
      <div className="w-screen h-screen grid grid-rows-2 text-white text-4xl md:grid-cols-2">
        <div className=" w-full h-full bg-[#D9D9D9] centered md:h-screen">
          <p>Page 1</p>
          <div className="w-full ">
            <img src={landingPageLogo} alt="logo" />
          </div>
        </div>

        {/* page 2 */}
        <div className="w-full h-full bg-[#141414] centered md:h-screen">
          <p>Page 2</p>
          <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
              <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                  Block Thief <br /> Secure Your Products
                </h1>
                <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                  "Eliminate counterfeit products with our advanced
                  blockchain-based authentication system. Our tamper-proof and
                  easily verifiable solution ensures product authenticity.
                  Protect your brand, build consumer trust and secure your
                  supply chain with us."
                </p>
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
