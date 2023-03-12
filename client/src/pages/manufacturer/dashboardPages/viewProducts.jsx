import React from 'react';

function viewProducts() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">View Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
                <p className="text-sm text-gray-500 mb-2">Product Description</p>
                <p className="text-xl font-bold text-gray-800 mb-2">$9.99</p>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
                <p className="text-sm text-gray-500 mb-2">Product Description</p>
                <p className="text-xl font-bold text-gray-800 mb-2">$9.99</p>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
                <p className="text-sm text-gray-500 mb-2">Product Description</p>
                <p className="text-xl font-bold text-gray-800 mb-2">$9.99</p>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
                <p className="text-sm text-gray-500 mb-2">Product Description</p>
                <p className="text-xl font-bold text-gray-800 mb-2">$9.99</p>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default viewProducts;
