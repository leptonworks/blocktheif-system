import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";

function AboutUs() {
  const ScrollDown = () => {};

  return (
<button
    type="button"
    onClick={ScrollDown}
    className="flex flex-row justify-center items-center my-5 bg-white p-4 rounded-full cursor-pointer hover:bg-gray-100 border-2 border-gray-900"
  >
    <p className="text-black text-base font-semibold mr-2">About Us</p>
    <AiFillPlayCircle className="text-black mr-2" />

  </button>


  )
}

export default AboutUs