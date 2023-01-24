import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { subDays, format, eachDayOfInterval } from "date-fns";
import { HabitCtx } from "../context/AppCtx";

const HabitCard = ({ name, habitDates, weekDates, indexOfState, onClick }) => {
  // console.log(habitDates);

  const habitCtx = useContext(HabitCtx);

  return (
    <tr className=" border border-dark rounded my-2">
      <th>{name}</th>
      {habitCtx.customWholeWeek.map((date, index) => {
        return (
          <td>
            <Checkbox
              key={index}
              index={index}
              indexOfState={indexOfState}
              name={`${name}-${date}`}
              date={date} // particular date from customWholeWeek
              checked={false}
              habitDates={habitDates} // need t o {} when passing boolean value
            />
          </td>
        );
      })}
      <td>
        <Button name="Remove" onClick={() => onClick(name)} />
      </td>
    </tr>
  );
};

export default HabitCard;
