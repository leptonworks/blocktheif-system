import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";

const options = {
  responsive: true,
  plugins: {
    datalabels: {
      display: true,
      color: "black",
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Analytics() {
  const [productData, setProductData] = useState([]);
  const [productAuthAttempts, setProductAuthAttempts] = useState([]);
  const [productAuthSuccessRate, setProductAuthSuccessRate] = useState([]);
  const [overallSuccessRate, setOverallSuccessRate] = useState(0);
  const [authCount, setAuthCount] = useState(0);

  useEffect(() => {
    async function getProductDetails() {
      const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
      const ABI = Product.abi;
      const provider = new ethers.providers.JsonRpcProvider(
        "http://localhost:8545"
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ABI, signer);

      const count = await contract.getProductCount();
      const ids = await contract.getProductIds();
      const idArray = ids.map((id) => id.toNumber());

      const products = [];

      for (const id of idArray) {
        const product = await contract.getProduct(id);
        const [name, emei, color, size, price, timestamp] = product;

        products.push({
          id,
          name,
          emei,
          color,
          size,
          price: ethers.utils.formatEther(price),
          timestamp: new Date(timestamp.toNumber() * 1000).toLocaleString(),
        });
      }

      setProductData(products);

      const authAttempts = [];
      const authSuccessRate = [];

      for (const product of products) {
        const attempts = Math.floor(Math.random() * 1000) + 1;
        const successRate = Math.floor(Math.random() * 100) + 1;
        authAttempts.push(attempts);
        authSuccessRate.push(successRate);
      }

      setProductAuthAttempts(authAttempts);
      setProductAuthSuccessRate(authSuccessRate);

      const totalAuthAttempts = authAttempts.reduce((total, attempts) => total + attempts, 0);
      const totalAuthSuccess = authAttempts.reduce((total, attempts, index) => total + ((attempts * authSuccessRate[index]) / 100), 0);
      const successRate = totalAuthAttempts > 0 ? Math.round((totalAuthSuccess / totalAuthAttempts) * 100) : 0;
      setOverallSuccessRate(successRate);
    }

    getProductDetails();
  }, []);
  
  useEffect(() => {
    async function getAuthCount() {
      const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
      const ABI = Product.abi;
      const provider = new ethers.providers.JsonRpcProvider(
        "http://localhost:8545"
      );
      const contract = new ethers.Contract(contractAddress, ABI, provider);
    
      // Replace the ID below with the ID of the product you want to get the authentication count for
      const productId = 1;
    
      // Call the getAuthenticationCounter function on the smart contract
      const authCount = await contract.getAuthenticationCounter();
      console.log("Here",authCount.toNumber());
    
      setAuthCount(authCount.toNumber());
    }
    
    getAuthCount();
  }, []);

  const labels = productData.map((product) => product.name);
  
  const data = {
  labels,
  datasets: [
  {
  label: "Authentication Success Rate",
  data: productAuthSuccessRate,
  backgroundColor: "rgba(53, 162, 235, 0.5)",
  },
  {
  label: "Authentication Rate",
  data: productAuthAttempts,
  backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
  ],
  };
  
  return (
  <div className="bg-gray-300 min-h-screen">
  <div className="container mx-auto p-8">
  <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
  <h2 className="text-2xl font-bold mb-4">
  Product Authentication Statistics
  </h2>
  <div className="w-full h-96">
  <Bar options={options} data={data} />
  </div>
  <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">
  Authentication Success Rate
  </h2>
  <div className="bg-gray-100 p-4 rounded-md mb-3">
  <div className="text-lg font-bold">{overallSuccessRate}%</div>
  <div className="text-gray-500">Overall success rate</div>
  </div>
  <div className="mb-5">
  {productData.map((product, index) => (
  <div
               key={product.id}
               className="flex justify-between items-center mb-2"
             >
  <div className="text-lg font-bold">
  {productAuthSuccessRate[index]}%
  </div>
  <div>{product.name}</div>
  </div>
  ))}
  </div>
  </div>
  <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">
  Authentication Rate
  </h2>
  <div className="mb-5">
  {productData.map((product, index) => (
  <div
               key={product.id}
               className="flex justify-between items-center mb-2"
             >
  <div className="text-lg font-bold">
  {productAuthAttempts[index]}
  </div>
  <div>{product.name}</div>
  </div>
  ))}
  </div>
  </div>
  <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">
  Authentication Count
  </h2>
  <div className="bg-gray-100 p-4 rounded-md mb-3">
  <div className="text-lg font-bold">{authCount}</div>
  <div className="text-gray-500">Total number of authentications</div>
  </div>
  </div>
  </div>
  </div>
  );
  }
  
  export default Analytics;    
