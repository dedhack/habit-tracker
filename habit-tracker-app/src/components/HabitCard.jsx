import React from "react";
import Button from "./Button";

const HabitCard = () => {
  return (
    <div className="row border border-dark rounded my-2">
      <h3 className="col-md-3 mx-5">Habit name</h3>
      <Button />
    </div>
  );
};

export default HabitCard;
