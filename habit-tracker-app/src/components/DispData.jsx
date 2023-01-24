import React, { useContext, useState, useEffect } from "react";
import { HabitCtx } from "../context/AppCtx";
import Graphs from "./Graphs";
import Pixela from "./Pixela";

const DispData = () => {
  const habitCtx = useContext(HabitCtx);

  return (
    <div className="border border-1">
      <h3>DATA INSIDE HERE</h3>
      <Graphs />
      <Pixela />
    </div>
  );
};

export default DispData;
