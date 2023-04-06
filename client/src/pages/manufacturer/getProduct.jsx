import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
function addProduct() {
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
    // const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    // const ABI = greeter.abi;
    // const contract = new ethers.Contract(contractAddress, ABI, signer);

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
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center justify-center ">
        <form>
          <div className ="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="product_name"
              id="product_name"
              onChange={handleNameChange}
              value={nameValue}
              className ="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="product_name"
              className ="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>
          <div className ="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Emei"
              id="Emei"
              className ="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Emei"
              className ="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Emei Number
            </label>
          </div>
          <div className ="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="color"
              id="color"
              className ="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="color"
              className ="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Color 
            </label>
          </div>
        </form>
      </div>
      <div className="col-span-1 w-full h-full text-center bg-black py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex-col md:mr-10">
              <form>
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                SomeOther <br /> Fooking details
              </h1>
                <button
                  type="submit"
                  className ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
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
