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
              <p className="text-end my-2 text-black font-bold md:w-9/12 w-11/12 text-base">
          "Empower yourself with the assurance of authenticity. Scan your
          products with Blockthief's QR code scanner."
        </p>
      </div>
    </section>
  );
}


export default qrSection;
