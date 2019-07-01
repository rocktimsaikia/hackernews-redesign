import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Navbar2 = ({ showLoader }) => {
  return (
    <Navbar style={{ background: "#e8e8e8" }}>
      <Nav className="mr-auto navbar2">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <span>News</span>
          </Dropdown.Toggle>

          <Dropdown.Menu style={dropDownMenuStyle}>
            <Dropdown.Item onClick={showLoader}>
              <Link to="/top" style={{ textDecoration: "none", color: "#000" }}>
                <div>Top</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={showLoader}>
              <Link to="/new" style={{ textDecoration: "none", color: "#000" }}>
                <div> New</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={showLoader}>
              <Link
                to="/best"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div>Best</div>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link
          to="/shows"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>Show</span>
        </Link>

        <Link
          to="/ask"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>Ask</span>
        </Link>

        <Link
          to="/jobs"
          style={linkStyle}
          onClick={showLoader}
          className="navLink"
        >
          <span>Jobs</span>
        </Link>
      </Nav>
    </Navbar>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  cursor: "pointer",
  marginRight: "10px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px",
  boxShadow: "0px 2px 10px -7px rgba(0, 0, 0, 0.75)",
  borderRadius: "20px",
  transition: " all 0.5s",
  background: "#fff"
};

const dropDownMenuStyle = {
  boxShadow: " 0px 2px 15px -7px rgba(0, 0, 0, 0.75)"
};
export default Navbar2;
