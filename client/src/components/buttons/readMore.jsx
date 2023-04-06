import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";

function ReadMore() {
  const ScrollDown = () => {};

  return (
    <a href="/manufacturer">
      <button
        type="button"
        className="flex flex-row justify-center items-center my-5 bg-white p-4 rounded-full cursor-pointer hover:bg-gray-100 border-2 border-gray-900"
      >
        <p className="text-black text-base font-semibold mr-2">Read More</p>
        <AiFillPlayCircle className="text-black mr-2" />
      </button>
    </a>


  )
}

export default ReadMore