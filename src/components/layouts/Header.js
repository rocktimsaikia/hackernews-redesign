import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: " #ff6600" }}>
      <Navbar.Brand href="#home" style={{ color: "#fff" }}>
        <span className="logo">Y</span> Hacker News
      </Navbar.Brand>
      <Nav className="ml-auto">
        <a
          href="https://github.com/RocktimSaikia/hacker-news-redesign"
          className="source"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ fontSize: "20px" }} /> source
        </a>
      </Nav>
    </Navbar>
  );
};

export default Header;
