import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";

function learnMore() {
  const ScrollDown = () => {};

  return (
    <button
    type="button"
    onClick={ScrollDown}
    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
  >
    <AiFillPlayCircle className="text-white mr-2" />
    <p className="text-white text-base font-semibold">Learn More</p>
  </button>
  )
}

export default learnMore