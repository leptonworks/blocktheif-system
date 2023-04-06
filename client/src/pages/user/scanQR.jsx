import React from "react";
import QRImage from "../../../images/default_qrcode.png";
import { IoQrCodeOutline } from "react-icons/io5";

function ScanQR() {
  return (
    <div className="nav-spacing bg-gradient-to-br from-[#0f3460] to-[#162955]">
<section className="h-screen grid grid-cols-1 ">
          <div className="container mx-auto py-32 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <img src={QRImage} alt="QR Code" className="w-full rounded" />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-white">
              <h1 className="text-3xl sm:text-5xl font-bold">
                <IoQrCodeOutline className="inline-block text-4xl sm:text-6xl mr-2" />
                Scan Your QR
              </h1>

              <p className="text-gray-200">
                Welcome to our QR code scanner! Use this page to authenticate your
                product by scanning its unique QR code. Our system will verify if
                the product is genuine or counterfeit, giving you peace of mind
                and confidence in your purchase. Simply point your camera at the
                QR code on your product and we'll take care of the rest. Happy
                scanning!
              </p>

              <p className="text-gray-200">
                Our platform offers a simple and efficient way to verify the
                authenticity of products by scanning their QR codes. The system
                checks if the product is genuine or fake, giving customers peace
                of mind and a hassle-free way to ensure they are buying the real
                thing. By uploading their QR code, customers can confirm the
                legitimacy of their product and avoid purchasing counterfeits.
              </p>

              <a
                href="/registration1"
                className="inline-flex items-center font-semibold tracking-wider text-white hover:text-white mt-4 bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-2 rounded-md shadow-md hover:shadow-lg"
              >
                Join now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScanQR;
