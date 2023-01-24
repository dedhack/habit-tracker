import React, { useEffect, useState } from "react";
import HabitCard from "./HabitCard";
import habitsArray from "../data/habitsArray";
import { subDays, format, eachDayOfInterval } from "date-fns";
// import Button from "./Button";
import { HabitCtx } from "../context/AppCtx";
// import { Modal, Button } from "react-bootstrap";
import HabitModal from "./HabitModal";

const Habits = () => {
  const [habitsState, setHabitsState] = useState(habitsArray);

  useEffect(() => {
    const localData = window.localStorage.getItem("USER_HABITS");
    if (localData !== null) setHabitsState(JSON.parse(localData));
  }, []);

  // Local Storage of habits state
  useEffect(() => {
    window.localStorage.setItem("USER_HABITS", JSON.stringify(habitsState));
  }, [habitsState]);

  ////////////////////////////////
  // Creating the dates for the week
  const todayDate = new Date();
  const lastWeek = subDays(todayDate, 6);
  const wholeWeek = eachDayOfInterval({
    start: lastWeek,
    end: todayDate,
  });
  // Convert javascript date to custom format
  const customWholeWeek = [];
  const convertToCustomFormat = () => {
    wholeWeek.map((date) => {
      customWholeWeek.push(format(date, "dd/MM/yy"));
    });
  };
  convertToCustomFormat();

  const weekMapped = customWholeWeek.map((date, i) => {
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
    setHabitsState([...habitsState, newHabitEntry]);
  };

  const removeHabit = (name) => {
    console.log("Habit name: " + name);
    const filteredHabits = habitsState.filter((d) => d.name !== name);
    setHabitsState(filteredHabits);
  };

  const recordHabit = (index, date) => {
    const updatedRecord = habitsState[index].dates.push(date);
    
    console.log(updatedRecord);
    console.log(index, date);
  };

  const unrecordHabit = (index, date) => {};

  ////////////////////////////////
  // Map out habits
  const habitsMapped = habitsState.map((habitInfo, i) => {
    return (
      <HabitCard
        key={i}
        indexOfState={i}
        name={habitInfo.name}
        habitDates={habitInfo.dates} // date array for each habit
        weekDates={customWholeWeek}
        onClick={removeHabit}
      />
    );
  });

  return (
    <HabitCtx.Provider
      value={{
        customWholeWeek,
        habitsState,
        setHabitsState,
        recordHabit,
        unrecordHabit,
      }}
    >
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
    </HabitCtx.Provider>
  );
};

export default Habits;
