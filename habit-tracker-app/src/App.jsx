import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
