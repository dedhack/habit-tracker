import React, { useState, useContext } from "react";
import { HabitCtx } from "../context/AppCtx";
import { parse, differenceInCalendarDays } from "date-fns";
import ProgressBar from "react-bootstrap/ProgressBar";

const Graphs = () => {
  const habitCtx = useContext(HabitCtx);
  const [frequency, setFrequency] = useState([]);

  const mapOutHabits = habitCtx.habitsState.map((habit, index) => {
    const parsedStartDate = parse(habit.startDate, "dd/MM/yy", new Date());
    const noOfDays =
      differenceInCalendarDays(habitCtx.todayDate, parsedStartDate) + 1;
    let counter = Object.values(habit.dates).filter(
      (status) => status === "checked"
    ).length;
    let percentage = ((counter / noOfDays) * 100).toFixed(2);
    console.log(habit.name, counter, noOfDays, percentage);
    // if (isNaN(percentage)) percentage = 0;

    return (
      <div>
        <div className="row">
          <div className="col">{habit.name}</div>
          <div className="col">{percentage}%</div>
          <div className="col">
            <ProgressBar now={percentage} label={`${percentage}%`} />
          </div>
        </div>
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
