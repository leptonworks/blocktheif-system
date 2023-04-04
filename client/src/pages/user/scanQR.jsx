import React from "react";

function scanQR() {
  return (
    <section className="h-screen grid grid-cols-1">
      <div className="col-span-1 text-left bg-black text-white font-bold py-32 md:p-20">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Scan Your
          <br />
          QR
        </h1>

        <div className="flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default scanQR;
