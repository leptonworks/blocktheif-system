import React from "react";
import ScanButton from "../buttons/scanButton";

function QrSection() {
  return (
    <section style={{background: 'linear-gradient(to right, #6B46C1, #3B82F6)'}} className="h-screen grid grid-cols-1">
  <div className="col-span-1 text-left bg-gradient-to-r from-purple-700 to-blue-700 text-white font-bold py-10 md:p-20 lg:py-32">
    <div className="md:flex md:flex-row md:items-center md:justify-between">
      <div className="md:w-1/2 lg:w-1/3 px-6 py-10 md:py-0">
        <img src="./images/scanQR.jpg" className="w-full" />
      </div>
      <div className="md:w-1/2 lg:w-2/3 px-4 md:px-0">
        <div className="my-4 ">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 -left-40">
            Scan Your
            <br />
            QR
          </h1>
          <h3 className="text-gray-800 font-bold sm:w-9/12 md:w-7/12 lg:w-9/12 text-base">
            "Empower yourself with the assurance of authenticity. Scan your products with Blockthief's QR code scanner."
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <ScanButton />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default QrSection;




