import React, { useEffect, useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";
import axios from "axios";

const Checkbox = (props) => {
  const habitCtx = useContext(HabitCtx);

  const [isChecked, setIsChecked] = useState(props.checked);

  // useEffect(() => {
  //   props.habitDates.map((habitDates) => {
  //     if (habitDates === props.date) {
  //       setIsChecked(true);
  //       console.log(props.name, props.date);
  //     }
  //   });
  // }, [habitCtx.habitState]);

  // useEffect(()=>{

  // })
  const updatePixelaPixel = async (text) => {
    axios
      .put(
        `https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela/${text}`,
        "",
        {
          headers: {
            "X-USER-TOKEN": "devhabittracker",
            "Content-Length": "0",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
    console.log(text);
  };

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked === true) {
      habitCtx.recordHabit(props.indexOfState, props.date);
      updatePixelaPixel("increment");
    } else {
      habitCtx.unrecordHabit(props.indexOfState, props.date);
      updatePixelaPixel("decrement");
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
