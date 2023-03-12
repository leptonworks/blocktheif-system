import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { groupBy } from "lodash";


const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
const ABI = Product.abi;
const provider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, ABI, signer);

function Overview() {
  const [productCount, setProductCount] = useState(0);
  const [productIDs, setProductIDs] = useState([]);
  const [productTimestamps, setProductTimestamps] = useState([]);
  const [productIds, setProductIds] = useState([]);


  useEffect(() => {
    async function getProductTimestamps() {
      const timestamps = [];
      for (let i = 0; i < productIds.length; i++) {
        const productData = await contract.getProduct(productIds[i]);
        const timestamp = productData[5].toNumber();
        timestamps.push(timestamp);
      }
      setProductTimestamps(timestamps);
    }
  
    getProductTimestamps();
  }, [productIds]);
  

  useEffect(() => {
    async function getProductIds() {
      const count = await contract.getProductCount();
      setProductCount(count.toString());
      const ids = [];
      for (let i = 1; i <= count.toNumber(); i++) {
        ids.push(i);
        console.log("Product ID:", i);
      }
      setProductIDs(ids);
    
      const productIds = await contract.getProductIds();
      const idArray = productIds.map((id) => id.toNumber());
      setProductIds(idArray);
    }
    getProductIds();
  }, []);

 // Group timestamps by day and convert to an array of objects with day as label and count as data
 const dailyProductCounts = Object.entries(
  groupBy(productTimestamps, (timestamp) =>
    new Date(timestamp * 1000).toISOString().slice(0, 10)
  )
).map(([day, timestamps]) => ({
  label: day,
  data: timestamps.length,
}));

const data = {
  labels: dailyProductCounts.map((d) => d.label),
  datasets: [
    {
      label: "Products",
      data: dailyProductCounts.map((d) => d.data),
      backgroundColor: "#36A2EB",
    },
  ],
};

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Total Products</h2>
          <p className="text-gray-600">{productCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Product Timestamps</h2>
          <ul className="list-disc list-inside text-gray-600">
            {productIDs.map((id, index) => (
              <li key={id}>
                {new Date(productTimestamps[index] * 1000).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product IDs</h1>
      <ul className="list-disc list-inside text-gray-600">
        {productIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
    <div>
     <Bar data={data} />;
    </div>
    </div>
  );
}

export default Overview;
