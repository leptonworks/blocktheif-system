import React from 'react'

function aboutUsSection() {
  return (
    <div className="flex w-full justify-left items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            About
            <br />
            Us
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          "Learn who we are, what we stand for, and why we do what we do."
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center"></div>
      </div>
    </div>  )
}

export default aboutUsSection