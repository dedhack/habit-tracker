import React, { useEffect, useState, useContext } from "react";
import HabitCard from "./HabitCard";
import habitsArray from "../data/habitsArray";
import { subDays, format, eachDayOfInterval } from "date-fns";
// import Button from "./Button";
import { HabitCtx } from "../context/AppCtx";
// import { Modal, Button } from "react-bootstrap";
import HabitModal from "./HabitModal";
import produce from "immer";

const Habits = () => {
  // const [habitsState, habitCtx.setHabitsState] = useState(habitsArray);

  // useEffect(() => {
  //   const localData = window.localStorage.getItem("USER_HABITS");
  //   if (localData !== null) habitCtx.setHabitsState(JSON.parse(localData));
  // }, []);

  // // Local Storage of habits state
  // useEffect(() => {
  //   window.localStorage.setItem("USER_HABITS", JSON.stringify(habitsState));
  // }, [habitsState]);

  const habitCtx = useContext(HabitCtx);

  ////////////////////////////////
  // Creating the dates for the week
  // const todayDate = new Date();
  // const lastWeek = subDays(todayDate, 6);
  // const wholeWeek = eachDayOfInterval({
  //   start: lastWeek,
  //   end: todayDate,
  // });
  // // Convert javascript date to custom format
  // const customWholeWeek = [];
  // const convertToCustomFormat = () => {
  //   wholeWeek.map((date) => {
  //     customWholeWeek.push(format(date, "dd/MM/yy"));
  //   });
  // };
  // convertToCustomFormat();

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
    // console.log(newHabit);
    // add in newHabit into our habits state
    const newHabitEntry = { name: newHabit, dates: [] };
    // console.log(newHabitEntry);
    habitCtx.setHabitsState([...habitsState, newHabitEntry]);
  };

  const removeHabit = (name) => {
    console.log("Habit name: " + name);
    const filteredHabits = habitsState.filter((d) => d.name !== name);
    habitCtx.setHabitsState(filteredHabits);
  };

  const recordHabit = (index, date) => {
    const updatedRecord = produce(habitsState, (draft) => {
      draft[index].dates.push(date);
    });
    habitCtx.setHabitsState(updatedRecord);
  };

  const unrecordHabit = (index, date) => {
    const updatedRecord = produce(habitsState, (draft) => {
      const i = draft[index].dates.findIndex((habitDate) => habitDate === date);
      if (index !== -1) draft[index].dates.splice(i, 1);
    });
    habitCtx.setHabitsState(updatedRecord);
  };

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
