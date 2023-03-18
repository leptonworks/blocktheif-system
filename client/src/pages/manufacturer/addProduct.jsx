import React, { useState } from "react";
import { ethers } from "ethers";
import greeter from "../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import QRCode from "qrcode";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productEmei, setProductEmei] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [qrImgUrl, setQrImgUrl] = useState("");

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
      alert("Product added successfully!");
      setSuccessMessage("Product added successfully!");
      setErrorMessage("");
    } catch (err) {
      console.error(err);
      alert("Error: ID already exists. Please choose another ID");
      setErrorMessage("Error: ID already exists. Please choose another ID.");
    }
  };

  return (
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
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-3">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-3">
              {errorMessage}
            </div>
          )}
        </form>
        {qrImgUrl && (
          <div className="mt-4">
            <img src={qrImgUrl} alt="QR code" />
          </div>
        )}
      </div>
    </div>
    );
}

export default AddProduct;