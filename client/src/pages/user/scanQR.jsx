import React, { useState } from "react";

import QRCode from "qrcode";

function scanQR() {
  const [qrValue, setQrValue] = useState("");
  const [qrImgUrl, setQrImgUrl] = useState("");

  //gg

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!qrValue) {
      return alert("please enter some value");
    }

    const response = await QRCode.toDataURL(qrValue);
    console.log(qrValue)
    setQrImgUrl(response);
    setQrValue("");
  };  

  return (
    <section className="h-screen grid grid-cols-1">
      <div className="col-span-1 text-left bg-[#1E1E1E] text-black font-bold py-32 md:p-20">
        <h1 className="text-black text-3xl sm:text-5xl py-2 text-gradient ">
          Scan Your
          <br />
          QR
        </h1>
        <br />

        <h3>Create QR Code</h3>

        <div className="card-body">
          <form
            onSubmit={handleSubmit}
            className="d-flex align-itms-center justify-content-between"
          >
            <input
              placeholder="enter text"
              type="text"
              className="form-control border-top-0 border-start-0 border-end-0"
              style={{ width: "40%" }}
              name=""
              id="text"
              value={qrValue}
              onChange={(e) => setQrValue(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary text-white"
              style={{ width: "7%" }}
            >
              Generate
            </button>
          </form>

          {qrImgUrl && (
            <div className="mt-4 mx-auto">
              <a href={qrImgUrl} download="qr.png">
                <img src={qrImgUrl} alt="QR code" />
              </a>
            </div>
          )}
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="flex items-center justify-center"></div>
      </div>
      <div className="col-  span-1 text-center bg-gray-300 text-white font-bold py-32">
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

export default scanQR;
