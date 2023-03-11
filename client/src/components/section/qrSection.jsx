import React from "react";

import ScanButton from "../buttons/scanButton";

function qrSection() {
  return (
    <section className="h-screen grid grid-cols-1">
      <div className="col-span-1 text-left bg-[#1E1E1E] text-white font-bold py-32 md:p-20">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Scan Your
          <br />
          QR
        </h1>


              <div className = "flex items-center justify-center">
                <ScanButton />
              </div>

        
      </div>
      <div className="col-span-1 text-center bg-gray-300 text-white font-bold py-32">
        <p className="text-end my-2 text-black font-bold md:w-9/12 w-11/12 text-base">
          "Empower yourself with the assurance of authenticity. Scan your
          products with Blockthief's QR code scanner."
        </p>
      </div>
    </section>
  );
}

<section className="h-screen grid md:grid-cols-2 justify-center items-center">
  <div className="flex w-full justify-left items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          "Empower yourself with the assurance of authenticity. Scan your
          products with Blockthief's QR code scanner."
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center"></div>
    </div>
  </div>
</section>;

export default qrSection;
