import React, { useState,useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { ethers } from 'ethers';
import greeter from '../../../../contract/artifacts/contracts/Greeter.sol/Product.json';

function WebCam() {
  const [data, setData] = useState('No result');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isScanning, setIsScanning] = useState(true);


  const handleScan = async (result) => {
    if (result) {
      setData(result.text);
      const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
      const signer = provider.getSigner();
      const contractAddress = '0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f';
      const contract = new ethers.Contract(contractAddress, greeter.abi, signer);
      try {
        const productId = parseInt(result);
        const [name, emei, color, size, price] = await contract.getProduct(productId);
        const authenticate = await contract.authenticateProduct(productId);
        console.log("Here",authenticate);
        setSuccessMessage(`Product name: ${name}, EMEI: ${emei}, color: ${color}, size: ${size}, price: ${ethers.utils.formatEther(price)} ETH`);
        setErrorMessage('');
        setIsScanning(false); // Stop scanning after successful scan
      } catch (err) {
        console.error(err);
        setErrorMessage('Product not found. Please scan a valid QR code.');
        setSuccessMessage('');
      }
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg rounded-md overflow-hidden shadow-md">
        {isScanning ? (
          <QrReader
            onResult={handleScan}
            onError={handleError}
            className="w-full h-full"
          />
        ) : (
          <div className="bg-gray-300 p-4 text-center">
            Scan completed. Please check the product information below.
          </div>
        )}
        {errorMessage && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-3'>
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-3'>
            {successMessage}
          </div>
        )}
        <p className='bg-gray-600 text-white p-2'>Here {data}</p>
      </div>
    </div>
  );
}

export default WebCam;
