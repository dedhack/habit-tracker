import React, { useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";

const Checkbox = (props) => {
  const habitCtx = useContext(HabitCtx);

  const [isChecked, setIsChecked] = useState(props.checked);

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
