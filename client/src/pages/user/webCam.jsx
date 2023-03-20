import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { ethers } from "ethers";
import greeter from "../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import jsQR from "jsqr";

function WebCam() {
  const [data, setData] = useState("No result");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const fileRef = useRef();

  const handleScan = async (result) => {
    if (result) {
      await authenticateProduct(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };


  const authenticateProduct = async (productId) => {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const signer = provider.getSigner();
    const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
    const contract = new ethers.Contract(contractAddress, greeter.abi, signer);
    try {
      const [name, emei, color, size, price] = await contract.getProduct(parseInt(productId));
      const authenticate = await contract.authenticateProduct(parseInt(productId));
      console.log("Here", authenticate);
      setSuccessMessage(
        `Product name: ${name}, EMEI: ${emei}, color: ${color}, size: ${size}, price: ${ethers.utils.formatEther(price)} ETH`
      );
      setErrorMessage("");
      setIsScanning(false); // Stop scanning after successful scan
    } catch (err) {
      console.error(err);
      setErrorMessage("Product not found. Please scan a valid QR code.");
      setSuccessMessage("");
    }
  };

  const handleClick = () => {
    fileRef.current.click();
  };


  const handleChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = async () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, image.width, image.height);
        const result = jsQR(imageData.data, imageData.width, imageData.height);
        if (result) {
          await authenticateProduct(result.data);
        } else {
          setErrorMessage("Failed to scan QR code from file.");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg rounded-md overflow-hidden shadow-md bg-white p-4">
        {isScanning ? (
          <QrReader onResult={handleScan} onError={handleError} className="w-full h-full" />
        ) : (
          <div className="bg-gray-300 p-4 text-center">
            Choose an option to scan the QR code.
          </div>
        )}
        <div className="mt-4">
          <button
            onClick={() => setIsScanning(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Use Webcam
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
          >
            Scan QR code
          </button>
          <input
            type="file"
            ref={fileRef}
            onChange={handleChange}
            accept="image/*"
            className="hidden"
          />
        </div>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-3">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-3">
            {successMessage}
          </div>
        )}
        <p className="bg-gray-600 text-white p-2 mt-4">Here {data}</p>
      </div>
    </div>
  );
}

export default WebCam;