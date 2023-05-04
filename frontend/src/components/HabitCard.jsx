import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Checkbox from "./Checkbox";
import { HabitCtx } from "../context/AppCtx";

const HabitCard = ({ name, habitDates, weekDates, indexOfState, onClick }) => {
  const habitCtx = useContext(HabitCtx);

  const habitChecks = habitCtx.customWholeWeek.map(
    (dateOfWeek, indexOfWeek) => {
      if (habitDates[dateOfWeek] === "checked") {
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
    <tr className="my-2">
      <th>{name}</th>
      {habitChecks}
      <td>
        <Button variant="secondary" name="Remove" onClick={() => onClick(name)}>
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default HabitCard;
