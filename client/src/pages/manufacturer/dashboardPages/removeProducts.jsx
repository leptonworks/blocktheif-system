import React, { useState } from "react";
import { ethers } from "ethers";
import greeter from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import ConfirmationDialog from "./utils/confirmationDialog";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function RemoveProduct() {
  const [productId, setProductId] = useState(0);
  const [product, setProduct] = useState({
    name: "",
    emei: "",
    color: "",
    size: "",
    price: 0,
  });
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
  const ABI = greeter.abi;
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleGetProductSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting get product form...");
    try {
      const [name, emei, color, size, price] = await contract.getProduct(
        productId
      );
      setProduct({
        name,
        emei,
        color,
        size,
        price: ethers.utils.formatEther(price),
      });
      console.log("Product retrieved successfully.");
      setShowConfirmationDialog(true);
    } catch (err) {
      console.error(err);
      toast.error("Product with the given ID doesn't exist");

    }
  };

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    console.log("Submitting remove product form...");
    try {
      await contract.removeProduct(productId);
      console.log("Product removed successfully.");
      toast.success(`${product.name} is successfully deleted`);
    } catch (err) {
      console.error(err);
      toast.error("Error deleting product");
    }
    setShowConfirmationDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmationDialog(false);
  };


  return (
    <section className="nav-spacing h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full md:w-1/2 lg:w-1/2 px-4">
              <h3 className="text-lg font-bold">Product Data</h3>
              <p className="mt-2">Product Name: {product.name}</p>
              <p className="mt-2">Product Emei: {product.emei}</p>
              <p className="mt-2">Product Color: {product.color}</p>
              <p className="mt-2">Product Size: {product.size}</p>
              <p className="mt-2">Product Price: {product.price} ETH</p>
            </div>
          </div>
        </div>
      </div>
      {showConfirmationDialog && (
          <ConfirmationDialog
            onConfirm={handleDeleteProduct}
            onCancel={handleCancelDelete}
          />
        )}
      <div className="col-span-1 w-full h-full text-center bg-[#1E1E1E] py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div
            className="flex md:flex-row flex-col items-start justify-between md:p-20
      py-12 px-4"
          >
            <div className="flex-1 flex-col md:mr-10">
              <h1 className="text-white text-lg font-bold mt-3 mb-2">
                Remove Product
              </h1>
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
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RemoveProduct;
