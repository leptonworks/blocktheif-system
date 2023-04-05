import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import UserRegistrationForm from "./UserRegistrationForm";
import ManufacturerRegistrationForm from "./ManufacturerRegistrationForm";

const initialUser = {
  Email: "",
  Password: "",
};

const initialManufacturer = {
  Email: "",
  Password: "",
};

const registration1 = () => {
  const [user, setUser] = useState(initialUser);
  const [manufacturer, setManufacturer] = useState(initialManufacturer);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = "http://localhost:5000/auth/register";

      let requestData;

      if (selectedRole === "user") {
        requestData = {
          email: user.Email,
          password: user.Password,
          role: "user",
        };
      } else if (selectedRole === "manufacturer") {
        requestData = {
          email: manufacturer.Email,
          password: manufacturer.Password,
          role: "manufacturer",
        };
      } else {
        toast.error("Please select a role", {
          hideProgressBar: true,
        });
        return;
      }

      console.log("Request payload:", requestData);

      const res = await axios.post(url, requestData);

      console.log("Response:", res);

      console.log("Response data:", res.data);

      if (res) {
        setUser(initialUser);
        setManufacturer(initialManufacturer);
        navigate("/Login1");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Server response:", error.response);
        toast.error(error.response.data.message, {
          hideProgressBar: true,
        });
      } else {
        toast.error(error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleManufacturerChange = ({ target }) => {
    const { name, value } = target;
    setManufacturer((currentManufacturer) => ({
      ...currentManufacturer,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          {/* Add the background image URL */}
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Welcome to Registration
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              Our platform connects users and manufacturers, providing a seamless experience for product discovery, feedback, and communication. Register now to access the full range of features and benefits.
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
                Register
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Create a new account to get started
              </p>
            </div>
            <form autoComplete="off">
              <div className="flex justify-center items-center mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="role"
                    value="user"
                    onChange={handleRoleChange}
                  />
                  <span className="ml-2">User</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="role"
                    value="manufacturer"
                    onChange={handleRoleChange}
                  />
                  <span className="ml-2">Manufacturer</span>
                </label>
              </div>
              {selectedRole === "user" && (
                <UserRegistrationForm
                  user={user}
                  handleUserChange={handleUserChange}
                />
              )}
              {selectedRole === "manufacturer" && (
                <ManufacturerRegistrationForm
                  manufacturer={manufacturer}
                  handleManufacturerChange={handleManufacturerChange}
                />
              )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default registration1;
