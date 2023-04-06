import React from "react";
import CustomNav from "./customNav";
import { userData } from "../../helper";



const Home = () => {
  const { username } = userData();
  return (
    <div>
      <CustomNav />
      <div className="home">
        <br />
        <br /><br />
        <h2>Welcome {username}</h2>
      </div>
    </div>
  );
};

export default Home;
