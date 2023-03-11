import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";

function ReadMore() {
  const ScrollDown = () => {};

  return (
<button
    type="button"
    onClick={ScrollDown}
    className="flex flex-row justify-center items-center my-5 bg-[#F9FAFB] p-4 rounded-full cursor-pointer hover:bg-[#e0e0e0] border-2 border-[#1E1E1E]"
  >
    <p className="text-black text-base font-semibold mr-2">ReadMore</p>
    <AiFillPlayCircle className="text-bg-[#1E1E1E] mr-2" />

  </button>


  )
}

export default ReadMore