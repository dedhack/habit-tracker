import React, { useEffect, useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    props.habitDates.map((habitDates) => {
      if (habitDates === props.date) {
        // console.log(habitDates, props.date)
        setIsChecked(true);
      }
    });
  }, []);

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    console.log(e.target);
    console.log("target: " + e.target.checked);
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
