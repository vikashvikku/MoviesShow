import React from "react";
import Trending from "../components/Trending/Trending";
import Recommended from "../components/Recommended/Recommended";

const Dashboard = () => {
  return (
    <div>
      <Trending />
      <Recommended />
    </div>
  );
};

export default Dashboard;
