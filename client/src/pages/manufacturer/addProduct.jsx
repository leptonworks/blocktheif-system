import React, { useState,useEffect } from "react";
import { ethers } from "ethers";
import greeter from "../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import QRCode from "qrcode";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productEmei, setProductEmei] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [qrImgUrl, setQrImgUrl] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);


  const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
  const ABI = greeter.abi;
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
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

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    const productId = new Date().getTime(); // Generate unique ID using timestamp
    console.log(productId);

  
    try {
      await contract.addProduct(
        productId,
        productName,
        productEmei,
        productColor,
        productSize,
        productPrice
      );
      const qr = await QRCode.toDataURL(productId.toString());
      setQrImgUrl(qr);
      toast.success("Product added successfully!", {     toastId: 'success1',
    });
    } catch (err) {
      console.error(err);
      toast.error("Error: ID already exists. Please choose another ID.", {     toastId: 'fail1',
    });
    }
  };
  
  useEffect(() => {
    if (showErrorMessage) {
      toast.error(errorMessage);
      setShowErrorMessage(false);
    }
  }, [showErrorMessage, errorMessage]);
  
  return (
    <div className="nav-spacing">
    <div className="w-full min-h-screen bg-[#1E1E1E] flex items-center justify-center py-12">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Add Product</h2>
        <form onSubmit={handleAddProductSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product Name"
              onChange={handleProductNameChange}
              value={productName}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product Emei"
              onChange={handleProductEmeiChange}
              value={productEmei}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product Color"
              onChange={handleProductColorChange}
              value={productColor}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product Size"
              onChange={handleProductSizeChange}
              value={productSize}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product Price"
              onChange={handleProductPriceChange}
              value={productPrice}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add Product
          </button>
        </form>
        {qrImgUrl && (
          <div className="mt-4 flex justify-center">
          <div className="bg-white p-4 rounded">
            <img src={qrImgUrl} alt="QR code" />
          </div>
        </div>
        )}
      </div>
    </div>
    </div>
    );
}

export default AddProduct;