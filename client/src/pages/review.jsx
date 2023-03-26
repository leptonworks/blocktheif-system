import React, { useState,useRef } from "react";
//import QrScanner from "react-qr-scanner"

function review() {

  const [file,setFile] = useState(null);
  const [data,setData] = useState(null);
  const fileRef = useRef();

  const handleClick = () => {
    fileRef.current.click();
  }

  const handleChange = async(e) => {
    const file = e.target.files[0];
    setFile(file);
    const result = await QrScanner.scanImage(file)
    console.log(result);
  }


  return (
    <div className="nav-spacing">
    <div className="flex w-full justify-left items-center bg-[#1E1E1E]">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-14 text-gradient ">
            Customer
            <br />
            Reviews
          </h1>
          
          <h3>
          read QR Code
        </h3>

          

        {JSON.stringify(file)}

        <div className="card-body d-flex align-items-center justify-content-center">
          <form className="d-flex align-itms-center justify-content-between">
            
            <button 
            type="button"
            onClick = {handleClick}
            className="btn btn-success"

            > 
            Scan QR code  
            </button>



            <input 
            type="file"
            ref={fileRef}
            onChange={handleChange}
            accept=".png, .jpg , .jpeg "
            className="d-none "
            />
            <div className="mt-4">

            </div>


          </form>
        </div>




          <div className = "flex items-center justify-center">

              </div>

        </div>

        <div className="flex-1 flex flex-col justify-start items-center"></div>
      </div>
    </div>
    </div>
  );
}

export default review;