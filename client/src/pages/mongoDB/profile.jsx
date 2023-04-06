import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

import { userData } from "./helper";

import Img from "../../../images/landingPageLogo.png";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { token } = userData();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className=" flex font-medium items-center justify-center h-screen"
      style={{ fontFamily: "Montserrat" }}
    >
      <section className="w-84 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between"></div>
        <div className="mt-6 w-fit mx-auto">
          <img src={Img} className="rounded-full w-28" alt="profile picture" />
        </div>

        <div className="mt-8">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            UserName : {user.email.split("@")[0]}
            <br />
            Role : {user.role}
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">Active</p>
      </section>
    </section>
  );
};

export default Profile;
