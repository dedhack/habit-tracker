import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { subDays, format, eachDayOfInterval } from "date-fns";
import { HabitCtx } from "../context/AppCtx";

const HabitCard = ({ name, dates, weekDates, key }) => {
  // dates -> array dates
  const habitCtx = useContext(HabitCtx);
  const [date, setDate] = useState("");
  const checkboxes = habitCtx.customWholeWeek.map((date, index) => {
    return (
      <td>
        <Checkbox index={index} name={`${name}-${date}`} />
      </td>
    );
  });

  // useEffect(() => {
  //   console.log(date);
  // }, [date]);

  return (
    <tr className=" border border-dark rounded my-2">
      <th>{name}</th>
      {checkboxes}
      <td>
        <Button name="Remove" />
      </td>
    </tr>
  );
};

export default HabitCard;
