import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { groupBy } from "lodash";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar as ReBar } from 'recharts';

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
      },
    ],
  };

  const chartData = dailyProductPrices.map(({ label, data }) => ({
    name: label,
    value: data,
  }));

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Total Products</h2>
            <p className="text-gray-600">{productCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
            <p className="text-gray-600">${totalRevenue}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Product Prices</h2>
            <ul className="list-disc list-inside text-gray-600">
{productIds.map((id, index) => (
<li key={id}>${productPrices[index]}</li>
))}
</ul>
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