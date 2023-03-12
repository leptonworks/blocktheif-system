import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import greeter from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import QRCode from "qrcode";

function ConfirmationDialog(props) {
  return (
    
    <div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Confirmation
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"           onClick={props.onConfirm}>
          Yes
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
  );
}

function removeProduct() {
  const [productName, setProductName] = useState("");

  const [productEmei, setProductEmei] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");

  const [productPrice, setProductPrice] = useState(0);
  const [productId, setProductId] = useState(0);
  const [product, setProduct] = useState({
    name: "",
    emei: "",
    color: "",
    size: "",
    price: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [qrValue, setQrValue] = useState("");
  const [qrImgUrl, setQrImgUrl] = useState("");

  const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
  const ABI = greeter.abi;
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductEmeiChange = (e) => {
    setProductEmei(e.target.value);
  };

  const handleProductColorChange = (e) => {
    setProductColor(e.target.value);
  };

  const handleProductSizeChange = (e) => {
    setProductSize(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  // let productIdCounter = 1; // initialize the counter at 1

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting add product form...");
    const productId = new Date().getTime(); // Generate unique ID using timestamp
    //     const productId = productIdCounter; // use the counter as the ID
    // productIdCounter++; // increment the counter
    try {
      console.log(productId);
      await contract.addProduct(
        productId,
        productName,
        productEmei,
        productColor,
        productSize,
        productPrice
      );
      const qr = await QRCode.toDataURL(productId.toString());
      console.log(qr);
      setQrImgUrl(qr);
      console.log("Product added successfully.");
      alert("Product added successfully!");
      setSuccessMessage("Product added successfully!");
      setErrorMessage("");
    } catch (err) {
      console.error(err);
      alert("Error: ID already exists. Please choose another ID");
      setErrorMessage("Error: ID already exists. Please choose another ID.");
    }
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
      alert("Product with the given ID doesn't exist");
    }
  };

  const handleRemoveProductSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting remove product form...");
    try {
      await contract.removeProduct(productId);
      console.log("Product removed successfully.");
    } catch (err) {
      console.error(err);
    }
  };

  // DIVIDER

  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const handleDeleteProduct = async (e) => {
    // Code to delete the product goes here
    e.preventDefault();
    console.log("Submitting remove product form...");
    try {
      await contract.removeProduct(productId);
      console.log("Product removed successfully.");
    } catch (err) {
      console.error(err);
    }
    //
    setShowConfirmationDialog(false);
  };

  function handleCancelDelete() {
    setShowConfirmationDialog(false);
  }

  return (
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center justify-center ">
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

      <div className="col-span-1 w-full h-full text-center bg-[#1E1E1E] py-32 flex items-center justify-center">
        {showConfirmationDialog && (
          <ConfirmationDialog
            onConfirm={handleDeleteProduct}
            onCancel={handleCancelDelete}
          />
        )}
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
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

export default removeProduct;
