import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import greeter from "./Greeter.json";

function addProd() {
  const [depositValue, setDepositValue] = useState(0);
  const [greet, setGreet] = useState("");
  const [greetingValue, setGreetingValue] = useState("");
  const [balance, setBalance] = useState();
  const [nameValue, setNameValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [emeiValue, setEmeiValue] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const ABI = greeter.abi;
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    const requestAccounts = async () => {
      await provider.send("eth_requestAccounts", []);
    };

    const getGreeting = async () => {
      const greeting = await contract.greet();
      setGreet(greeting);
    };

    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress);
      setBalance(ethers.utils.formatEther(balance));
    };

    requestAccounts().catch(console.error);
    getBalance().catch(console.error);
    getGreeting().catch(console.error);
  }, []);

  const handleDepositChange = (e) => {
    setDepositValue(e.target.value);
  };

  const handleGreetingChange = (e) => {
    setGreetingValue(e.target.value);
  };
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorValue(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSizeValue(e.target.value);
  };

  const handleEmeiChange = (e) => {
    setEmeiValue(e.target.value);
  };

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    const ethValue = ethers.utils.parseEther(depositValue);
    const deposit = await contract.deposit({ value: ethValue });
    await deposit.wait();
    const balance = await provider.getBalance(contractAddress);
    setBalance(ethers.utils.formatEther(balance));
  };

  const handleGreetingSubmit = async (e) => {
    e.preventDefault();
  
    await contract.setGreeting(greetingValue, nameValue, colorValue, sizeValue, emeiValue);
    setGreet(greetingValue);
    setGreetingValue("");
    setNameValue("");
    setColorValue("");
    setSizeValue("");
    setEmeiValue("");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h3>{greet}</h3>
          {/* <h3>{nameValue}</h3>
          <h3>{colorValue}</h3>
          <h3>{sizeValue}</h3>
          <h3>{emeiValue}</h3> */}
          <p>Contract Balance: {balance} ETH</p>
        </div>

        <div className="col">
          <div className="mb-3">
            <h4>Deposit ETH</h4>
            <form onSubmit={handleDepositSubmit}>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  onChange={handleDepositChange}
                  value={depositValue}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Deposit
              </button>
            </form>

            <h4 className="mt-3">Change Greeting</h4>
            <form onSubmit={handleGreetingSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={handleGreetingChange}
                  value={greetingValue}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={handleNameChange}
                  value={nameValue}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={handleColorChange}
                  value={colorValue}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={handleSizeChange}
                  value={sizeValue}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={handleEmeiChange}
                  value={emeiValue}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addProd;
