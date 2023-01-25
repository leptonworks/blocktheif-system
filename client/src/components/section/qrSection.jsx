import React from 'react'

function qrSection() {
  return (
    <div className="flex w-full justify-left items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Scan Your
            <br />
            QR
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          "Empower yourself with the assurance of authenticity. Scan your products with Blockthief's QR code scanner."
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center"></div>
      </div>
    </div>  )
}

export default qrSection