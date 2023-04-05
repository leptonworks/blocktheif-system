import React from "react";
import ScanButton from "../buttons/scanButton";

function QrSection() {
  return (
    <section className="h-screen grid grid-cols-1 bg-gradient-to-r from-[#2a5298] to-[#1e3c72]">
      <div className="col-span-1 text-left text-white font-bold py-10 md:p-20 lg:py-32">
        <div className="md:flex md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 lg:w-2/3 px-4 md:px-0">
            <div className="md:w-1/2 lg:w-1/2 px-6 py-10 md:py-0 w-96 lg:w-auto">
              <img src="./images/scanQR.jpg" className="hidden sm:block w-full h-auto lg:h-full" />
            </div>
          </div>
          <div className="my-4">
            <div className="flex flex-col items-center justify-center mb-4">
              <h1 className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2">
                Scan Your QR <br />
              </h1>
              <h3 className="text-lime-400 font-bold text-center sm:w-9/12 md:w-7/12 lg:w-9/12 text-lg md:text-xl lg:text-2xl">
                "Empower yourself with the assurance of authenticity. Scan your
                products with Blockthief's QR code scanner."
              </h3>
              <div className="flex items-center justify-center mt-4">
                <ScanButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QrSection;
