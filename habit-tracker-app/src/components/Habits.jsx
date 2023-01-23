import React, { useState } from "react";
import HabitCard from "./HabitCard";
// import WeekDisplay from "./WeekDisplay";
import habitsArray from "../data/habitsArray";
import { subDays, format, eachDayOfInterval } from "date-fns";
// import Button from "./Button";
import { HabitCtx } from "../context/AppCtx";
// import { Modal, Button } from "react-bootstrap";
import HabitModal from "./HabitModal";

const Habits = () => {
  const [habitsState, setHabitsState] = useState(habitsArray);

  // const [show, setShow] = useState(false);

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
  // Map out habits
  const habitsMapped = habitsState.map((habit, i) => {
    return (
      <HabitCard
        key={i}
        name={habit.name}
        dates={habit.dates} // date array for each habit
        weekDates={customWholeWeek}
      />
    );
  });

  ////////////////////////////////
  const addHabit = (newHabit) => {
    // console.log(newHabit);
    // add in newHabit into our habits state
    const newHabitEntry = { name: newHabit, dates: { newDate: "unchecked" } };
    // console.log(newHabitEntry);
    setHabitsState([newHabitEntry, ...habitsState]);
  };

  return (
    <HabitCtx.Provider value={{ customWholeWeek, habitsState, setHabitsState }}>
      <div className="row">
        <table className="">
          <thead>
            <tr>
              <th scope="col">Habits</th>
              {weekMapped}
              <th>
                {/* <Button name="Add Habit" onClick={onAdd} /> */}
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
