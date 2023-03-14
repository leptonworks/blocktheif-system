import React, { useState } from "react";
import axios from "axios";


function Manufacturer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    manufacturer: "",
    licensesNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createManufacturer(formData);
  };

  const submitFormData = async () => {
  try {
    const response = await axios.post(
      "http://localhost:1337/manufacturer-registration",
      formData
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


  return (
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full md:w-4/5 lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="mb-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <select
                id="manufacturer"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text
                gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
              >
                <option value="">Select Manufacturer</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Huawei">Huawei</option>
              </select>
            </div>
            <div className="mb-4 col-span-2">
              <input
                type="text"
                id="licensesNumber"
                name="licensesNumber"
                value={formData.licensesNumber}
                onChange={handleInputChange}
                className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Licence Number"
                required
              />
            </div>
            <div className="mb-4 col-span-2 text-center">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-1 w-full h-full text-center bg-[#1E1E1E] py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            {/* login */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manufacturer;
