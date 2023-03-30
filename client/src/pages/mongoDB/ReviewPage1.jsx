import React, { useState, useEffect } from "react";
import { userData } from "./helper";
import axios from "axios";
import { toast } from "react-toastify";

const ReviewPage1 = () => {
  const [review, setReview] = useState({ productId: "", text: "", rating: "" });
  const [userProducts, setUserProducts] = useState([]); // State for user's scanned products
  const [userReviews, setUserReviews] = useState([]); // State for user's reviews
  const { token } = userData();

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/user-products",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserProducts(response.data.scannedProducts);
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    const fetchUserReviews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/reviews/get-reviews",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserReviews(response.data.reviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    };

    fetchUserProducts();
    fetchUserReviews();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting review:", review); // Log the review object before submitting
    console.log("JWT:", token); // Add this line

    try {
      const response = await axios.post(
        "http://localhost:5000/reviews/add-review",
        {
          ...review,
          userId: token, // Pass the JWT as userId
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add the Authorization header with the JWT token
          },
        }
      );

      console.log("Review response:", response); // Log the response from the server
      toast.success("Review added successfully");
      setReview({ productId: "", text: "", rating: "" });
    } catch (error) {
      console.error("Error adding review:", error); // Log the error
      toast.error("Error adding review");
    }
  };

  return (
    <div className="nav-spacing">
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6 text-center">Add Review</h1>
          <div className="bg-white rounded-md shadow-md p-8 max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="productId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product ID
                </label>
                <select
                  id="productId"
                  name="productId"
                  value={review.productId}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-              border border-gray-300 bg-white rounded-md shadow-smfocus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select a product</option>
                    {userProducts.map((product) => (
                      <option key={product.productId} value={product.productId}>
                        {product.productId}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rating
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={review.rating}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select a rating</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Review
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={review.text}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* Display user's products and reviews */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                Your Products and Reviews
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {userProducts &&
                  userProducts.map((product) => (
                    <div
                      key={product.productId}
                      className="bg-white rounded-md shadow-md p-4"
                    >
                      <h3 className="text-lg font-bold mb-4">
                        Product ID: {product.productId}
                      </h3>
                      {userReviews.filter((review) => review.productId === product.productId).map((review) => (
                        <div key={review._id} className="mb-4">
                          <div className="text-sm text-gray-500">
                            Rating: {review.rating}/5
                          </div>
                          <p className="text-sm">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
);
};

export default ReviewPage1;      