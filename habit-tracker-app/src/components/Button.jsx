import React from "react";

const Button = () => {
  // Need to props down the name of the button
  return (
    <>
      <button className="col-md-3 btn btn-outline-dark btn-sm">Done</button>
      <button className="col-md-3 btn btn-outline-dark btn-sm">Remove</button>
    </>
  );
};

export default Button;
