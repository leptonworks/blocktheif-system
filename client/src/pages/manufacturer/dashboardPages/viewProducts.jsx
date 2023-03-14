import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";

const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
const ABI = Product.abi;
const provider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, ABI, signer);

function viewProducts() {
  const [productCount, setProductCount] = useState(0);
  const [productIds, setProductIds] = useState([]);
  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    async function getProductIds() {
      const count = await contract.getProductCount();
      setProductCount(count.toString());
      const ids = await contract.getProductIds();
      const idArray = ids.map((id) => id.toNumber());
  
      // Create an array to store the products
      const products = [];
  
      // Loop through each product ID
      for (const id of idArray) {
        const product = await contract.getProduct(id);
        const [name, emei, color, size, price, timestamp] = product;
  
        // Add the product to the array
        products.push({
          id,
          name,
          emei,
          color,
          size,
          price: price.toString(),
          timestamp: timestamp.toNumber(),
        });
      }
  
      // Set the product data state with the array of products
      setProductData(products);
    }
  
    getProductIds();
  }, []);
  

  return (
<div className="bg-gray-100 min-h-screen">
  <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
    <div className="mt-16 px-4 py-6 sm:px-0">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">View Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.emei}</p>
              <p className="text-xl font-bold text-gray-800 mb-2">${product.price}</p>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}
export default viewProducts;
