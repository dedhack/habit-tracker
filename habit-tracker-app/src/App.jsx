import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import DispData from "./components/DispData";
import Habits from "./components/Habits";
import habitsArray from "./data/habitsArray";
import { HabitCtx } from "./context/AppCtx";
import { parse, subDays, format, eachDayOfInterval } from "date-fns";
import produce from "immer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitsPage from "./pages/HabitsPage";
import GraphsPage from "./pages/GraphsPage";
import pixelaData from "./data/pixelaData";
import axios from "axios";

function App() {
  const [habitsState, setHabitsState] = useState(habitsArray);
  const [pixels, setPixels] = useState(pixelaData);

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

  const updatePixelaPixel = async (date, buffer) => {
    console.log(date);
    const newDate = format(parse(date, "dd/MM/yy", new Date()), "yyyyMMdd");
    const qty = pixels[date] + buffer;
    axios
      .put(
        `https://pixe.la/v1/users/devhabittracker/graphs/habits-pixela/${newDate}`,
        `{"quantity":"${qty}","optionalData":"{\\"key\\":\\"value\\"}"}`,
        {
          headers: {
            "X-USER-TOKEN": "devhabittracker",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
    console.log(qty);
  };

  const recordHabit = (index, dateOfChecked, pixels) => {
    const checkedRecord = produce(habitsState, (draft) => {
      draft[index].dates[dateOfChecked] = "checked";
    });
    const pixelsRecord = produce(pixels, (draft) => {
      draft[dateOfChecked] += 1;
    });
    setHabitsState(checkedRecord);
    setPixels(pixelsRecord);
    setTimeout(() => {
      updatePixelaPixel(dateOfChecked, 1);
    }, 1000);
  };

  const unrecordHabit = (index, dateOfChecked, pixels) => {
    const uncheckedRecord = produce(habitsState, (draft) => {
      draft[index].dates[dateOfChecked] = "unchecked";
      // do we want to uncheck or totally remove the date?
    });
    const pixelsRecord = produce(pixels, (draft) => {
      draft[dateOfChecked] -= 1;
    });
    setHabitsState(uncheckedRecord);
    setPixels(pixelsRecord);
    setTimeout(() => {
      updatePixelaPixel(dateOfChecked, -1);
    }, 1000);
  };

  return (
    <div className="container-{breakpoint}">
      <HabitCtx.Provider
        value={{
          habitsState,
          setHabitsState,
          customWholeWeek,
          recordHabit,
          unrecordHabit,
          todayDate,
          pixels,
          setPixels,
          updatePixelaPixel,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/graphs" element={<GraphsPage />} />
        </Routes>
      </HabitCtx.Provider>
    </div>
  );
}

export default App;
