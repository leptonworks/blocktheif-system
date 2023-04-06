import React from "react";
import ReviewButton from "../buttons/reviewButton";

const reviews = [
  {
    userName: "Banu Athuraliya",
    userLocation: "New York, USA",
    userImage: "path/to/image.jpg",
    reviewText: "Great product! Really helped me...",
  },
  {
    userName: "Sulari Fernando",
    userLocation: "Uttah, USA",
    userImage: "path/to/image.jpg",
    reviewText: "Awesome Project...",
  },
  {
    userName: "Nuwan Jayawardhana",
    userLocation: "Vegas, USA",
    userImage: "path/to/image.jpg",
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
                <img
                  src={review.userImage || "./images/user-placeholder.png"}
                  alt="User"
                  className="w-12 h-12 object-cover rounded-full mr-4"
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
