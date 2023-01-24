import React, { useState, useEffect, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";
import {
  subDays,
  format,
  eachDayOfInterval,
  parse,
  differenceInDays,
} from "date-fns";

const Graphs = () => {
  const habitCtx = useContext(HabitCtx);

  // Calculate the percentage of the habit completed
  // no. of days = current date - start date
  // % = size of array of dates / number of days

  const mapOutHabits = habitCtx.habitsState.map((habit) => {
    const parsedStartDate = parse(habit.dates[0], "dd/MM/yy", new Date());
    const noOfDays = differenceInDays(habitCtx.todayDate, parsedStartDate);
    const trackedDays = habit.dates.length;
    const percentage = ((trackedDays / noOfDays) * 100).toFixed(2);
    // console.log(habit.name, noOfDays, trackedDays, percentage);

    return (
      <div>
        {habit.name}
        {percentage}%
      </div>
    );
  });

  return (
    <div>
      <h4>Display Graphs</h4>
      {mapOutHabits}
    </div>
  );
};

export default Graphs;