import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { HabitCtx } from "../context/AppCtx";

const Pixela = () => {
  const habitCtx = useContext(HabitCtx);

  // Fetch the chart
  const [svg, setSVG] = useState(null);
  const url = "https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela";
  const url2 =
    "https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela?date=20230130&mode&appearance=dark";

  const fetchPixela = () => {
    axios
      .get(url2)
      .then((response) => {
        setSVG(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPixela();
  }, [habitCtx.habitsState]);

  return (
    <div>
      <h4>Display Pixela</h4>
      <div
        className="pixela-display my-5 mb-5"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>
      {/* <img
        src="https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela"
        alt="Pixela Graph"
      ></img> */}
    </div>
  );
};

export default Pixela;
