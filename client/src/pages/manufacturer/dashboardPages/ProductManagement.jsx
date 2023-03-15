import React from "react";

function ProductManagement() {
  return (
    <div class="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="p-4 border-2 border-gray-600 border-dashed rounded-lg dark:border-gray-700">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <a
            href="/ViewProduct"
            class="flex flex-col items-center justify-center h-24 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <p class="text-xl text-gray-300">
              View Products
            </p>
          </a>
          <a
            href="/addproduct"
            class="flex flex-col items-center justify-center h-24 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
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
            <p class="text-xl text-gray-300">Add Products</p>
          </a>
          <a
            href="/RemoveProducts"
            class="flex flex-col items-center justify-center h-24 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-gray-400 dark:text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p class="text-xl text-gray-300">
              Remove Products
            </p>
          </a>
        </div>
        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
          <a
            href="/ReviewProducts"
            class="flex items-center justify-center h-24 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="00 24 24"
              fill="currentColor"
              stroke="none"
              class="w-8 h-8 mr-2"
              >
              <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm-1.5 10.5h-3v-1h3v-3h1v3h3v1h-3v3h-1v-3z" />
              </svg>
              <p class="text-2xl text-gray-300">
              Product Reviews
              </p>
              </a>
              </div>
              </div>
              </div>
              );
              }
              
              export default ProductManagement;
