import React from "react";

function Overview() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Total Users</h2>
          <p className="text-gray-600">1,234</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Total Sales</h2>
          <p className="text-gray-600">$123,456</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Total Orders</h2>
          <p className="text-gray-600">567</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
          <p className="text-gray-600">$789,012</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
