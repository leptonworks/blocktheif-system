import React from "react";

import logo from "../../../images/landingPageLogo.png";

//back-to-top button

var toTopButton = document.getElementById("to-top-button");

        // When the user scrolls down 200px from the top of the document, show the button
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        }

        // When the user clicks on the button, smoothy scroll to the top of the document
        function goToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }



const footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-gray-300">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="landingPageLogo" className="w-8 " />
        <p className="font-bold text-black">BLOCK THIEF</p>
      </div>

      <button id="to-top-button" onclick="goToTop()" title="Go To Top"
        class="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>


      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-black text-base text-center mx-2 cursor-pointer">ScanQR</p>
        
        <p className="text-black text-base text-center mx-2 cursor-pointer">Manufacturer</p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">Reviews</p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">About Us</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-black text-sm text-center">Discover the unexpected potential of security and authenticity with our blockchain-based product authentication system.</p>
      <p className="text-black text-sm text-center font-medium mt-2">leptonworks@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-black text-left text-xs">@BlockThief2022</p>
      <p className="text-black text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default footer;
