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
      <div className="card text-bg-dark bg-opacity-75 my-1 rounded-pill p-3">
        <div className="card-body">
          <h5 className="card-title">{habit.name}</h5>
          <div className="">
            <ProgressBar now={percentage} label={`${percentage}%`} />
          </div>
        </div>
      </div>
    );
  });

  return <div className="">{mapOutHabits}</div>;
};

export default Graphs;
