import React, { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const HabitCard = () => {
  const [date, setDate] = useState(null);

  // Date
  const handleDateRecord = () => {
    const currentDate = new Date();
    const dateFormatted =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();
    setDate(dateFormatted);
    // console.log(dateFormatted);
  };

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <tr className=" border border-dark rounded my-2">
      <td>Habit name</td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox />
      </td>

      <td>
        <Button name="Record" onClick={handleDateRecord} />
      </td>
      <td>
        <Button name="Remove" />
      </td>
    </tr>
  );
};

export default HabitCard;
