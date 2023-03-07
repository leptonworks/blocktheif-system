import React from "react";




function createQR() {
  return (
    <div className="flex w-full justify-left items-center bg-black">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="  ">
          createQR
            <br />
            
          </h1>
        </div>

        <div className="card-body">
          <form className="d-flex allign-items-center justify-content-between">
            <input 
            type="text" 
            className="form-control"
            style={{width : "93%"}} 
            name="" 
            id="text" />
          </form>
        </div>


        <div className="flex-1 flex flex-col justify-start items-center"></div>
      </div>
    </div>
  );
}

export default createQR;
