import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const HabitCard = () => {
  return (
    <div className="row border border-dark rounded my-2">
      <h3 className="col-md-3 mx-5">Habit name</h3>
      <Checkbox />
      <Checkbox />

      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />

      <Button />
    </div>
  );
};

export default HabitCard;
