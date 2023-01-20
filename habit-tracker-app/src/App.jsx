import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import DispData from "./components/DispData";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Content below</h1>
      <Content />
      <h1>Display Data Below</h1>
      <DispData />
    </div>
  );
}

export default App;
