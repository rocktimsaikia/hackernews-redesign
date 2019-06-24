import React, { useRef } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navbar2 = ({ handleClick }) => {
  const spanRef = useRef(null);
  const spanRef2 = useRef(null);

  //primary click handler for show, ask and job news stories
  const onClick = (category, event) => {
    spanRef.current.listNode.childNodes.forEach(span => {
      span.className = "defaultColor";
    });
    spanRef2.current.listNode.childNodes.forEach(span => {
      span.className = "defaultColor";
    });
    event.target.className = "changableColor";
    handleClick(category);
  };

  //click handler for new, top, best stories
  const hanldeTopClick = (category, event) => {
    spanRef.current.listNode.childNodes.forEach(span => {
      span.className = "defaultColor";
    });
    spanRef2.current.listNode.childNodes.forEach(span => {
      span.className = "defaultColor";
    });
    event.target.className = "changableColor";
    spanRef.current.listNode.childNodes[0].className = "changableColor";
    handleClick(category);
  };

  //seperate click handler for news button
  //as it also changes the color of top stories button (which is its default set)
  const onNewsClick = (category, event) => {
    spanRef.current.listNode.childNodes.forEach(span => {
      span.className = "defaultColor";
    });
    event.target.className = "changableColor";
    spanRef2.current.listNode.childNodes[0].className = "changableColor";
    handleClick(category);
  };

  return (
    <Navbar style={{ background: "#e8e8e8" }}>
      <Nav className="mr-auto navbar2" ref={spanRef}>
        <span
          onClick={event => onNewsClick("topstories", event)}
          className="changableColor"
        >
          News
        </span>
        <span
          onClick={event => onClick("showstories", event)}
          className="defaultColor"
        >
          Show
        </span>
        <span
          onClick={event => onClick("askstories", event)}
          className="defaultColor"
        >
          Ask
        </span>
        <span
          onClick={event => onClick("jobstories", event)}
          className="defaultColor"
        >
          Jobs
        </span>
      </Nav>
      <Nav className="ml-auto navbar2" ref={spanRef2}>
        <span
          className="changableColor"
          onClick={event => hanldeTopClick("topstories", event)}
        >
          Top
        </span>
        <span
          onClick={event => hanldeTopClick("newstories", event)}
          className="defaultColor"
        >
          New
        </span>
        <span
          onClick={event => hanldeTopClick("beststories", event)}
          className="defaultColor"
        >
          Best
        </span>
      </Nav>
    </Navbar>
  );
};

export default Navbar2;
