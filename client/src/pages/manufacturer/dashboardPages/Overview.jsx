import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { groupBy } from "lodash";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, CartesianGrid,Line } from "recharts";

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
        backgroundColor: dailyProductPrices.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`),
        barPercentage: 0.4, // Make the bar size smaller
      },
    ],
  };

  const chartData = dailyProductPrices.map(({ label, data }) => ({
    name: label,
    value: data,
  }));

  const topRatedProducts = [
    { name: "Product A", rating: 4.5 },
    { name: "Product B", rating: 4.2 },
    { name: "Product C", rating: 4.1 },
  ];

  const lowestRatedProducts = [
    { name: "Product X", rating: 2.5 },
    { name: "Product Y", rating: 2.3 },
    { name: "Product Z", rating: 2.1 },
  ];

  const reviewSentiments = [
    { name: "Positive", value: 60 },
    { name: "Neutral", value: 30 },
    { name: "Negative", value: 10 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  




  return (
    <div className="bg-gray-100 min-h-screen">
  <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Overview</h1>
    <div className="flex flex-wrap gap-6">
      {/* Total Products */}
      <div className="relative p-6 bg-white shadow-lg rounded-xl w-full md:w-72 dark:bg-gray-800 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
          Total Products
        </h2>
        <p className="text-white-600">{productCount}</p>
      </div>
      {/* Total Revenue */}
      <div className="relative p-6 bg-white shadow-lg rounded-xl w-full md:w-72 dark:bg-gray-800 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
          Total Revenue
        </h2>
        <p className="text-white-600">${totalRevenue}</p>
      </div>
    </div>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Top-rated Products */}
      <div className="relative p-6 bg-white shadow-lg rounded-xl w-full dark:bg-gray-800 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
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
        <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
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


           {/* Review Sentiments */}
           
           <div className="mt-12 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Review Sentiments</h2>
            <div className="mt-6">
            <ResponsiveContainer width="70%" height={450}>
              <PieChart>
                <Pie
                  data={reviewSentiments}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {reviewSentiments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        </div>
      </div>
    
<div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">Product Prices</h1>
          <div className="w-full h-56 relative">
            <div className="w-full h-full absolute">
              <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
<div className="mt-8">
<h1 className="text-4xl font-bold mb-4">Recent Reviews</h1>
<div className="bg-white rounded-lg shadow-md p-4">
<ul className="list-disc list-inside text-gray-600">
<li>Review 1</li>
<li>Review 2</li>
<li>Review 3</li>
</ul>
</div>
</div>
</div>
</div>
);
}

export default Overview;