import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DispData from "./components/DispData";
import Habits from "./components/Habits";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Content below</h1>
      <Habits />
      <h1>Display Data Below</h1>
      <DispData />
    </div>
  );
}

export default App;
