import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialManufacturer = {
  email: "",
  password: "",
};

const ManufacturerLogin = () => {
  const [manufacturer, setManufacturer] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const url = 'http://localhost:1337/api/manufacturers/login';
  
      console.log('Manufacturer data:', manufacturer);
  
      if (manufacturer.email && manufacturer.password) {
        const requestData = {
          email: manufacturer.email,
          password: manufacturer.password,
        };
        const res = await axios.post(url, requestData);
  
        console.log('Response:', res);
  
        if (res) {
          // Save the JWT to localStorage or any other storage method you prefer
          localStorage.setItem('manufacturerToken', res.data.jwt);
          setManufacturer(initialManufacturer);
          navigate('/manuDashboard'); // Change this to the manufacturer's dashboard page
        }
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Server response:', error.response);
        console.error('Server error data:', error.response.data);
        toast.error(JSON.stringify(error.response.data, null, 2), {
          hideProgressBar: true,
        });
      } else {
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
              Manufacturer Login..
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
              <label htmlFor="email" className="sr-only">
                Username or Email
              </label>
              <Input
                type="text"
                id="email"
                name="email"
                value={manufacturer.email}
                onChange={handleManufacturerChange}
                placeholder="Username or Email"
                required
                className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                value={manufacturer.password}
                onChange={handleManufacturerChange}
                placeholder="Password"
                required
                className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-smsm text-sm leading-4 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              />
            </FormGroup>
            <div>
              <button
                type="button"
                onClick={signIn}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
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
                  Don't have an account?
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <Link
                  to="/manufacturer/register"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
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

export default ManufacturerLogin;
