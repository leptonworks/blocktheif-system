import React, { useState, useEffect } from "react";
import axiosInstance from './axiosInstance';
import axios from "axios";
import greeter from "../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import { ethers } from "ethers";
import { userData } from "./helper";

function ProductReviews() {
  const [productIds, setProductIds] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categorizedReviews, setCategorizedReviews] = useState({
    positive: [],
    negative: [],
  });
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  // Filter reviews based on the selected category
  const filteredReviews =
    selectedCategory === "all"
      ? reviews
      : selectedCategory === "positive"
      ? categorizedReviews.positive
      : categorizedReviews.negative;

  const { token } = userData();

  const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
  const ABI = greeter.abi;
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    const fetchProductIds = async () => {
      setIsLoading(true);
      try {
        const bigNumberIds = await contract.getProductIds();
        const ids = bigNumberIds.map((id) => id.toNumber());
        setProductIds(ids);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchProductIds();
  }, []);

    useEffect(() => {
        const fetchReviews = async () => {
          setIsLoading(true);
          try {
            const response = await axiosInstance.get(
              "http://localhost:5000/reviews/get-reviews",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const allReviews = response.data.reviews;
            const filteredReviews = allReviews.filter((review) =>
              productIds.includes(review.productId)
            );
            setReviews(filteredReviews);
      
            // Call the categorizeReviews function after setting the reviews
            await categorizeReviews();
          } catch (error) {
            console.error(error);
          }
          setIsLoading(false);
        };
      
        if (productIds.length > 0) {
          fetchReviews();
        }
      }, [productIds]);
      

  const analyzeSentiment = async (reviewText) => {
    try {
      const response = await axiosInstance.post(
        "http://172.20.10.3:4000/api/sentiment",
        {
          text: reviewText,
        }
      );
      return response.data.sentiment;
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      return null;
    }
  };

  const categorizeReviews = async () => {
    const positiveReviews = [];
    const negativeReviews = [];

    console.log("Categorizing reviews...");

    for (const review of reviews) {
      console.log("Analyzing review:", review);

      try {
        const response = await axiosInstance.post(
          "http://172.20.10.3:4000/api/sentiment",
          {
            text: review.text,
          }
        );

        const sentiment = response.data.sentiment;
        console.log("Sentiment for review:", sentiment);

        if (sentiment.toLowerCase() === "positive") {
          positiveReviews.push(review);
        } else {
          negativeReviews.push(review);
        }
      } catch (error) {
        console.error("Error analyzing sentiment:", error);
      }
    }

    console.log("Categorized reviews:", {
      positive: positiveReviews,
      negative: negativeReviews,
    });

    setCategorizedReviews({
      positive: positiveReviews,
      negative: negativeReviews,
    });
  };

  return (
    <div className="nav-spacing">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Product Reviews</h2>
        {/* Add buttons to select review categories */}
        <div className="mb-4">
          <button
            onClick={() => handleCategorySelection("all")}
            className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none mr-2"
          >
            All
          </button>
          <button
            onClick={() => handleCategorySelection("positive")}
            className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none mr-2"
          >
            Positive
          </button>
          <button
            onClick={() => handleCategorySelection("negative")}
            className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          >
            Negative
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Update column names according to the review array */}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Review
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Update the table content based on the selected category */}
              {filteredReviews.map((review) => (
                <tr key={review._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {review.productId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {review.rating}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-wrap">
                    <div className="text-sm text-gray-900">{review.text}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
