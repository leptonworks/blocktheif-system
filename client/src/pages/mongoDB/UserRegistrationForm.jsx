import React from "react";
import { FormGroup, Input } from "reactstrap";

const UserRegistrationForm = ({ user, handleUserChange }) => {
  return (
    <>
      <FormGroup>
        <label htmlFor="Email" className="sr-only">
          Email
        </label>
        <Input
          type="text"
          id="Email"
          name="Email"
          value={user.Email}
          onChange={handleUserChange}
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
          value={user.Password}
          onChange={handleUserChange}
          placeholder="Password"
          required
          className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        />
      </FormGroup>
    </>
  );
};

export default UserRegistrationForm;
