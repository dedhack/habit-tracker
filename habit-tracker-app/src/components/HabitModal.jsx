import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const HabitModal = ({ addHabit }) => {
  const [newHabit, setNewHabit] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    addHabit(newHabit);
    setShow(false);
    setNewHabit("");
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Add Habit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="habitForm.ControlInput1">
              <Form.Label>Habit Name</Form.Label>
              <Form.Control
                placeholder="e.g. running"
                autoFocus
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HabitModal;
