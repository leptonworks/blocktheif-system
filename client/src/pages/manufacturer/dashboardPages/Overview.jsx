import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { groupBy } from "lodash";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
} from "recharts";
import axiosInstance from "../../mongoDB/axiosInstance";
import { userData } from "../../mongoDB/helper";

const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
const ABI = Product.abi;
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, ABI, signer);

function Overview() {
  const [productCount, setProductCount] = useState(0);
  const [productIds, setProductIds] = useState([]);
  const [productPrices, setProductPrices] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [reviews, setReviews] = useState([]);
  const { token } = userData();

  useEffect(() => {
    async function getProductData() {
      const count = await contract.getProductCount();
      setProductCount(count.toString());

      const productIds = await contract.getProductIds();
      const idArray = productIds.map((id) => id.toNumber());
      setProductIds(idArray);

      const prices = [];
      let revenue = 0;
      for (const id of idArray) {
        const product = await contract.getProduct(id);
        const price = product[4].toString();
        prices.push(price);
        revenue += parseInt(price);
      }
      setProductPrices(prices);
      setTotalRevenue(revenue);
    }
    getProductData();
  }, []);

  useEffect(() => {
    async function fetchReviews() {
      const response = await axiosInstance.get(
        "http://localhost:5000/reviews/all-reviews",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      console.log("Fetched Reviews:", data.reviews);
      setReviews(data.reviews);
    }

    fetchReviews();
  }, []);

  const dailyProductPrices = Object.entries(
    groupBy(productPrices, (price) => price)
  ).map(([price, prices]) => ({
    label: `$${price}`,
    data: prices.length,
  }));

  const data = {
    labels: dailyProductPrices.map((d) => d.label),
    datasets: [
      {
        label: "Product Prices",
        data: dailyProductPrices.map((d) => d.data),
        backgroundColor: dailyProductPrices.map(
          () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
        ),
        barPercentage: 0.4, // Make the bar size smaller
      },
    ],
  };

  const averageRatings = productIds.reduce((acc, id) => {
    const productReviews = reviews.filter(
      (review) => review.productId.toString() === id.toString()
    );
    // console.log(`Product ID: ${id}`);
    // console.log(`Product Reviews:`, productReviews);

    const avgRating = productReviews.length
      ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
        productReviews.length
      : 0;

    // console.log(`Average Rating: ${avgRating}`);
    acc[id] = avgRating;
    return acc;
  }, {});

  const sortedProductIds = productIds.sort(
    (a, b) => averageRatings[b] - averageRatings[a]
  );

  const topRatedProducts = sortedProductIds
    .slice(0, 3)
    .map((id) => ({ name: `Product ${id}`, rating: averageRatings[id] }));

  const lowestRatedProducts = sortedProductIds
    .slice(-3)
    .reverse()
    .map((id) => ({ name: `Product ${id}`, rating: averageRatings[id] }));

  const reviewSentiments = [
    { name: "Positive", value: 60 },
    { name: "Neutral", value: 30 },
    { name: "Negative", value: 10 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  const sortedReviews = reviews.slice(0, 3);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Overview</h1>
        <div className="flex flex-wrap gap-6">
          {/* Total Products */}
          <div className="relative p-6 bg-white shadow-lg rounded-xl w-full md:w-72 dark:bg-gray-800 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-gray">
              Total Products
            </h2>
            <p className="text-gray-600">{productCount}</p>
          </div>
          {/* Total Revenue */}
          <div className="relative p-6 bg-white shadow-lg rounded-xl w-full md:w-72 dark:bg-gray-800 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-gray">
              Total Revenue
            </h2>
            <p className="text-gray-600">${totalRevenue}</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top-rated Products */}
          <div className="relative p-6 bg-white shadow-lg rounded-xl w-full dark:bg-gray-800 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-gray">
              Top-rated Products
            </h2>
            {topRatedProducts.map((product) => (
              <div key={product.name} className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>{product.name}</p>
                  <p>{product.rating.toFixed(1)}</p>
                </div>
                <div className="w-full h-2 bg-green-100 rounded-full">
                  <div
                    className="h-full text-xs text-center text-white bg-green-400 rounded-full"
                    style={{ width: `${(product.rating / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Lowest-rated Products */}
          <div className="relative p-6 bg-white shadow-lg rounded-xl w-full dark:bg-gray-800 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-gray">
              Lowest-rated Products
            </h2>
            {lowestRatedProducts.map((product) => (
              <div key={product.name} className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>{product.name}</p>
                  <p>{product.rating.toFixed(1)}</p>
                </div>
                <div className="w-full h-2 bg-red-100 rounded-full">
                  <div
                    className="h-full text-xs text-center text-white bg-red-400 rounded-full"
                    style={{ width: `${(product.rating / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 w-full dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-light text-gray-700 dark:gray-100">
            Recent Reviews
          </h2>
          <ul className="space-y-4">
            {sortedReviews.map((review, index) => (
              <li key={`review-${index}`} className="border-b pb-4">
                <div className="font-semibold text-gray-500">
                  Product {review.productId}
                </div>
                <div className="text-gray-500">Rating: {review.rating}</div>
                <p className="text-gray-500">{review.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Prices Bar Chart */}
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 w-full dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
            Product Prices
          </h2>
          <div
            className="flex justify-center"
            style={{
              maxWidth: "100%",
              width: "75%",
              margin: "0 auto",
            }}
          >
            <div style={{ width: "100%" }}>
              <Bar data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
