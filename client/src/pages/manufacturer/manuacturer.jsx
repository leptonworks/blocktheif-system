import React from "react";
import Img from "../../../images/blLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";

function manufacturer() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="nav-spacing bg-gradient-to-br from-[#0f3460] to-[#162955]">
      <div className="divide-y">
        <div
          className="px-4 py-16 mx-auto bg-cover sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          style={{ backgroundImage: "url('/images/hghg.jpg')" }}
        >
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2
              className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white text-gradient sm:text-4xl md:mx-auto"
              data-aos="fade-up"
            >
              Secure and Authenticate Your Products with Blockchain Technology
            </h2>
            <h2 className="text-base text-gray-100 font-bold underline underline-offset-2 md:text-lg">
              Join our innovative platform to protect your brand and build
              customer trust
            </h2>
            <br />
            <p className="text-base text-sky-100 whitespace-normal italic font-bold md:text-lg">
              "Since implementing the Fake Product Identification System, our
              brand reputation has improved significantly. Customers appreciate
              the added security and transparency, and we've seen a reduction in
              counterfeit products in the market." - John Smith, CEO of XYZ
              Company
            </p>
            <br />
            <h2 className="text-base text-center text-gray-100 md:text-lg">
              Join our innovative platform to protect your brand and build
              customer trust
            </h2>
            <br />
            <div className="text-center">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-700 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto bg-neutral-800 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h3
              className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto"
              data-aos="fade-up"
            >
              Blockchain Benefits
            </h3>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div
              className="p-5 duration-300 transform bg-neutral-300 border-l-4 border-blue-700 hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <GiCheckMark className="text-2xl text-blue-700 mb-2" />
                <h6 className="mb-2 font-semibold leading-5">
                  Enhanced security
                </h6>
                <p className="text-sm text-gray-900">
                  Keep your product data safe with decentralized and
                  tamper-proof storage.
                </p>
              </div>
            </div>
            <div
              className="p-5 duration-300 transform bg-neutral-300 border-l-4 border-blue-700 hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <IoMdCheckmarkCircleOutline className="text-2xl text-blue-700 mb-2" />
                <h6 className="mb-2 font-semibold leading-5">
                  Greater transparency
                </h6>
                <p className="text-sm text-gray-900">
                  Empower customers to verify product authenticity and track its
                  journey from production to their hands.
                </p>
              </div>
            </div>
            <div
              className="p-5 duration-300 transform bg-neutral-300 border-l-4 border-blue-700 hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <FaRegCheckCircle className="text-2xl text-blue-700 mb-2" />
                <h6 className="mb-2 font-semibold leading-5">
                  Improved traceability
                </h6>
                <p className="text-sm text-gray-900">
                  Easily monitor and manage your entire supply chain,
                  identifying and mitigating potential risks.
                </p>
              </div>
            </div>
            <div
              className="p-5 duration-300 transform bg-neutral-300 border-l-4 border-blue-700 hover:-translate-y-2"
              data-aos="fade-up"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <AiOutlineCheckCircle className="text-2xl text-blue-700 mb-2" />
                <h6 className="mb-2 font-semibold leading-5">
                  Reduced counterfeit
                </h6>
                <p className="text-sm text-gray-900">
                  Deter counterfeiters by ensuring each product has a unique,
                  verifiable identity on the blockchain.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h3
                className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto"
                data-aos="fade-up"
              >
                How It Works
              </h3>
            </div>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
              <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
              </div>
              <div
                className="p-5 duration-300 transform bg-neutral-300 border rounded shadow-sm hover:-translate-y-2"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold leading-5">Register</p>
                  <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-700 bg-indigo-200">
                    1
                  </p>
                </div>
                <BsCheckCircle className="text-2xl text-indigo-700 mb-2" />
                <p className="text-sm text-gray-900">
                  Sign up to our platform and create your manufacturer profile.
                </p>
              </div>
              <div
                className="p-5 duration-300 transform bg-neutral-300 border rounded shadow-sm hover:-translate-y-2"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold leading-5">Add Products</p>
                  <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-700 bg-indigo-200">
                    2
                  </p>
                </div>
                <GiCheckMark className="text-2xl text-indigo-700 mb-2" />
                <p className="text-sm text-gray-900">
                  Enter product details and generate a unique QR code for each
                  item.
                </p>
              </div>
              <div
                className="p-5 duration-300 transform bg-neutral-300 border rounded shadow-sm hover:-translate-y-2"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold leading-5">Manage Products</p>
                  <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-700 bg-indigo-200">
                    3
                  </p>
                </div>
                <IoMdCheckmarkCircleOutline className="text-2xl text-indigo-700 mb-2" />
                <p className="text-sm text-gray-900">
                  Update, delete, and track product analytics easily through
                  your dashboard.
                </p>
              </div>
              <div
                className="p-5 duration-300 transform bg-neutral-300 border rounded shadow-sm hover:-translate-y-2"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold leading-5">Authenticate</p>
                  <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-700 bg-indigo-200">
                    4
                  </p>
                </div>
                <FaRegCheckCircle className="text-2xl text-indigo-700 mb-2" />
                <p className="text-sm text-gray-900">
                  Customers can scan the QR code to verify product authenticity
                  and leave reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default manufacturer;