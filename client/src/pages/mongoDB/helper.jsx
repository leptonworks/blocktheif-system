import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (token,userRole) => {
  localStorage.setItem("user", JSON.stringify({ token }));
  localStorage.setItem("userRole", userRole);

};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { token } = userData();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return <Component />;
};
