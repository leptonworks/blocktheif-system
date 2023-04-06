import React, { useState, useEffect } from "react";
import axiosInstance from './axiosInstance';
import axios from "axios";
import { userData } from "./helper";

function Products() {
  const [userProducts, setUserProducts] = useState([]);
  const { token } = userData();

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:5000/api/products/user-products",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User products response data:", response.data); // Keep this line for debugging
        setUserProducts(response.data.scannedProducts || []);
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    fetchUserProducts();
  }, [token]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="mt-16 px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {userProducts && userProducts.map((product) => (
              <div
                key={product.productId}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Product ID: {product.productId}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
