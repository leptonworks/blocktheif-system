import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeUser } from "./helper";

const initialUser = { email: "", password: "" }; // Change identifier to email

const Login1 = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = "http://localhost:5000/auth/login";
  
    try {
      if (user.email && user.password) {
        const { data } = await axios.post(url, user);
  
        console.log("Response data:", data);
  
        if (data.token) {
          const userRole = data.user.role; // Get the role from the user object
          console.log(userRole)
          console.log("Storing user token and role");
          storeUser(data.token, userRole); // Store the role as well
          console.log("Stored user token and role successfully");
  
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
  
          if (userRole === "user") {
            navigate("/userDashboard");
          } else if (userRole === "manufacturer") {
            navigate("/manuDashboard");
          } else {
            toast.error("Invalid user role", {
              hideProgressBar: true,
            });
          }
        }
      }
    } catch (error) {
      toast.error("Entered wrong credentials", {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          {/* Add the background image URL */}
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              User pakaya..
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              What is  Ipsum Lorem Ipsum is simply dummy text of the
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
                  Email address or Username
                </label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email address or Username"
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
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                />
              </FormGroup>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleLogin}
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
                    Or sign up with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <Link
                    to="/registration1"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;
