import React from "react";
import HabitCard from "./HabitCard";
import WeekDisplay from "./WeekDisplay";

const Habits = () => {
  return (
    <div className="row">
      <table className="">
        <WeekDisplay />
        <HabitCard />
        <HabitCard />
      </table>
    </div>
  );
};

export default Habits;
