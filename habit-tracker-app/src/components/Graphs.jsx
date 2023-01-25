import React, { useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";
import { parse, differenceInCalendarDays } from "date-fns";
import ProgressBar from "react-bootstrap/ProgressBar";

const Graphs = () => {
  const habitCtx = useContext(HabitCtx);

  const mapOutHabits = habitCtx.habitsState.map((habit, index) => {
    const parsedStartDate = parse(habit.startDate, "dd/MM/yy", new Date());
    const noOfDays =
      differenceInCalendarDays(habitCtx.todayDate, parsedStartDate) + 1;
    let counter = Object.values(habit.dates).filter(
      (status) => status === "checked"
    ).length;
    let percentage = ((counter / noOfDays) * 100).toFixed(2);

    return (
      <div>
        <div className="row">
          <div className="col-md-2">{habit.name}</div>
          <div className="col">
            <ProgressBar now={percentage} label={`${percentage}%`} />
          </div>
        </div>
      </div>
    );
  });

  return <div>{mapOutHabits}</div>;
};

export default Graphs;
