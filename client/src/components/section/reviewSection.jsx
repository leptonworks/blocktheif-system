import React from "react";
import ReviewButton from "../buttons/reviewButton";

function reviewSection() {
  return (
    <div className="flex w-full justify-left items-center bg-[#1E1E1E]">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
        <br /><br /><br /><br /><h3
    class="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
    Testimonials
  </h3>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            "Discover the unmatched satisfaction of our customers through their
            candid reviews."
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            "Discover the unmatched satisfaction of our customers through their
            candid reviews."
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            "Discover the unmatched satisfaction of our customers through their
            candid reviews."
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            "Discover the unmatched satisfaction of our customers through their
            candid reviews."
          </p>
          <div className = "flex items-center justify-center">
                <ReviewButton />
              </div>

        </div>

        <div className="flex-1 flex flex-col justify-start items-center"></div>
      </div>
    </div>
  );
}

export default reviewSection;
