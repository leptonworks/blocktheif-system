import React from "react";
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [150, 320, 250, 450, 300, 600, 400],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [250, 500, 200, 350, 400, 250, 600],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const data1 = [
  { name: "Product A", authSuccessRate: 75, authAttempts: 100 },
  { name: "Product B", authSuccessRate: 90, authAttempts: 50 },
  { name: "Product C", authSuccessRate: 60, authAttempts: 200 },
  { name: "Product D", authSuccessRate: 80, authAttempts: 75 },
];

function Analytics() {
  const totalAuthAttempts = data1.reduce(
    (total, product) => total + product.authAttempts,
    0
  );
  const totalAuthSuccess = data1.reduce(
    (total, product) =>
      total + (product.authAttempts * product.authSuccessRate) / 100,
    0
  );
  const overallSuccessRate =
    totalAuthAttempts > 0
      ? Math.round((totalAuthSuccess / totalAuthAttempts) * 100)
      : 0;

  return (<div className="bg-gray-300">
  <div className="mt-16 container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
    {/* Pageviews chart */}
    <h2 className="text-2xl font-bold mb-4">Some Analytics</h2>
    <div class="w-128 h-64">
      <Bar options={options} data={data} />
    </div>
  </div>
  <div className="container mx-auto">
    <div className="flex justify-between">
      <div className="w-1/2 pr-5">
        <h2 className="text-lg font-bold mb-3">
          Authentication success rate
        </h2>
        <div className="bg-gray-100 px-4 py-2 rounded-md mb-3">
          <div className="text-lg font-bold">{overallSuccessRate}%</div>
          <div className="text-gray-500">Overall success rate</div>
        </div>
        <div className="mb-5">
          {data1.map((product) => (
            <div
              key={product.name}
              className="flex justify-between items-center mb-2"
            >
              <div className="text-lg font-bold">
                {product.authSuccessRate}%
              </div>
              <div>{product.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 pl-5">
        <h2 className="text-lg font-bold mb-3">
          Authentication attempts by product
        </h2>
        <div className="mb-5">
          {data1.map((product) => (
            <div
              key={product.name}
              className="flex justify-between items-center mb-2"
            >
              <div>{product.authAttempts}</div>
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
