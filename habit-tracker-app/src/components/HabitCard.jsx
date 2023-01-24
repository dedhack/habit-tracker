import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { subDays, format, eachDayOfInterval } from "date-fns";
import { HabitCtx } from "../context/AppCtx";
import produce from "immer";

const HabitCard = ({ name, habitDates, weekDates, indexOfState, onClick }) => {
  // console.log(habitDates);

  const habitCtx = useContext(HabitCtx);

  const habitChecks = habitCtx.customWholeWeek.map(
    (dateOfWeek, indexOfWeek) => {
      if (habitDates.includes(dateOfWeek)) {
        return (
          <>
            <td>
              <Checkbox
                key={indexOfWeek}
                date={dateOfWeek}
                indexOfState={indexOfState}
                checked={true}
              />
            </td>
          </>
        );
      } else {
        return (
          <>
            <td>
              <Checkbox
                key={indexOfWeek}
                date={dateOfWeek}
                indexOfState={indexOfState}
                checked={false}
              />
            </td>
          </>
        );
      }
    }
  );

  return (
    <tr className=" border border-dark rounded my-2">
      <th>{name}</th>

      {habitChecks}

      <td>
        <Button name="Remove" onClick={() => onClick(name)} />
      </td>
    </tr>
  );
};

export default HabitCard;
