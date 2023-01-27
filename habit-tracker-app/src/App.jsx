import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { HabitCtx } from "./context/AppCtx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitsPage from "./pages/HabitsPage";
import GraphsPage from "./pages/GraphsPage";
import "./App.css";
// Libraries
import axios from "axios";
import { parse, subDays, format, eachDayOfInterval } from "date-fns";
import produce from "immer";
// Arrays
import pixelaData from "./data/pixelaData"; // array for init only, data will be manipulated in state and persists via local storage
import habitsArray from "./data/habitsArray";

function App() {
  const [habitsState, setHabitsState] = useState(habitsArray); // State for storing habits data
  const [pixels, setPixels] = useState(pixelaData); // State to keep track of number of activities per day to be fed to pixela

  // Local Storage of habits state
  useEffect(() => {
    const localData = window.localStorage.getItem("USER_HABITS");
    if (localData !== null) setHabitsState(JSON.parse(localData));

    const localData2 = window.localStorage.getItem("PIXELS_HABITS");
    if (localData2 !== null) setPixels(JSON.parse(localData2));
  }, []); // on init, check for local storage to contain the data based on the above key
  useEffect(() => {
    window.localStorage.setItem("USER_HABITS", JSON.stringify(habitsState));
    window.localStorage.setItem("PIXELS_HABITS", JSON.stringify(pixels));
  }, [habitsState, pixels]); // set the state to local storage

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

  // API put the number of pixels
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

  // recordHabit and unrecordHabit, functions for manipulating states of habits and pixels
  // functions triggered at Checkbox component level
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
