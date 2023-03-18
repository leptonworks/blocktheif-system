import React from "react";
import { Link } from "react-router-dom";

function ProductManagement() {
  return (
    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="p-4 border-2 border-gray-600 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <Link
            to="/ViewProduct"
            className="group flex flex-col items-center justify-center p-4 h-36 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 0l6 6m0 0l-6-6m6 0l-6 6"
              />
            </svg>
            <p className="text-xl text-gray-300">View Products</p>
          </Link>
          <Link
            to="/addproduct"
            className="group flex flex-col items-center justify-center p-4 h-36 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p className="text-xl text-gray-300">Add Products</p>
          </Link>
          <Link
            to="/RemoveProducts"
            className="group flex flex-col items-center justify-center p-4 h-36 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M1 1h14a1 1 0 011 1z"
                />
                </svg>
                <p className="text-xl text-gray-300">Remove Products</p>
                </Link>
                <Link
                         to="/ReviewProducts"
                         className="group flex flex-col items-center justify-center p-4 h-36 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
                       >
                <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           stroke="none"
                           className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
                         >
                <path d="M21.706 6.29l-3.999-4a1.001 1.001 0 00-1.414-.002l-4.001 3.999-1.292-1.292 4-4.001a1 1 0 10-1.414-1.414l-4 4.001L9.293 2 6.292.293a1 1 0 10-1.414 1.414l4.001 4-1.293 1.293-4-4.001a1 1 0 10-1.414 1.414l4.001 3.999-3.998 4A1 1 0 003 12a1 1 0 00.293.707L7 9.999l1.293 1.292-3.999 4.001a1.001 1.001 0 00.001 1.414l3.999 4c.186.188.43.287.709.287s.523-.099.706-.287l3.999-3.999 1.293 1.292-4.001 4a1 1 0 101.414 1.414l4.001-4.001 1.293 1.293-4 4.001a1 1 0 10.708 1.708l4-4.001 4.001 4a1.001 1.001 0 001.414-.002l4-4.001a1 1 0 000-1.414l-4.001-4 1.293-1.293 4.001 4c.378.378 1.022.38 1.412.002l4-4.001a1 1 0 00-.002-1.414l-4-4.001 1.293-1.293z" />
                </svg>
                <p className="text-xl text-gray-300">Product Reviews</p>
                </Link>
                </div>
                </div>
                </div>
                );
                }
                
                export default ProductManagement;