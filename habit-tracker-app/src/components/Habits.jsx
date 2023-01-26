import React, { useContext } from "react";
import HabitCard from "./HabitCard";
import { format } from "date-fns";
import { HabitCtx } from "../context/AppCtx";
import HabitModal from "./HabitModal";
import Table from "react-bootstrap/Table";

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
    const startDate = format(habitCtx.todayDate, "dd/MM/yy");
    const newHabitEntry = { name: newHabit, dates: {}, startDate };
    habitCtx.setHabitsState([...habitCtx.habitsState, newHabitEntry]);
  };

  const removeHabit = (name) => {
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
    <div className="row-habit">
      <Table striped borderless responsive hover variant="dark">
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
      </Table>
    </div>
  );
};

export default Habits;
