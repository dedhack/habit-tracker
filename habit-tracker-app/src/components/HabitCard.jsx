import React, { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { subDays, format, eachDayOfInterval } from "date-fns";

const HabitCard = ({ name, dates }) => {
  const [date, setDate] = useState("");

  // Date
  const handleDateRecord = () => {
    // const format = require("date-fns/format");
    const todayDate = new Date();
    // const currentDateFormatted = format(new Date(), "dd/MM/yyyy");
    const lastWeek = subDays(todayDate, 6);
    const wholeWeek = eachDayOfInterval({
      start: lastWeek,
      end: todayDate,
    });
    console.log(todayDate);
    console.log(lastWeek);
    console.log(wholeWeek);
  };

  // useEffect(() => {
  //   console.log(date);
  // }, [date]);

  return (
    <tr className=" border border-dark rounded my-2">
      <td>{name}</td>
      <td>
        <Checkbox name="Mon" />
      </td>
      <td>
        <Checkbox name="Tue" />
      </td>
      <td>
        <Checkbox name="Wed" />
      </td>
      <td>
        <Checkbox name="Thu" />
      </td>
      <td>
        <Checkbox name="Fri" />
      </td>
      <td>
        <Checkbox name="Sat" />
      </td>
      <td>
        <Checkbox name="Sun" />
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
