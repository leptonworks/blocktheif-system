import React from "react";
import ReviewButton from "../buttons/reviewButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const reviews = [
  {
    userName: "John Doe",
    userLocation: "New York, USA",
    reviewText: "Great product! Really helped me...",
  },
  {
    userName: "Will Smith",
    userLocation: "Uttah, USA",
    reviewText: "Awesome Project...",
  },
  {
    userName: "Christopher Bumstead",
    userLocation: "Vegas, USA",
    reviewText: "Authentified my products!!",
  }
  // ... more review objects
];

function reviewSection({ title, buttonText, cardsToShow }) {
  return (
    <section className="h-screen bg-gradient-to-r from-[#0c2b4e] to-[#04141f] py-20">
      <div className="nav-spacing container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-12 text-center">
          {title || "User Reviews"}
        </h1>
        <div className="nav-spacing grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Card */}
          {reviews.slice(0, cardsToShow || 3).map((review, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 w-72">
              <div className="flex items-center mb-4">
                <AccountCircleIcon
                  fontSize="large"
                  className="w-12 h-12 mr-4 text-gray-400"
                />
                <div>
                  <h2 className="text-xl font-bold">{review.userName}</h2>
                  <p className="text-gray-600">{review.userLocation}</p>
                </div>
              </div>
              <p className="text-gray-800">{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default reviewSection;
