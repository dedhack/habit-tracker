import React from "react";
import Habits from "../components/Habits";
import DispData from "../components/DispData";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <Habits />
      <br />
      <DispData />
    </div>
  );
};

export default HomePage;
