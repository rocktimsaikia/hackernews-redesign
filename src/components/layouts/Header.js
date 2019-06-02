import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Navbar.Brand href="#home">
          <span className="logo">Y</span> Hacker News
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button id="btn" variant="outline-info">
              Search
            </Button>
          </Form>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
