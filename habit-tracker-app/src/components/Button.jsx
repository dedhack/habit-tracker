import React from "react";

const Button = ({ name, onClick }) => {
  // Need to props down the name of the button

  return (
    <>
      {/* TODO: need to make button smaller */}
      <button
        className="col btn btn-outline-dark btn-sm"
        type="submit"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
