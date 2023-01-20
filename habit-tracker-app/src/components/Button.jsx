import React from "react";

const Button = ({ name }) => {
  // Need to props down the name of the button

  return (
    <>
      {/* TODO: need to make button smaller */}
      <button className="col btn btn-outline-dark btn-sm">{name}</button>
    </>
  );
};

export default Button;
