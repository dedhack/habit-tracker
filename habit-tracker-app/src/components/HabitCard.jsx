import React, { useState } from "react";
import Button from "./Button";
// import Checkbox from "./Checkbox";

const HabitCard = () => {
  const [date, setDate] = useState(null);

  const handleDateRecord = () => {
    const currentDate = new Date();
    const dateFormatted =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();
    setDate(dateFormatted);
    console.log(dateFormatted);
  };

  return (
    <div className="row border border-dark rounded my-2">
      <h4 className="col-3">Habit name</h4>
      <button type="submit" onClick={handleDateRecord}>
        Record
      </button>

      <Button name="Done" />
      <Button name="Remove" />
    </div>
  );
};

export default HabitCard;
