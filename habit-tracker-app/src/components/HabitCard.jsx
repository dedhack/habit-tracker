import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { subDays, format, eachDayOfInterval } from "date-fns";
import { HabitCtx } from "../context/AppCtx";

const HabitCard = ({ name, dates, weekDates, indexOfState, onClick }) => {
  // dates -> array dates
  const habitCtx = useContext(HabitCtx);
  const [date, setDate] = useState("");
  const checkboxes = habitCtx.customWholeWeek.map((date, index) => {
    return (
      <td>
        <Checkbox key={index} index={index} name={`${name}-${date}`} />
      </td>
    );
  });

  return (
    <tr className=" border border-dark rounded my-2">
      <th>{name}</th>
      {checkboxes}
      <td>
        <Button name="Remove" onClick={() => onClick(name)} />
      </td>
    </tr>
  );
};

export default HabitCard;
