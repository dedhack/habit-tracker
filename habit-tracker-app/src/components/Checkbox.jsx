import React, { useEffect, useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";

const Checkbox = (props) => {
  const habitCtx = useContext(HabitCtx);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    props.habitDates.map((habitDates) => {
      if (habitDates === props.date) {
        // console.log(habitDates, props.date)
        setIsChecked(true);
        console.log(props.name, props.date);
      }
    });
  }, [habitCtx.habitState]);

  const handleOnChange = (e) => {
    // console.log(isChecked);

    setIsChecked(!isChecked);
    if (e.target.checked === true) {
      // console.log("indexOfState: " + props.indexOfState);
      // console.log("index of checkbox: " + props.index); // index of checkbox
      habitCtx.recordHabit(props.indexOfState, props.date);
    }
    else{
      habitCtx.unrecordHabit(props.indexOfState, props.date)
    }
    // console.log(isChecked);
    // console.log("target: " + e.target.checked);
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
        checked={isChecked}
      />
    </>
  );
};

export default Checkbox;
