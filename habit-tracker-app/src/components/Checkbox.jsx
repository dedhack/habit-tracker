import React, { useEffect, useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";

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

  useEffect(()=>{
    
  })

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked === true) {
      habitCtx.recordHabit(props.indexOfState, props.date);
    } else {
      habitCtx.unrecordHabit(props.indexOfState, props.date);
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
        checked={isChecked}
      />
    </>
  );
};

export default Checkbox;
