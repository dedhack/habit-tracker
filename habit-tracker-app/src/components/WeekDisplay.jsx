import React, { useState } from "react";
import Button from "./Button";
import { Modal } from "react-bootstrap";

const WeekDisplay = ({ dates }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAdd = () => {};

  // const datesForTheWeek = 

  return (
    <>
      <thead>
        <tr>
          <th></th>
          <th>{dates[0]}</th>
          <th>{dates[1]}</th>
          <th>{dates[2]}</th>
          <th>{dates[3]}</th>
          <th>{dates[4]}</th>
          <th>{dates[5]}</th>
          <th>{dates[6]}</th>
          <th>
            <Button name="Add Habit" onClick={onAdd} />
          </th>
        </tr>
      </thead>
    </>
  );
};

export default WeekDisplay;
