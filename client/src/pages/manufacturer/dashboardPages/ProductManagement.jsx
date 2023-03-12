import React from "react";

function ProductManagement() {
  return (
    <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <a href="/ViewProduct" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">View products</p>
          </a>
          <a href="/addproduct" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">Add products</p>
          </a>
          <a href="#" className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">Remove Product </p>
          </a>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
          <p className="text-2xl text-gray-400 dark:text-gray-500">Product Reviews</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
      </div>
   </div>
</div>
  );
}

export default ProductManagement;
