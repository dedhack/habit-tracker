import React, { useEffect, useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    console.log(e.target);
    console.log("target: " + e.target.checked);
  };

  // useEffect(() => {
  //   // console.log("isChecked: " + isChecked);
  // }, [isChecked]);

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
