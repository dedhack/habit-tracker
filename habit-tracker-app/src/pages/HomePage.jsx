import React from "react";
import Habits from "../components/Habits";
import DispData from "../components/DispData";

const HomePage = () => {
  return (
    <div>
      <h1>Content below</h1>
      <Habits />
      <h1>Display Data Below</h1>
      <DispData />
    </div>
  );
};

export default HomePage;
