import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { HabitCtx } from "../context/AppCtx";
import { Spinner } from "react-bootstrap";

const Pixela = () => {
  const habitCtx = useContext(HabitCtx);

  // Fetch the chart via get API call
  const [svg, setSVG] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url =
    "https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela?appearance=dark";
  const url2 =
    "https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela?date=20230130&mode&appearance=dark";

  const fetchPixela = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setSVG(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPixela();
    console.log("Fetching...");
  }, [habitCtx.habitsState]);

  return (
    <div className="container">
      {!isLoading && (
        <div
          className="pixela-display my-5 mb-5"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
      {isLoading && (
        <div className="row">
          <div className="text-center">
            <Spinner animation="grow" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pixela;
