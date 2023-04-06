import React from "react";

function History() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">History</h1>
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          <a
            href="#"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
