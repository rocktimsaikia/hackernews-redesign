import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navbar2 = () => {
  return (
    <Navbar style={{ background: "#e8e8e8" }}>
      <Nav className="mr-auto navbar2">
        <span style={{ background: "#ff6600", color: "#fff" }}>News</span>
        <span>Show</span>
        <span>Ask</span>
        <span>Jobs</span>
      </Nav>
      <Nav className="ml-auto navbar2">
        <span style={{ background: "#ff6600", color: "#fff" }}>Top</span>
        <span>New</span>
        <span>Best</span>
      </Nav>
    </Navbar>
  );
};

export default Navbar2;
