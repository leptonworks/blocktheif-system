import React, { useState } from 'react';

const reviewProducts = () => {


  return (
  <div class="p-6">
      <h2 class="text-xl font-semibold mb-4">Product Reviews</h2>
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">Product Name</div>
                <div class="text-sm text-gray-500">Serial Number</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">Reviewer Name</div>
                <div class="text-sm text-gray-500">Review Date</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">4.5</div>
              </td>
              <td class="px-6 py-4 whitespace-wrap">
                <div class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod quam ac eros suscipit commodo. Sed eget malesuada arcu. Sed quis efficitur purus, quis ullamcorper dolor. Nullam vitae posuere risus, non vehicula tellus.</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default reviewProducts;