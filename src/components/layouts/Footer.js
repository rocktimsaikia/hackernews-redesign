import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        Made with love and passion{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>{" "}
      </span>
      <ul style={{ listStyleType: "none", margin: "0" }}>
        <li>
          <a
            href="https://instagram.com/knightcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/RocktimSaikia10"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fab fa-twitter-square" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RocktimSaikia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-alt" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
