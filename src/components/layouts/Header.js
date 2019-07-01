import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ showLoader }) => {
  return (
    <Navbar style={{ backgroundColor: " #ff6600" }}>
      <Navbar.Brand href="#home" style={{ color: "#fff" }}>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none" }}
          onClick={showLoader}
        >
          <span className="logo">Y</span> Hacker News
        </Link>
      </Navbar.Brand>

      <Nav className="ml-auto">
        <a
          href="https://github.com/RocktimSaikia/hacker-news-redesign"
          className="source"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <i className="fab fa-github" style={{ fontSize: "20px" }} /> Star
        </a>
      </Nav>
    </Navbar>
  );
};

export default Header;
