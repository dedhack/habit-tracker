import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import DispData from "./components/DispData";
import Habits from "./components/Habits";
import habitsArray from "./data/habitsArray";
import { HabitCtx } from "./context/AppCtx";
import { subDays, format, eachDayOfInterval } from "date-fns";
import produce from "immer";

function App() {
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

  const recordHabit = (index, date) => {
    const updatedRecord = produce(habitsState, (draft) => {
      draft[index].dates.push(date);
    });
    setHabitsState(updatedRecord);
  };

  const unrecordHabit = (index, date) => {
    const updatedRecord = produce(habitsState, (draft) => {
      const i = draft[index].dates.findIndex((habitDate) => habitDate === date);
      if (index !== -1) draft[index].dates.splice(i, 1);
    });
    setHabitsState(updatedRecord);
  };

  return (
    <div className="container">
      <HabitCtx.Provider
        value={{
          habitsState,
          setHabitsState,
          customWholeWeek,
          recordHabit,
          unrecordHabit,
          todayDate,
        }}
      >
        <Header />
        <h1>Content below</h1>
        <Habits />
        <h1>Display Data Below</h1>
        <DispData />
      </HabitCtx.Provider>
    </div>
  );
}

export default App;
