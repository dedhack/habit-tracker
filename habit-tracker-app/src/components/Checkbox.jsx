import React, { useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    console.log(e.target.name);
  };

  return (
    <>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
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
