import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    // <div className="container-fluid bg-dark">
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="">Habit Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="habits">Habits</Nav.Link>
          <Nav.Link href="graphs">Graphs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // </div>
  );
};

export default Header;
