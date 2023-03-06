import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import greeter from "../../../../contract/artifacts/contracts/Greeter.sol/Product.json";

function addProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productId, setProductId] = useState(0);
  const [product, setProduct] = useState({ name: "", price: 0 });
  const [successMessage, setSuccessMessage] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0xb09da8a5B236fE0295A345035287e80bb0008290";
  const ABI = greeter.abi;
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    const requestAccounts = async () => {
      await provider.send("eth_requestAccounts", []);
    };

    requestAccounts().catch(console.error);
  }, []);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    await contract.addProduct(productId, productName, productPrice);
    setSuccessMessage("Product added successfully!");
  };

  const handleGetProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const [name, price] = await contract.getProduct(productId);
      setProduct({ name, price: ethers.utils.formatEther(price) });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center justify-center ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full md:w-1/2 lg:w-1/2 px-4">
              <h3 className="text-lg font-bold">Product Data</h3>
              <p className="mt-2">Product Name: {product.name}</p>
              <p className="mt-2">Product Price: {product.price} ETH</p>
            </div>
          </div>
          </div>
      </div>

          <div className="col-span-1 w-full h-full text-center bg-black py-32 flex items-center justify-center">
            <div className="flex w-full justify-center items-center">
              <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex-col md:mr-10">
                  <h4 className="text-lg font-bold mb-2">Add Product</h4>
                  <form onSubmit={handleAddProductSubmit}>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Product ID"
                        onChange={handleProductIdChange}
                        value={productId}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Product Name"
                        onChange={handleProductNameChange}
                        value={productName}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Product Price"
                        onChange={handleProductPriceChange}
                        value={productPrice}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add Product
                    </button>
                    {successMessage && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-3">
                        {successMessage}
                      </div>
                    )}
                  </form>

                  <h4 className="text-lg font-bold mt-3 mb-2">Get Product</h4>
                  <form onSubmit={handleGetProductSubmit}>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Product ID"
                        onChange={handleProductIdChange}
                        value={productId}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                    >
                      Get Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}

export default addProduct;
