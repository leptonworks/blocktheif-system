import React from "react";
import ReviewButton from "../buttons/reviewButton";

function reviewSection() {
  return (
    <section className="h-screen bg-gradient-to-r from-[#0c2b4e] to-[#04141f] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-12 text-center">
          User Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src="./images/user-placeholder.png"
                  alt="User"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">User Name</h2>
                  <p className="text-gray-600">Location</p>
                </div>
              </div>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras porttitor metus
                eget tincidunt fermentum.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ReviewButton />
        </div>
      </div>
    </section>
  );
}

export default reviewSection;
