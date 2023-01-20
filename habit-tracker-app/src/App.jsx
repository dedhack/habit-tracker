import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Content below</h1>
      <Content />
    </div>
  );
}

export default App;
