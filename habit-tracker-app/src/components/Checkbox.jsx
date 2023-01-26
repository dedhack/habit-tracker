import React, { useEffect, useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";
import axios from "axios";
import { parse, format } from "date-fns";

const Checkbox = (props) => {
  const habitCtx = useContext(HabitCtx);

  const [isChecked, setIsChecked] = useState(props.checked);
  const [dataRetrieved, setDataRetrieved] = useState(false);

  // const updatePixelaPixel = async (text) => {
  //   axios
  //     .put(
  //       `https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela/${text}`,
  //       "",
  //       {
  //         headers: {
  //           "X-USER-TOKEN": "devhabittracker",
  //           "Content-Length": "0",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   console.log(text);
  // };

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked === true) {
      habitCtx.recordHabit(props.indexOfState, props.date, habitCtx.pixels);
    } else {
      habitCtx.unrecordHabit(props.indexOfState, props.date, habitCtx.pixels);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name={props.name}
        id={props.index}
        value="checked"
        onChange={(e) => {
          handleOnChange(e);
        }}
        checked={props.checked}
      />
    </>
  );
};

export default Checkbox;
