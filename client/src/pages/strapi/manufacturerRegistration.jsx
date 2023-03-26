import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialManufacturer = {
  Email: "",
  Password: "",
};

const ManufacturerRegistration = () => {
  const [manufacturer, setManufacturer] = useState(initialManufacturer);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/manufacturers/register`;

      console.log("Manufacturer data:", manufacturer);

      if (
        manufacturer.Email &&
        manufacturer.Password
      ) {
        const requestData = {
          data: manufacturer,
        };
        const res = await axios.post(url, requestData);
        console.log("Response:", res);
        if (res) {
          setManufacturer(initialManufacturer);
          navigate("/ManufacturerLogin");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        // The request was made, and the server responded with a status code
        console.error("Server response:", error.response);
        toast.error(error.response.data.message, {
          hideProgressBar: true,
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  const handleManufacturerChange = ({ target }) => {
    const { name, value } = target;
    setManufacturer((currentManufacturer) => ({
      ...currentManufacturer,
      [name]: value,
    }));
  };  

  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          {/* Add the background image URL */}
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Manufacturer Registration..
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has?
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcome Back!
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Please sign in to your account
              </p>
            </div>
            <form autoComplete="off">
            <FormGroup>
              <label htmlFor="Email" className="sr-only">
                Email
              </label>
              <Input
                type="text"
                id="Email"
                name="Email"
                value={manufacturer.Email}
                onChange={handleManufacturerChange}
                placeholder="Email"
                required
                className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Password" className="sr-only">
                Password
              </label>
              <Input
                type="Password"
                id="Password"
                name="Password"
                value={manufacturer.Password}
                onChange={handleManufacturerChange}
                placeholder="Password"
                required
                className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              />
            </FormGroup>
            <div>
              <button
                type="button"
                onClick={signUp}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <Link
                  to="/login"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
    </div>
    </div>
  );
};

export default ManufacturerRegistration;
