import React from "react";
import Graphs from "./Graphs";
import Pixela from "./Pixela";
import Quote from "./Quote";

const DispData = () => {
  return (
    <div className="border border-1">
      <h3>DATA INSIDE HERE</h3>
      <div className="row">
        <div className="col-md-8">
          <Graphs />
          <Pixela />
        </div>
        <div className="col-md-4">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default DispData;
