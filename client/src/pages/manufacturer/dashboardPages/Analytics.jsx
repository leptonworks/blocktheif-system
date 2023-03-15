import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

function Analytics() {
  const [productData, setProductData] = useState([]);
  const [productAuthAttempts, setProductAuthAttempts] = useState([]);
  const [productAuthSuccessRate, setProductAuthSuccessRate] = useState([]);
  const [overallSuccessRate, setOverallSuccessRate] = useState(0);

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

  const labels = productData.map((product) => product.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Authentication Attempts",
        data: productAuthAttempts,
        backgroundColor: "rgba(255, 99, 132, 0 )",
      },
      {
        label: "Authentication Success Rate",
        data: productAuthSuccessRate,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
  <div className="bg-gray-300">
  <div className="mt-16 container mx-auto p-8">
  <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
  {/* Pageviews chart */}
  <h2 className="text-2xl font-bold mb-4">Product Authentication Statistics</h2>
  <div class="w-128 h-64">
  <Bar options={options} data={data} />
  </div>
  </div>
  <div className="container mx-auto">
  <div className="flex justify-between">
  <div className="w-1/2 pr-5">
  <h2 className="text-lg font-bold mb-3">
  Authentication Success Rate
  </h2>
  <div className="bg-gray-100 px-4 py-2 rounded-md mb-3">
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
  <div className="w-1/2 pl-5">
  <h2 className="text-lg font-bold mb-3">
  Authentication Attempts by Product
  </h2>
  <div className="mb-5">
  {productData.map((product, index) => (
  <div
                 key={product.id}
                 className="flex justify-between items-center mb-2"
               >
  <div>{productAuthAttempts[index]}</div>
  <div>{product.name}</div>
  </div>
  ))}
  </div>
  </div>
  </div>
  </div>
  </div>
  );
  }
  
  export default Analytics;