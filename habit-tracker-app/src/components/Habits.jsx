import React, { useEffect, useState, useContext } from "react";
import HabitCard from "./HabitCard";
import habitsArray from "../data/habitsArray";
import { subDays, format, eachDayOfInterval } from "date-fns";
import { HabitCtx } from "../context/AppCtx";
import HabitModal from "./HabitModal";
import produce from "immer";

const Habits = () => {
  const habitCtx = useContext(HabitCtx);

  const weekMapped = habitCtx.customWholeWeek.map((date, i) => {
    let formattedDate = date;
    return (
      <th scope="col" key={i}>
        {formattedDate}
      </th>
    );
  });

  ////////////////////////////////
  const addHabit = (newHabit) => {
    const newHabitEntry = { name: newHabit, dates: {} };
    habitCtx.setHabitsState([...habitCtx.habitsState, newHabitEntry]);
  };

  const removeHabit = (name) => {
    console.log("Habit name: " + name);
    const filteredHabits = habitCtx.habitsState.filter((d) => d.name !== name);
    habitCtx.setHabitsState(filteredHabits);
  };
  ////////////////////////////////

  ////////////////////////////////
  // Map out habits
  const habitsMapped = habitCtx.habitsState.map((habitInfo, i) => {
    return (
      <HabitCard
        key={i}
        indexOfState={i}
        name={habitInfo.name}
        habitDates={habitInfo.dates} // date array for each habit
        weekDates={habitCtx.customWholeWeek}
        onClick={removeHabit}
      />
    );
  });

  return (
    <div className="row">
      <table className="">
        <thead>
          <tr>
            <th scope="col">Habits</th>
            {weekMapped}
            <th>
              <HabitModal addHabit={addHabit} />
            </th>
          </tr>
        </thead>
        <tbody>{habitsMapped}</tbody>
      </table>
    </div>
  );
};

export default Habits;
