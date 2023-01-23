import React from "react";
import HabitCard from "./HabitCard";
// import WeekDisplay from "./WeekDisplay";
import habitsArray from "../data/habitsArray";
import { subDays, format, eachDayOfInterval } from "date-fns";
import Button from "./Button";

const Habits = () => {
  ////////////////////////////////
  // Creating the dates for the week
  const todayDate = new Date();
  // const currentDateFormatted = format(new Date(), "dd/MM/yyyy");
  const lastWeek = subDays(todayDate, 6);
  const wholeWeek = eachDayOfInterval({
    start: lastWeek,
    end: todayDate,
  });
  console.log(wholeWeek);
  const weekMapped = wholeWeek.map((date, i) => {
    let formattedDate = format(date, "dd/MM/yy");
    return <th key={i}>{formattedDate}</th>;
  });

  ////////////////////////////////
  // Map out habits
  const habitsMapped = habitsArray.map((habit, i) => {
    return <HabitCard key={i} name={habit.name} dates={habit.dates} />;
  });

  ////////////////////////////////
  const onAdd = () => {};

  return (
    <div className="row">
      <table className="">
        <thead>
          <tr>
            <th></th>
            {weekMapped}
            <th>
              <Button name="Add Habit" onClick={onAdd} />
            </th>
          </tr>
        </thead>
        {habitsMapped}
      </table>
    </div>
  );
};

export default Habits;
