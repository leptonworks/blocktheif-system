import React from "react";

function review() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.samsung.com/us/smartphones/galaxy-s23-ultra/" aria-label="Article">
            <img
              src="https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            Mar 10, 2023
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">samsung galaxy s23 ultra</p>
            </a>
            <p className="mb-4 text-gray-700">
            All S23 Ultra models have Snapdragon 8 Gen 2 (no more Exynos) New 200MP main camera, improvements to the other cameras. 256GB base storage (double than before) Big improvement in loudspeaker quality
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src="https://www.apple.com/v/iphone-14-pro/e/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              4 Nov 2020
            </p>
            <a
              href="https://www.apple.com/iphone-14-pro/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">iphone 14 pro max</p>
            </a>
            <p className="mb-4 text-gray-700">
            he iPhone 14 Pro Max isn’t just the most powerful phone around. It’s a joy to use, thanks to the clever new Dynamic Island for displaying notifications and live activities. Apple’s largest Pro model also delivers fantastic cameras
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.mi.com/global/product/xiaomi-13/" aria-label="Article">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/02/XIaomi-13-Pro.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
              xiaomi 13
              </p>
            </a>
            <p className="mb-4 text-gray-700">
            Xiaomi has revamped the design of the 13 Pro – just not in a good way. Most of the phone retains its usual sleek appearance, but the gigantic camera module sticks out like a sore thumb.
            </p>
          </div>
        </div>
        
      
      </div>
    </div>
  );
}

export default review;
