import React from "react";
import Graphs from "./Graphs";
import Pixela from "./Pixela";
import Quote from "./Quote";

const DispData = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Graphs />
        </div>
        <div className="col-md-3">
          <Quote />
        </div>
      </div>
      <div className="row">
        <Pixela />
      </div>
    </div>
  );
};

export default DispData;
